Features.tafsir = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">📖 Tafsir (Bangla & English)</h2>
        <p><strong>Surah Al-Fatiha:</strong></p>
        <p style="margin-top:0.5rem;"><b>Bangla:</b> সমস্ত প্রশংসা আল্লাহর জন্য...</p>
        <p><b>English:</b> All praise is due to Allah...</p>
        <p><b>Tafsir:</b> This Surah emphasizes monotheism and supplication.</p>
      </div>
    `;
  },
};
