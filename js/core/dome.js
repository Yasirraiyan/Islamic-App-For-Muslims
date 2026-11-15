/* ============================================================
   DOM — Small helper utilities
   ============================================================ */

const DOM = {
  /** Get element by id */
  id: (id) => document.getElementById(id),

  /** Query selector */
  qs: (sel, ctx = document) => ctx.querySelector(sel),

  /** Query selector all */
  qsa: (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel)),

  /** Create element with props */
  create(tag, props = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "className") el.className = v;
      else if (k === "dataset") Object.assign(el.dataset, v);
      else if (k.startsWith("on") && typeof v === "function") {
        el.addEventListener(k.slice(2).toLowerCase(), v);
      } else el.setAttribute(k, v);
    });
    children.forEach((c) =>
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c),
    );
    return el;
  },

  /** Safely set innerHTML (basic escape) */
  escape(str = "") {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  },

  /** Clear element */
  clear(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  },
};
