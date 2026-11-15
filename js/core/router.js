/* ============================================================
   ROUTER — Feature registry and navigation
   ============================================================ */

const Router = (() => {
  const features = [
    { key: "zikir", label: "🧕 Zikir", render: () => Features.zikir.render() },
    { key: "quran", label: "📖 Quran", render: () => Features.quran.render() },
    {
      key: "tafsir",
      label: "📖 Tafsir",
      render: () => Features.tafsir.render(),
    },
    {
      key: "hadith",
      label: "📚 Hadith",
      render: () => Features.hadith.render(),
    },
    { key: "audio", label: "🔊 Audio", render: () => Features.audio.render() },
    {
      key: "prayer",
      label: "🕋 Prayer",
      render: () => Features.prayer.render(),
    },
    { key: "zakat", label: "💰 Zakat", render: () => Features.zakat.render() },
    {
      key: "calendar",
      label: "📅 Calendar",
      render: () => Features.calendar.render(),
    },
    { key: "quiz", label: "❓ Quiz", render: () => Features.quiz.render() },
    { key: "kids", label: "👶 Kids", render: () => Features.kids.render() },
    {
      key: "stories",
      label: "👑 Prophet Stories",
      render: () => Features.prophets.render(),
    },
  ];

  function init() {
    const nav = DOM.id("navMenu");
    DOM.clear(nav);
    features.forEach((f) => {
      const btn = DOM.create(
        "button",
        {
          className: "app-nav__btn",
          dataset: { key: f.key },
          onClick: () => navigate(f.key),
        },
        [f.label],
      );
      nav.appendChild(btn);
    });
  }

  function navigate(key) {
    // update active state
    DOM.qsa(".app-nav__btn").forEach((b) => b.classList.remove("is-active"));
    const active = DOM.qs(`.app-nav__btn[data-key="${key}"]`);
    if (active) active.classList.add("is-active");

    const feature = features.find((f) => f.key === key);
    const content = DOM.id("mainContent");
    if (!feature) {
      content.innerHTML = "<p>Feature not found.</p>";
      return;
    }
    content.innerHTML = "";
    feature.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { init, navigate, features };
})();
