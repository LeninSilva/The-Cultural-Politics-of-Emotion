/* UI primitives: popover cards, slide-over drawer, lightbox, selection toolbar. */
(function () {
  'use strict';
  var CP = window.CP, $ = CP.$, esc = CP.esc, UI = CP.ui = {};

  /* ---------- popover ---------- */
  var popEl = null, popOwner = null;
  UI.closePop = function () { if (popEl) { popEl.remove(); popEl = null; popOwner = null; } };
  UI.pop = function (anchor, html, cls) {
    UI.closePop();
    var r = anchor.getBoundingClientRect ? anchor.getBoundingClientRect() : anchor;
    var el = document.createElement('div'); el.className = 'popcard ' + (cls || ''); el.innerHTML = html;
    document.body.appendChild(el);
    var W = el.offsetWidth, H = el.offsetHeight, sx = window.scrollX, sy = window.scrollY, vw = document.documentElement.clientWidth;
    var left = Math.min(Math.max(8, r.left + sx + r.width / 2 - W / 2), sx + vw - W - 8);
    var top = r.bottom + sy + 8;
    if (r.bottom + H + 16 > window.innerHeight && r.top - H - 8 > 0) top = r.top + sy - H - 8;
    el.style.left = left + 'px'; el.style.top = top + 'px';
    popEl = el; popOwner = anchor;
    return el;
  };
  document.addEventListener('mousedown', function (e) {
    if (popEl && !popEl.contains(e.target) && !(popOwner && popOwner.contains && popOwner.contains(e.target))) UI.closePop();
    var st = $('.seltool');
    if (st && !st.contains(e.target)) st.remove();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { UI.closePop(); var st = $('.seltool'); if (st) st.remove(); }
  });

  /* ---------- drawer (stackable) ---------- */
  var stack = [];
  function drawerEl() { return $('.drawer'); }
  function paint() {
    var cur = stack[stack.length - 1], d = drawerEl();
    if (!cur) { if (d) d.remove(); var sc = $('.scrim'); if (sc) sc.remove(); document.body.style.overflow = ''; return; }
    if (!d) {
      var sc2 = document.createElement('div'); sc2.className = 'scrim'; sc2.addEventListener('click', UI.closeDrawer); document.body.appendChild(sc2);
      d = document.createElement('aside'); d.className = 'drawer'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); document.body.appendChild(d);
    }
    d.setAttribute('aria-label', cur.title);
    d.innerHTML = '<div class="drawer-head">' + (stack.length > 1 ? '<button type="button" data-drawer-back aria-label="Back">← Back</button>' : '') +
      '<b>' + esc(cur.title) + '</b><button type="button" data-drawer-close aria-label="Close">✕</button></div><div class="drawer-body">' + cur.html + '</div>';
    CP.anno.linkProse(d);
    if (cur.mount) cur.mount(d);
    var body = $('.drawer-body', d); if (body) body.scrollTop = 0;
    $('[data-drawer-close]', d).focus();
  }
  UI.openDrawer = function (title, html, mount) {
    var top = stack[stack.length - 1];
    if (top && top.title === title) stack.pop();
    stack.push({ title: title, html: html, mount: mount }); paint();
  };
  UI.closeDrawer = function () { stack = []; paint(); };
  UI.backDrawer = function () { stack.pop(); paint(); };
  UI.drawerOpen = function () { return stack.length > 0; };
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-drawer-close]')) UI.closeDrawer();
    else if (e.target.closest('[data-drawer-back]')) UI.backDrawer();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && UI.drawerOpen() && !$('.palette')) UI.closeDrawer(); });

  /* ---------- lightbox for diagrams ---------- */
  UI.lightbox = function (figure) {
    var lb = document.createElement('div'); lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Enlarged diagram');
    var f = figure.cloneNode(true); var z = $('[data-zoom]', f); if (z) z.remove();
    lb.appendChild(f);
    lb.addEventListener('click', function () { lb.remove(); });
    document.body.appendChild(lb);
    var onKey = function (e) { if (e.key === 'Escape') { lb.remove(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey);
  };
  document.addEventListener('click', function (e) {
    var z = e.target.closest('[data-zoom]'); if (z) UI.lightbox(z.closest('figure'));
  });

  /* ---------- selection toolbar & annotation popover (reader only) ---------- */
  UI.removeSelTool = function () { var s = $('.seltool'); if (s) s.remove(); };
  function paraOf(node) { var el = node.nodeType === 1 ? node : node.parentElement; return el ? el.closest('[data-pid]') : null; }

  function selectionSegments() {
    var sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    var r = sel.getRangeAt(0);
    var a = paraOf(r.startContainer), b = paraOf(r.endContainer);
    if (!a || !b || !a.closest('.reader') || !b.closest('.reader')) return null;
    var paras = CP.$$('[data-pid]', a.closest('.reader')), i0 = paras.indexOf(a), i1 = paras.indexOf(b);
    if (i0 < 0 || i1 < 0) return null;
    var segs = [];
    for (var i = i0; i <= i1; i++) {
      var el = paras[i], len = el.textContent.length, s = 0, e = len;
      if (el === a) s = CP.anno.offsetIn(el, r.startContainer, r.startOffset);
      if (el === b) e = CP.anno.offsetIn(el, r.endContainer, r.endOffset);
      // trim whitespace at the ends
      var t = el.textContent;
      while (s < e && /\s/.test(t[s])) s++;
      while (e > s && /\s/.test(t[e - 1])) e--;
      if (e > s) segs.push({ el: el, pid: el.dataset.pid, start: s, end: e, quote: t.slice(s, e) });
    }
    return { segs: segs, rect: r.getBoundingClientRect(), text: sel.toString() };
  }

  UI.onSelection = function (handlers) {
    var go = function () {
      setTimeout(function () {
        UI.removeSelTool();
        var s = selectionSegments();
        if (!s || !s.segs.length) return;
        var cfg = CP.store.settings();
        var bar = document.createElement('div'); bar.className = 'seltool'; bar.setAttribute('role', 'toolbar'); bar.setAttribute('aria-label', 'Highlight and annotate');
        bar.innerHTML = CP.COLORS.map(function (c) {
          return '<button type="button" class="dot" data-hlc="' + c + '" style="background:var(--hl-' + c + ')" title="Highlight: ' + esc(cfg.colors[c]) + '" aria-label="Highlight ' + esc(cfg.colors[c]) + '"></button>';
        }).join('') + '<span class="sep"></span><button type="button" class="tbtn" data-sel="note">✎ Note</button><button type="button" class="tbtn" data-sel="find">🔍 Find</button><button type="button" class="tbtn" data-sel="copy">Copy</button>';
        document.body.appendChild(bar);
        var W = bar.offsetWidth, vw = document.documentElement.clientWidth;
        bar.style.left = Math.min(Math.max(8, s.rect.left + window.scrollX + s.rect.width / 2 - W / 2), window.scrollX + vw - W - 8) + 'px';
        bar.style.top = (s.rect.top + window.scrollY - bar.offsetHeight - 8) + 'px';
        if (s.rect.top - bar.offsetHeight - 8 < 56) bar.style.top = (s.rect.bottom + window.scrollY + 8) + 'px';
        bar.addEventListener('mousedown', function (e) { e.preventDefault(); });
        bar.addEventListener('click', function (e) {
          var b = e.target.closest('button'); if (!b) return;
          var segs = s.segs, txt = s.text;
          UI.removeSelTool(); window.getSelection().removeAllRanges();
          if (b.dataset.hlc) handlers.highlight(segs, b.dataset.hlc);
          else if (b.dataset.sel === 'note') handlers.note(segs);
          else if (b.dataset.sel === 'find') handlers.find(txt);
          else if (b.dataset.sel === 'copy') { try { navigator.clipboard.writeText(txt); CP.toast('Copied'); } catch (er) { CP.toast('Copy not available'); } }
        });
      }, 10);
    };
    document.addEventListener('mouseup', function (e) { if (e.target.closest && e.target.closest('.reader')) go(); });
    document.addEventListener('keyup', function (e) { if (e.shiftKey && /Arrow|Home|End/.test(e.key)) go(); });
    document.addEventListener('touchend', function (e) { if (e.target.closest && e.target.closest('.reader')) go(); });
  };
})();
