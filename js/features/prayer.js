Features.prayer = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">🕋 5 Daily Prayers</h2>
        <div class="prayer-list">
          ${[
            ["Fajr 🌅", "https://i.ibb.co/LkxkNh2/fajr.jpg"],
            ["Dhuhr ☀️", "https://i.ibb.co/BzLbRQ0/dhuhr.jpg"],
            ["Asr 🌤️", "https://i.ibb.co/7VPDdhZ/asr.jpg"],
            ["Maghrib 🌇", "https://i.ibb.co/d2KbbqG/maghrib.jpg"],
            ["Isha 🌌", "https://i.ibb.co/Fz1BpLz/isha.jpg"],
          ]
            .map(
              ([label, img]) => `
            <div class="prayer-item">
              <img src="${img}" alt="${label}" class="prayer-item__img" loading="lazy" />
              <div class="prayer-item__label">${label}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
  },
};
