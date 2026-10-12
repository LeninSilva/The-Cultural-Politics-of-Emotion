/* Declarative SVG diagrams: nodes, edges, zones, notes -> <figure><svg/></figure>.
   Authored as data (see content/*.js) so every diagram shares one visual language. */
(function () {
  'use strict';
  var CP = window.CP, esc = CP.esc, uid = 0;
  var D = CP.D = {};

  function wrap(text, max) {
    var words = String(text == null ? '' : text).split(/\s+/), lines = [], cur = '';
    words.forEach(function (w) {
      if (!cur) cur = w;
      else if ((cur + ' ' + w).length <= max) cur += ' ' + w;
      else { lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);
    return lines;
  }
  function tspans(lines, x, lh, cls, y0) {
    return lines.map(function (l, i) { return '<tspan x="' + x + '" y="' + (y0 + i * lh) + '">' + esc(l) + '</tspan>'; }).join('');
  }

  /* layout helpers */
  D.row = function (nodes, y, x0, x1) {
    var n = nodes.length; x0 = x0 == null ? 90 : x0; x1 = x1 == null ? 490 : x1;
    nodes.forEach(function (nd, i) { nd.x = n === 1 ? (x0 + x1) / 2 : x0 + (x1 - x0) * i / (n - 1); nd.y = y; });
    return nodes;
  };
  D.col = function (nodes, x, y0, y1) {
    var n = nodes.length;
    nodes.forEach(function (nd, i) { nd.x = x; nd.y = n === 1 ? (y0 + y1) / 2 : y0 + (y1 - y0) * i / (n - 1); });
    return nodes;
  };
  D.circle = function (nodes, cx, cy, rx, ry, start) {
    var n = nodes.length; start = start == null ? -Math.PI / 2 : start;
    nodes.forEach(function (nd, i) { var a = start + 2 * Math.PI * i / n; nd.x = cx + rx * Math.cos(a); nd.y = cy + (ry || rx) * Math.sin(a); });
    return nodes;
  };

  function prep(n) {
    n.shape = n.shape || 'rect';
    n.kind = n.kind || 'a';
    if (n.shape === 'text') { n.w = n.w || 160; }
    n.w = n.w || 138;
    var inner = n.w - 18, cpl = Math.max(6, Math.floor(inner / (n.shape === 'ellipse' ? 8 : 7.1)));
    n.lines = wrap(n.label, cpl);
    n.slines = n.sub ? wrap(n.sub, Math.floor(inner / 5.9)) : [];
    var th = n.lines.length * 16 + n.slines.length * 14.5 + (n.slines.length ? 4 : 0);
    n.h = n.h || Math.max(n.shape === 'pill' ? 34 : 38, th + 18 + (n.shape === 'ellipse' ? 14 : 0) + (n.shape === 'diamond' ? 26 : 0));
    n._th = th;
  }
  function edgePoint(n, tx, ty) {
    var dx = tx - n.x, dy = ty - n.y;
    if (!dx && !dy) return { x: n.x, y: n.y };
    var a = n.w / 2, b = n.h / 2, k;
    if (n.shape === 'ellipse' || n.shape === 'circle') k = 1 / Math.sqrt((dx * dx) / (a * a) + (dy * dy) / (b * b));
    else if (n.shape === 'diamond') k = 1 / (Math.abs(dx) / a + Math.abs(dy) / b);
    else k = Math.min(Math.abs(dx) > 1e-6 ? a / Math.abs(dx) : 1e9, Math.abs(dy) > 1e-6 ? b / Math.abs(dy) : 1e9);
    return { x: n.x + dx * k, y: n.y + dy * k };
  }
  function nodeSvg(n) {
    var x = n.x - n.w / 2, y = n.y - n.h / 2, shape = '';
    if (n.shape === 'text') { /* no box */ }
    else if (n.shape === 'ellipse' || n.shape === 'circle') shape = '<ellipse class="dg-node dg-' + n.kind + '" cx="' + n.x + '" cy="' + n.y + '" rx="' + n.w / 2 + '" ry="' + n.h / 2 + '"/>';
    else if (n.shape === 'diamond') shape = '<polygon class="dg-node dg-' + n.kind + '" points="' + n.x + ',' + y + ' ' + (x + n.w) + ',' + n.y + ' ' + n.x + ',' + (y + n.h) + ' ' + x + ',' + n.y + '"/>';
    else shape = '<rect class="dg-node dg-' + n.kind + '" x="' + x + '" y="' + y + '" width="' + n.w + '" height="' + n.h + '" rx="' + (n.shape === 'pill' ? n.h / 2 : 9) + '"/>';
    var ty = n.y - n._th / 2 + 12;
    var t = '<text class="dg-label" text-anchor="middle">' + tspans(n.lines, n.x, 16, 'dg-label', ty) + '</text>';
    if (n.slines.length) t += '<text class="dg-sub" text-anchor="middle">' + tspans(n.slines, n.x, 14.5, 'dg-sub', ty + n.lines.length * 16 + 1) + '</text>';
    return '<g>' + shape + t + '</g>';
  }
  function arrowHead(x, y, ang, strong) {
    var s = 9, a1 = ang + Math.PI * 0.86, a2 = ang - Math.PI * 0.86;
    return '<polygon class="dg-arrow' + (strong ? ' strong' : '') + '" points="' + x + ',' + y + ' ' + (x + s * Math.cos(a1)) + ',' + (y + s * Math.sin(a1)) + ' ' + (x + s * Math.cos(a2)) + ',' + (y + s * Math.sin(a2)) + '"/>';
  }
  function edgeSvg(e, byId) {
    var A = byId[e.from], B = byId[e.to];
    if (!A || !B) return '';
    var cls = 'dg-edge' + (e.dash ? ' dash' : '') + (e.strong ? ' strong' : '');
    var s, t, c = null, d, lx, ly, endAng, startAng;
    if (A === B) { // loop above the node
      var r = 26, x0 = A.x + 12, y0 = A.y - A.h / 2, x1 = A.x - 12;
      d = 'M' + x0 + ' ' + y0 + ' C' + (x0 + r) + ' ' + (y0 - r * 1.6) + ' ' + (x1 - r) + ' ' + (y0 - r * 1.6) + ' ' + x1 + ' ' + y0;
      lx = A.x; ly = y0 - r * 1.25;
      return '<path class="' + cls + '" d="' + d + '"/>' + arrowHead(x1, y0, Math.PI / 2 + 0.55, e.strong) + (e.label ? '<text class="dg-elabel" text-anchor="middle" x="' + lx + '" y="' + (ly - 6) + '">' + esc(e.label) + '</text>' : '');
    }
    var mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
    if (e.curve) {
      var dx = B.x - A.x, dy = B.y - A.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
      c = { x: mx + (-dy / len) * e.curve, y: my + (dx / len) * e.curve };
    }
    s = edgePoint(A, c ? c.x : B.x, c ? c.y : B.y);
    t = edgePoint(B, c ? c.x : A.x, c ? c.y : A.y);
    if (c) {
      d = 'M' + s.x + ' ' + s.y + ' Q' + c.x + ' ' + c.y + ' ' + t.x + ' ' + t.y;
      endAng = Math.atan2(t.y - c.y, t.x - c.x); startAng = Math.atan2(s.y - c.y, s.x - c.x);
      lx = 0.25 * s.x + 0.5 * c.x + 0.25 * t.x; ly = 0.25 * s.y + 0.5 * c.y + 0.25 * t.y;
    } else {
      d = 'M' + s.x + ' ' + s.y + ' L' + t.x + ' ' + t.y;
      endAng = Math.atan2(t.y - s.y, t.x - s.x); startAng = endAng + Math.PI;
      lx = (s.x + t.x) / 2; ly = (s.y + t.y) / 2;
    }
    var out = '<path class="' + cls + '" d="' + d + '"/>';
    if (e.noarrow !== true) out += arrowHead(t.x, t.y, endAng, e.strong);
    if (e.both) out += arrowHead(s.x, s.y, startAng, e.strong);
    if (e.label) {
      var ll = wrap(e.label, 22);
      out += '<text class="dg-elabel" text-anchor="middle">' + ll.map(function (l, i) { return '<tspan x="' + (lx + (e.lx || 0)) + '" y="' + (ly + (e.ly || 0) + 4 + (i - (ll.length - 1) / 2) * 13) + '">' + esc(l) + '</tspan>'; }).join('') + '</text>';
    }
    return out;
  }

  D.svg = function (spec) {
    var W = spec.w || 580, nodes = (spec.nodes || []).map(function (n) { return Object.assign({}, n); }), byId = {};
    nodes.forEach(function (n) { prep(n); byId[n.id] = n; });
    var maxY = 0;
    nodes.forEach(function (n) { maxY = Math.max(maxY, n.y + n.h / 2); });
    (spec.zones || []).forEach(function (z) { maxY = Math.max(maxY, z.y + z.h); });
    (spec.notes || []).forEach(function (n) { maxY = Math.max(maxY, n.y + (wrap(n.text, Math.floor((n.w || 200) / 6.1)).length * 15)); });
    var H = spec.h || Math.ceil(maxY + 28);
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(spec.title || spec.caption || 'Diagram') + '">';
    if (spec.title) s += '<text class="dg-title" x="' + W / 2 + '" y="20" text-anchor="middle">' + esc(spec.title) + '</text>';
    (spec.zones || []).forEach(function (z) {
      s += '<rect class="dg-zone" x="' + z.x + '" y="' + z.y + '" width="' + z.w + '" height="' + z.h + '" rx="14"/>';
      if (z.label) s += '<text class="dg-sub" x="' + (z.x + 10) + '" y="' + (z.y + 16) + '" style="font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:10.5px">' + esc(z.label) + '</text>';
    });
    (spec.edges || []).forEach(function (e) { s += edgeSvg(e, byId); });
    nodes.forEach(function (n) { s += nodeSvg(n); });
    (spec.notes || []).forEach(function (n) {
      var ls = wrap(n.text, Math.floor((n.w || 200) / 6.1));
      s += '<text class="dg-note" text-anchor="' + (n.anchor || 'start') + '"' + (n.bold ? ' style="font-weight:700"' : '') + '>' + tspans(ls, n.x, 15, 'dg-note', n.y) + '</text>';
    });
    return s + '</svg>';
  };
  D.figure = function (spec) {
    uid++;
    return '<figure class="diagram" data-fig="' + uid + '"><button class="zoom" type="button" data-zoom aria-label="Enlarge diagram">⤢ enlarge</button>' + D.svg(spec) +
      (spec.caption ? '<figcaption>' + CP.rich(spec.caption) + '</figcaption>' : '') + '</figure>';
  };
})();
