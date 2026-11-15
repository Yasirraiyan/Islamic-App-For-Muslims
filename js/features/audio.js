Features.audio = {
  render() {
    const content = DOM.id("mainContent");
    content.innerHTML = `
      <div class="card">
        <h2 class="card__title">🔊 Quran Recitation</h2>
        <p class="card__body">Surah Al-Fatiha — Mishary Rashid Alafasy</p>
        <audio controls class="audio-player">
          <source src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3" type="audio/mp3">
          Your browser does not support audio.
        </audio>
      </div>
    `;
  },
};
