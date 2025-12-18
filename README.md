# 🌟 Modern Portfolio - React + Vite

A stunning, modern dark-themed portfolio built with React and Vite, featuring glassmorphism, smooth animations, and a premium user experience.

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🌙 **Dark Theme** - Modern dark UI with glassmorphism effects
- 🎨 **Gradient Accents** - Beautiful purple-pink gradient theme
- 📱 **Fully Responsive** - Perfect on all devices
- 🎭 **Smooth Animations** - Scroll-triggered fade-in effects
- 💫 **Interactive Elements** - Hover effects and micro-interactions
- 🚀 **Auto Deploy** - GitHub Actions workflow included

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with modern features
- **Formspree** - Contact form handling

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Content

Edit `src/data.js` to update all portfolio content:

```javascript
export const portfolioData = {
  personal: { /* Your info */ },
  social: { /* Social links */ },
  about: { /* About section */ },
  education: [ /* Education */ ],
  experience: [ /* Work experience */ ],
  projects: [ /* Projects */ ],
  contact: { /* Contact info */ }
};
```

### Update Images

Replace images in `public/` folder:
- `profile.jpg` - Your profile photo
- `project1.png` through `project5.png` - Project images

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent-primary: #8b5cf6;  /* Purple */
  --accent-secondary: #ec4899; /* Pink */
  /* ... more colors */
}
```

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Wait for deployment (1-2 minutes)

3. Your site will be live at:
   `https://YOUR_USERNAME.github.io/Portfolio/`

### Other Platforms

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- Drag & drop `dist` folder to Netlify
- Or connect GitHub repo

## 📧 Contact Form Setup

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your Form ID
4. Update `src/components/Contact.jsx`:
   ```javascript
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 640px - 968px  
- **Mobile**: < 640px

## 🎯 Components

- `Navbar` - Fixed navigation with smooth scrolling
- `Hero` - Landing section with CTA buttons
- `About` - Story and skills grid
- `Education` - Timeline with glass cards
- `Experience` - Vertical timeline with glowing dots
- `Projects` - Grid with hover overlays
- `Contact` - Form + contact info
- `Footer` - Social links + scroll to top

## 🌈 Design Features

- **Glassmorphism** - Frosted glass effect on cards
- **Gradient Text** - Animated gradient on headings
- **Floating Elements** - Subtle background animations
- **Smooth Scrolling** - Buttery smooth navigation
- **Hover Effects** - Interactive card transformations
- **Scroll Animations** - Fade-in on scroll

## 📄 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx/.css
│   ├── Hero.jsx/.css
│   ├── About.jsx/.css
│   ├── Education.jsx/.css
│   ├── Experience.jsx/.css
│   ├── Projects.jsx/.css
│   ├── Contact.jsx/.css
│   └── Footer.jsx/.css
├── data.js          # Content configuration
├── App.jsx          # Main app component
├── App.css          # App styles
├── index.css        # Global styles
└── main.jsx         # Entry point
```

## 🎨 Color Palette

- **Primary**: `#8b5cf6` (Purple)
- **Secondary**: `#ec4899` (Pink)
- **Background**: `#0a0a0f` (Dark)
- **Text**: `#ffffff` (White)

## 💡 Tips

1. **Images**: Use optimized images (WebP format recommended)
2. **Performance**: Keep bundle size small
3. **SEO**: Update meta tags in `index.html`
4. **Analytics**: Add Google Analytics if needed
5. **Testing**: Test on multiple devices

## 🐛 Troubleshooting

**Build fails?**
- Run `npm install` again
- Clear `node_modules` and reinstall

**Images not loading?**
- Check file paths in `data.js`
- Ensure images are in `public/` folder

**Deployment issues?**
- Verify `base` path in `vite.config.js`
- Check GitHub Actions logs

## 📝 License

Free to use for personal portfolios.

---

**Built with ❤️ using React + Vite**

🌐 **Live Demo**: [https://avasista05.github.io/Portfolio/](https://avasista05.github.io/Portfolio/)
