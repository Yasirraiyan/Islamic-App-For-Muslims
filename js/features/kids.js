Features.kids = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">👶 Kids Islamic Learning</h2>
        <div class="kids-grid">
          <div class="kids-card">🔤 Arabic Alphabets</div>
          <div class="kids-card">📖 Small Surahs</div>
          <div class="kids-card">🕌 5 Pillars of Islam</div>
          <div class="kids-card">👑 Prophet Stories</div>
        </div>
      </div>
    `;
  },
};
