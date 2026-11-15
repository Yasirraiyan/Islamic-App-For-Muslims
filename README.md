# 🌙 Islamic App — Professional Edition

A modular, production-ready Islamic web application with 12 features including **25 Prophet Stories** with Arabic verses and authentic Hadith references.

## ✨ Features

| Feature | Description |
|---|---|
| 🧕 Zikir Counter | Tap to count, with animation |
| 📖 Quran | All 114 Surahs listed |
| 📖 Tafsir | Bangla & English sample |
| 📚 Hadith Books | 6 major collections |
| 🔊 Quran MP3 | Audio playback |
| 🕋 Prayer Times | Visual 5 daily prayers |
| 💰 Zakat Calculator | 2.5% calculation |
| 📅 Islamic Calendar | Today's date |
| ❓ Islamic Quiz | Interactive |
| 👶 Kids Zone | Learning topics |
| 🌙 Dark Mode | Persistent, auto-detects OS preference |
| 👑 **Prophet Stories** | **25 prophets with Arabic + Hadith** |

## 🏗️ Architecture

- **Modular ES5 JS** — no bundler required, opens directly in a browser
- **CSS custom properties** — instant theming
- **Router pattern** — feature registry with lazy rendering
- **XSS-safe escaping** — `DOM.escape()` used for user-visible data
- **Accessibility** — semantic HTML, ARIA roles, keyboard support (ESC closes overlay)

## 🚀 How to Run

### Option 1: VS Code Live Server
1. Install the **Live Server** extension by Ritwick Dey
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

### Option 2: Python HTTP Server
```bash
python -m http.server 8000
# Then open http://localhost:8000
