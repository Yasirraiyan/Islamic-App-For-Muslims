/* ============================================================
   FEATURE: Zikir Counter
   ============================================================ */

const Features = window.Features || {};
window.Features = Features;

Features.zikir = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">🧕 Zikir Counter</h2>
        <div class="zikir-counter">
          <p class="card__body">Click the button to count your Zikir</p>
          <div class="zikir-counter__value" id="zikirValue">0</div>
          <div class="zikir-counter__actions">
            <button class="btn btn--primary" id="zikirInc">➕ Zikir</button>
            <button class="btn btn--ghost" id="zikirReset">🔄 Reset</button>
          </div>
        </div>
      </div>
    `;
    const valueEl = DOM.id("zikirValue");
    let count = 0;

    DOM.id("zikirInc").addEventListener("click", () => {
      count++;
      valueEl.textContent = count;
      valueEl.classList.add("is-bumped");
      setTimeout(() => valueEl.classList.remove("is-bumped"), 150);
    });

    DOM.id("zikirReset").addEventListener("click", () => {
      count = 0;
      valueEl.textContent = "0";
    });
  },
};
