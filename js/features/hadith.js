Features.hadith = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">📚 6 Hadith Books</h2>
        <ul class="styled-list" style="margin-bottom:1rem;">
          <li>Sahih Bukhari</li>
          <li>Sahih Muslim</li>
          <li>Abu Dawood</li>
          <li>Tirmidhi</li>
          <li>Nasai</li>
          <li>Ibn Majah</li>
        </ul>
        <p><b>Example (Bangla):</b> "নিয়ত অনুযায়ী কাজ গণ্য হবে..."</p>
        <p><b>English:</b> "Actions are judged by intentions..."</p>
      </div>
    `;
  },
};

