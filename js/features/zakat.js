Features.zakat = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">💰 Zakat Calculator</h2>
        <div class="form-group">
          <label class="form-label" for="wealthInput">Total wealth (in Taka)</label>
          <input id="wealthInput" type="number" class="form-input" placeholder="Enter amount" min="0" />
        </div>
        <button class="btn btn--accent" id="calcZakatBtn">Calculate Zakat (2.5%)</button>
        <div class="result-box" id="zakatResult"></div>
      </div>
    `;
    DOM.id("calcZakatBtn").addEventListener("click", () => {
      const val = parseFloat(DOM.id("wealthInput").value);
      const result = DOM.id("zakatResult");
      if (!isNaN(val) && val > 0) {
        result.textContent = `Zakat Amount: ৳ ${(val * 0.025).toFixed(2)}`;
      } else {
        result.textContent = "Please enter a valid amount.";
      }
    });
  },
};
