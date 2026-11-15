/* ============================================================
   THEME — Dark/Light mode manager
   ============================================================ */

const Theme = (() => {
  const STORAGE_KEY = "islamic-app-theme";
  const body = document.body;

  function apply(mode) {
    body.classList.toggle("theme-dark", mode === "dark");
    const icon = document.querySelector(".theme-toggle__icon");
    if (icon) icon.textContent = mode === "dark" ? "☀️" : "🌙";
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (_) {}
  }

  function toggle() {
    const isDark = body.classList.contains("theme-dark");
    apply(isDark ? "light" : "dark");
  }

  function init() {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (_) {}
    if (saved === "dark") {
      apply("dark");
    } else if (saved === "light") {
      apply("light");
    } else {
      apply(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }
    const btn = DOM.id("themeToggle");
    if (btn) btn.addEventListener("click", toggle);
  }

  return { init, toggle, apply };
})();
