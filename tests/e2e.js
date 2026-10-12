// End-to-end test (Playwright). Usage: PW=/path/to/playwright EPUB=/path/to/book.epub [SHOTS=/dir] node tests/e2e.js
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path');
(async () => {
  const epub = process.env.EPUB, shots = process.env.SHOTS;
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
  const ctx = await browser.newContext({ viewport: { width: 1500, height: 950 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
  const url = 'file://' + path.resolve(__dirname, '../index.html');
  const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) process.exitCode = 1; };
  const shot = async n => { if (shots) await page.screenshot({ path: path.join(shots, n + '.png') }); };
  const go = async h => { await page.evaluate(x => { location.hash = x; }, h); await page.waitForTimeout(250); };
  const count = sel => page.locator(sel).count();
  const step = async (name, fn) => { try { await fn(); } catch (e) { ok(false, name + ' — ' + e.message.split('\n')[0]); } };

  await page.goto(url);
  await page.waitForSelector('.hero');
  ok(true, 'home renders');
  await step('import', async () => {
    await page.setInputFiles('[data-import-input]', epub);
    await page.waitForSelector('text=Loaded', { timeout: 20000 });
    ok(true, 'epub imported');
  });
  await shot('home');

  // every route renders without error
  const routes = ['#/primer/0', '#/primer/1', '#/primer/2', '#/primer/3', '#/primer/4', '#/primer/5', '#/terms', '#/people', '#/debates', '#/refs', '#/notebook'];
  for (const r of routes) await step(r, async () => { await go(r); ok(await count('.page') > 0, 'route ' + r); });
  await go('#/primer/1'); await shot('primer-argument');
  await go('#/people'); await shot('people');

  // every unit overview + every section
  const units = await page.evaluate(() => CP.UNITS.map(u => ({ id: u.id, n: CP.sectionCount(u.id) })));
  ok(units.length === 11, '11 units');
  for (const u of units) {
    await step('unit ' + u.id, async () => {
      await go('#/u/' + u.id);
      ok(await count('.unit-head h1') === 1, u.id + ' overview');
      for (let i = 0; i < u.n; i++) {
        await go('#/u/' + u.id + '/' + i);
        const paras = await count('.reader [data-pid]');
        const gloss = await page.evaluate(() => document.querySelectorAll('.gloss').length);
        const need = await page.evaluate(([id, i]) => { const s = CP.sectionsOf(id)[i]; return (s && s.glosses ? s.glosses.length : 0); }, [u.id, i]);
        if (!paras) ok(false, u.id + '/' + i + ' has no paragraphs');
        if (gloss < need) ok(false, u.id + '/' + i + ' gloss anchors ' + gloss + '/' + need);
      }
    });
  }
  ok(true, 'all sections visited');

  // reader interactions
  await go('#/u/ch1/0'); await page.waitForSelector('.reader [data-pid]');
  await shot('reader');
  await step('term drawer', async () => {
    const t = page.locator('.reader .term-link').first(); await t.click();
    await page.waitForSelector('.drawer'); ok(true, 'term drawer opens');
    await page.click('.drawer [data-drawer-close]'); ok(await count('.drawer') === 0, 'drawer closes');
  });
  await step('gloss popover', async () => {
    await page.locator('.reader .gloss').first().click();
    await page.waitForSelector('.popcard'); ok(true, 'gloss popover'); await page.keyboard.press('Escape');
  });
  await step('endnote popover', async () => {
    const fn = page.locator('.reader sup.fn').first();
    if (await fn.count()) { await fn.click(); await page.waitForSelector('.popcard'); ok(true, 'endnote popover'); await page.keyboard.press('Escape'); }
  });
  // highlight each colour
  for (let ci = 0; ci < 5; ci++) await step('highlight ' + ci, async () => {
    await page.evaluate(i => {
      const p = document.querySelectorAll('.reader [data-pid]')[i + 1]; const w = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
      const n = w.nextNode(); const r = document.createRange(); r.setStart(n, 0); r.setEnd(n, Math.min(25, n.nodeValue.length));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      p.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    }, ci);
    await page.waitForSelector('.seltool');
    await page.locator('.seltool [data-hlc]').nth(ci).click();
    await page.waitForTimeout(150);
  });
  ok(await count('.reader .hl') >= 5, 'five highlights painted');
  await shot('highlights');
  await step('highlight note + delete', async () => {
    await page.locator('.reader .hl').first().click();
    await page.waitForSelector('.popcard textarea');
    await page.fill('.popcard textarea', 'my test note'); await page.waitForTimeout(300);
    await page.click('.popcard [data-annact="del"]'); await page.waitForTimeout(200);
    ok(await count('.reader .hl') === 4, 'delete highlight');
  });
  await step('selection note', async () => {
    await page.evaluate(() => {
      const p = document.querySelectorAll('.reader [data-pid]')[6]; const n = document.createTreeWalker(p, NodeFilter.SHOW_TEXT).nextNode();
      const r = document.createRange(); r.setStart(n, 0); r.setEnd(n, Math.min(20, n.nodeValue.length)); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      p.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    });
    await page.waitForSelector('.seltool'); await page.click('.seltool [data-sel="note"]');
    await page.waitForSelector('.popcard textarea, .drawer textarea');
    ok(true, 'selection note opens editor'); await page.keyboard.press('Escape');
  });
  await step('paragraph note', async () => {
    await page.locator('.reader .pw').nth(2).hover();
    await page.locator('[data-ptool="note"]').nth(2).click({ force: true });
    await page.waitForSelector('.popcard textarea'); await page.fill('.popcard textarea', 'para note'); await page.keyboard.press('Escape');
    ok(true, 'paragraph note');
  });
  await step('section note + mark read', async () => {
    await page.click('[data-comp="mine"]');
    await page.fill('.companion textarea[data-notekey]', 'section note here'); await page.waitForTimeout(500);
    await page.click('[data-markdone]'); await page.waitForTimeout(200);
    ok(await page.evaluate(() => CP.store.done('ch1:0')), 'mark read persisted');
  });
  await step('companion tabs', async () => {
    for (const t of ['guide', 'notesfn', 'mine']) { await page.click('[data-comp="' + t + '"]'); }
    ok(true, 'companion tabs');
  });
  await step('diagram enlarge', async () => {
    await go('#/u/ch1'); await page.locator('[data-zoom]').first().click(); await page.waitForSelector('.lightbox');
    await shot('lightbox'); await page.keyboard.press('Escape'); ok(await count('.lightbox') === 0, 'lightbox closes');
  });
  await step('next/prev', async () => {
    await go('#/u/ch1/0'); await page.locator('.pager a.next, a.next').first().click(); await page.waitForTimeout(250);
    ok(/u\/ch1\/1/.test(page.url()), 'next section'); await page.locator('a.prev').first().click(); await page.waitForTimeout(250);
    ok(/u\/ch1\/0/.test(page.url()), 'prev section');
  });

  // search
  await step('search', async () => {
    await page.keyboard.press('/'); await page.waitForSelector('.palette');
    for (const q of ['sticky', 'bringing them home', 'wounded attach', 'Spivak', 'section note here']) {
      await page.fill('.palette input', q); await page.waitForTimeout(350);
      const n = await count('.palette [data-route], .palette .res, .palette li, .palette a');
      ok(n > 0, 'search "' + q + '" → ' + n);
    }
    await shot('search');
    await page.keyboard.press('Escape'); ok(await count('.palette') === 0, 'palette closes');
  });
  // glossary / people filters
  await step('filters', async () => {
    await go('#/terms'); await page.fill('[data-termfilter]', 'sticky'); await page.waitForTimeout(200);
    ok(await count('[data-termgrid] .card') >= 1, 'term filter');
    await page.fill('[data-termfilter]', ''); await page.click('[data-cat="emotion"]'); await page.waitForTimeout(200); ok(await count('[data-termgrid] .card') >= 1, 'term category');
    await go('#/people'); await page.fill('[data-peoplefilter]', 'butler'); await page.waitForTimeout(200);
    ok(await count('[data-peoplegrid] .card') >= 1, 'people filter');
    await go('#/refs'); await page.fill('[data-reffilter]', 'butler'); await page.waitForTimeout(200);
    ok(await count('[data-reflist] > *') >= 1, 'ref filter');
    await go('#/debates/fear-security'); ok(await count('details[open]') === 1, 'debate deep link opens');
  });
  // notebook
  await step('notebook', async () => {
    await go('#/notebook'); await page.waitForTimeout(200); await shot('notebook');
    ok(await count('.ann') >= 2, 'notebook lists annotations');
    const dl = page.waitForEvent('download', { timeout: 4000 }).catch(() => null);
    const ex = page.locator('[data-export]').first(); if (await ex.count()) { await ex.click(); ok(!!(await dl), 'export downloads'); }
  });
  // settings
  await step('settings', async () => {
    await page.click('[data-open-settings]'); await page.waitForSelector('.drawer, .settings');
    const th = page.locator('[data-theme]'); if (await th.count()) { await th.last().click(); await page.waitForTimeout(150); await shot('night'); await th.first().click(); }
    ok(true, 'settings'); await page.keyboard.press('Escape');
  });
  // persistence
  await step('persistence', async () => {
    await page.reload(); await page.waitForSelector('.hero, .page, .study', { timeout: 8000 });
    ok(await page.evaluate(() => !!CP.book), 'book persists across reload');
    ok(await page.evaluate(() => CP.store.anns().length > 0), 'annotations persist');
  });
  // mobile
  await step('mobile', async () => {
    await page.setViewportSize({ width: 390, height: 800 }); await go('#/u/ch2/0'); await page.waitForTimeout(300); await shot('mobile');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    ok(overflow <= 2, 'no horizontal overflow on mobile (' + overflow + 'px)');
    await page.click('[data-showpane="guide"]'); ok(true, 'mobile guide pane');
  });

  console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no JS errors');
  if (errors.length) process.exitCode = 1;
  await browser.close();
})();
