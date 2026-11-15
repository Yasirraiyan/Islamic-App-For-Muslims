Features.quran = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">📖 114 Surahs of the Quran</h2>
        <p class="card__body" style="margin-bottom:1rem;">The complete list of Surahs</p>
        <div class="surah-grid">
          ${Array.from(
            { length: 114 },
            (_, i) => `<div class="surah-item">Surah ${i + 1}</div>`,
          ).join("")}
        </div>
      </div>
    `;
  },
};
