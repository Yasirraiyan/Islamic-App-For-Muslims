/* ============================================================
   FEATURE: Prophet Stories — Grid + Detail Overlay
   ============================================================ */

Features.prophets = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <section class="prophets-header">
        <h2>👑 Stories of 25 Prophets</h2>
        <p>Click any card to read Arabic verses & authentic Hadith</p>
      </section>
      <div class="prophet-grid" id="prophetGrid"></div>
    `;

    const grid = DOM.id("prophetGrid");
    PROPHETS.forEach((p) => {
      const card = DOM.create("div", { className: "prophet-card" });
      card.innerHTML = `
        <div class="prophet-card__number">Prophet ${p.id}</div>
        <h3 class="prophet-card__name">
          ${DOM.escape(p.name)}
          <span class="prophet-card__arabic">${p.arabicName}</span>
        </h3>
        <p class="prophet-card__summary">${DOM.escape(p.summary)}</p>
        <button class="prophet-card__btn" data-id="${p.id}">
          Read Details <span>→</span>
        </button>
      `;
      grid.appendChild(card);
    });

    // Delegate clicks
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".prophet-card__btn");
      if (!btn) return;
      const id = parseInt(btn.dataset.id, 10);
      const prophet = PROPHETS.find((p) => p.id === id);
      if (prophet) this.openDetail(prophet);
    });
  },

  openDetail(p) {
    const overlay = DOM.id("detailPage");
    const container = DOM.id("detailContent");

    const hadithBlock = p.hadithArabic
      ? `
        <div class="hadith-box">
          <div class="hadith-box__ref">Hadith Reference: ${DOM.escape(p.hadithRef)}</div>
          <div class="hadith-box__arabic">${p.hadithArabic}</div>
          <div class="hadith-box__translation">${DOM.escape(p.hadithTranslation)}</div>
          <span class="hadith-box__source">— ${DOM.escape(p.hadithRef)}</span>
        </div>`
      : `
        <div class="hadith-box">
          <div class="hadith-box__ref">Commentary</div>
          <div class="hadith-box__translation">${DOM.escape(p.hadithTranslation)}</div>
          <span class="hadith-box__source">— ${DOM.escape(p.hadithRef)}</span>
        </div>`;

    container.innerHTML = `
      <button class="detail-back" id="detailBack">← Back to all Prophets</button>

      <header class="detail-header">
        <h2>${DOM.escape(p.name)} <span class="detail-header__arabic">${p.arabicName}</span></h2>
        <span class="detail-header__badge">Prophet ${p.id} of 25</span>
      </header>

      <section class="detail-section">
        <h3 class="detail-section__title">📖 Quranic Verse (Arabic)</h3>
        <div class="arabic-verse">${p.arabicAyah}</div>
        <div class="reference-box">
          <strong>Reference:</strong> ${DOM.escape(p.ayahRef)}
          <em>"${DOM.escape(p.ayahTranslation)}"</em>
        </div>
      </section>

      <section class="detail-section">
        <h3 class="detail-section__title">📜 Hadith & Commentary</h3>
        ${hadithBlock}
      </section>

      <footer class="detail-footer">
        <p>📚 Sources: The Noble Quran · Sahih al-Bukhari · Sahih Muslim · Sunan al-Tirmidhi · Musnad Ahmad · Tafsir Ibn Kathir</p>
      </footer>
    `;

    overlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    DOM.id("detailBack").addEventListener("click", () => {
      overlay.classList.remove("is-active");
      document.body.style.overflow = "";
    });
  },
};
