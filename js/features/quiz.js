Features.quiz = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">❓ Islamic Quiz</h2>
        <p><strong>Q: How many Surahs are in the Quran?</strong></p>
        <div class="quiz-options">
          <button class="btn btn--primary" data-answer="correct">114</button>
          <button class="btn btn--ghost" data-answer="wrong">112</button>
        </div>
        <div class="result-box" id="quizResult"></div>
      </div>
    `;
    DOM.qsa(".quiz-options .btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const result = DOM.id("quizResult");
        if (btn.dataset.answer === "correct") {
          result.textContent = "✅ Correct! The Quran has 114 Surahs.";
        } else {
          result.textContent = "❌ Try Again!";
        }
      });
    });
  },
};
