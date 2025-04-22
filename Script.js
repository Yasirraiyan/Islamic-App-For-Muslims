const features = {
            zikir: "🧕 Zikir Counter",
            quran: "📖 Quran (114 Surahs)",
            tafsir: "📖 Tafsir & Translation",
            hadith: "📚 Hadith Books",
            audio: "🔊 Quran MP3",
            prayer: "🕋 Prayer Times",
            zakat: "💰 Zakat Calculator",
            calendar: "📅 Islamic Calendar",
            quiz: "❓ Islamic Quiz",
            kids: "👶 Kids Zone",
            dark: "🌙 Dark Mode",
            stories: "👑 Prophet Stories"
        };

        // Render nav buttons
        const nav = document.getElementById("navMenu");
        for (const key in features) {
            const btn = document.createElement("button");
            btn.innerText = features[key];
            btn.onclick = () => loadFeature(key);
            nav.appendChild(btn);
        }

        const content = document.getElementById("mainContent");

        function loadFeature(key) {
            switch (key) {
                case "zikir":
                    content.innerHTML = `
            <div class="card">
              <h2>🧕 Zikir Counter</h2>
              <p>Click to count your Zikir</p>
              <h1 id="zikirCount">0</h1>
              <button onclick="document.getElementById('zikirCount').innerText++">Zikir ➕</button>
              <button onclick="document.getElementById('zikirCount').innerText=0">Reset 🔄</button>
            </div>`;
                    break;
                case "quran":
                    content.innerHTML = `
            <div class="card">
              <h2>📖 114 Surahs of Quran</h2>
              <ul>
                ${Array.from({ length: 114 }, (_, i) => `<li>Surah ${i + 1}</li>`).join('')}
              </ul>
            </div>`;
                    break;
                case "tafsir":
                    content.innerHTML = `
            <div class="card">
              <h2>📖 Tafsir (Bangla & English)</h2>
              <p>Surah Al-Fatiha:</p>
              <p><b>Bangla:</b> সমস্ত প্রশংসা আল্লাহর জন্য...</p>
              <p><b>English:</b> All praise is due to Allah...</p>
              <p><b>Tafsir:</b> This Surah emphasizes monotheism and supplication.</p>
            </div>`;
                    break;
                case "hadith":
                    content.innerHTML = `
            <div class="card">
              <h2>📚 6 Hadith Books (Bangla & English)</h2>
              <ul>
                <li>Sahih Bukhari</li>
                <li>Sahih Muslim</li>
                <li>Abu Dawood</li>
                <li>Tirmidhi</li>
                <li>Nasai</li>
                <li>Ibn Majah</li>
              </ul>
              <p><b>Example (Bangla):</b> "নিয়ত অনুযায়ী কাজ গণ্য হবে..."</p>
              <p><b>English:</b> "Actions are judged by intentions..."</p>
            </div>`;
                    break;
                case "audio":
                    content.innerHTML = `
            <div class="card">
              <h2>🔊 Quran Recitation (MP3)</h2>
              <audio controls>
                <source src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3" type="audio/mp3">
                Your browser does not support the audio element.
              </audio>
              <p>Surah Al-Fatiha Recitation</p>
            </div>`;
                    break;
                case "prayer":
                    content.innerHTML = `
            <div class="card">
              <h2>🕋 5 Prayer Times with Images</h2>
              <ul>
                <li>Fajr 🌅 <img src="https://i.ibb.co/LkxkNh2/fajr.jpg" class="img-feature"/></li>
                <li>Dhuhr ☀️ <img src="https://i.ibb.co/BzLbRQ0/dhuhr.jpg" class="img-feature"/></li>
                <li>Asr 🌤️ <img src="https://i.ibb.co/7VPDdhZ/asr.jpg" class="img-feature"/></li>
                <li>Maghrib 🌇 <img src="https://i.ibb.co/d2KbbqG/maghrib.jpg" class="img-feature"/></li>
                <li>Isha 🌌 <img src="https://i.ibb.co/Fz1BpLz/isha.jpg" class="img-feature"/></li>
              </ul>
            </div>`;
                    break;
                case "zakat":
                    content.innerHTML = `
            <div class="card">
              <h2>💰 Zakat Calculator</h2>
              <p>Enter total wealth (in Taka):</p>
              <input id="wealth" type="number" placeholder="Amount"/>
              <button onclick="calcZakat()">Calculate Zakat</button>
              <p id="zakatResult"></p>
            </div>`;
                    break;
                case "calendar":
                    content.innerHTML = `
            <div class="card">
              <h2>📅 Islamic Calendar</h2>
              <p>Today’s Islamic Date: <b>${new Date().toLocaleDateString()}</b> (Adjust manually for Hijri)</p>
            </div>`;
                    break;
                case "quiz":
                    content.innerHTML = `
            <div class="card">
              <h2>❓ Islamic Quiz</h2>
              <p>Q: How many Surahs are in the Quran?</p>
              <button onclick="alert('Correct ✅')">114</button>
              <button onclick="alert('Try Again ❌')">112</button>
            </div>`;
                    break;
                case "kids":
                    content.innerHTML = `
            <div class="card">
              <h2>👶 Kids Islamic Learning</h2>
              <ul>
                <li>Arabic Alphabets</li>
                <li>Small Surahs</li>
                <li>5 Pillars of Islam</li>
                <li>Prophet Stories</li>
              </ul>
            </div>`;
                    break;
                case "dark":
                    document.body.classList.toggle("dark-mode");
                    break;
                case "stories":
                    content.innerHTML = `
            <div class="card">
              <h2>👑 Stories of Prophets</h2>
              <p><b>1. Adam (AS):</b> First human created by Allah. Taught names of all things. Story of Iblis rejecting him.</p>
              <p><b>2. Nuh (AS):</b> Built an Ark to save believers from the flood. 950 years of Dawah.</p>
              <p><b>3. Ibrahim (AS):</b> Destroyed idols, tested with son Ismail. Built the Kaaba.</p>
              <p><b>4. Musa (AS):</b> Freed Bani Israel from Pharaoh with Allah’s help.</p>
              <p><b>5. Muhammad ﷺ:</b> Final Prophet. Quran revealed to him in 23 years.</p>
            </div>`;
                    break;
                default:
                    content.innerHTML = "<p>Feature not found!</p>";
            }
        }

        function calcZakat() {
            const amount = document.getElementById('wealth').value;
            if (amount && !isNaN(amount)) {
                const zakat = (amount * 0.025).toFixed(2);
                document.getElementById('zakatResult').innerText = `Zakat Amount: ৳${zakat}`;
            } else {
                document.getElementById('zakatResult').innerText = "Please enter a valid amount.";
            }
        }
