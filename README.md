# Portfolio Website

A beautiful, responsive one-page portfolio website with dynamic content management.

## 🌐 Live Site

Visit: `https://YOUR_USERNAME.github.io/Portfolio/`

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # All styles
│   ├── js/
│   │   ├── data.js        # Content configuration
│   │   ├── app.js         # Dynamic content loader
│   │   └── script.js      # Interactive features
│   └── images/
│       ├── profile.jpg    # Profile photo
│       └── project*.png   # Project images
├── docs/
│   ├── README.md          # Full documentation
│   └── QUICK_EDIT_GUIDE.md # Quick reference
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment
```

## ✨ Features

- **Dynamic Content** - All content managed in `assets/js/data.js`
- **Responsive Design** - Works on all devices
- **Modern UI** - Rose/pink color scheme with smooth animations
- **Contact Form** - Formspree integration (frontend-only)
- **Auto Deploy** - GitHub Actions workflow included

## 🚀 Quick Start

### 1. Edit Your Content

Open `assets/js/data.js` and update:
- Personal information
- Social media links
- About section & skills
- Education & experience
- Projects

### 2. Replace Images

Add your images to `assets/images/`:
- `profile.jpg` - Your photo
- `project1.png` through `project5.png` - Project images

### 3. Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings!

## 📖 Documentation

- **Full Guide**: See `docs/README.md`
- **Quick Edits**: See `docs/QUICK_EDIT_GUIDE.md`

## 🛠️ Technologies

- HTML5
- CSS3 (Vanilla)
- JavaScript (ES6+)
- Google Fonts
- Formspree (Contact Form)

## 📧 Contact Form Setup

The contact form uses Formspree. To activate:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `index.html` line 103 with your Form ID

## 🎨 Customization

All colors, fonts, and styles can be customized in `assets/css/styles.css`.

## 📄 License

Free to use for personal portfolios.

---

**Made with ❤️ by Anagha Vasista**
