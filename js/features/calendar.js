Features.calendar = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">📅 Islamic Calendar</h2>
        <p><strong>Today:</strong> ${new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        <p style="margin-top:0.5rem;color:var(--c-text-muted);font-size:0.9rem;">Hijri date adjustment may vary by location.</p>
      </div>
    `;
  },
};
