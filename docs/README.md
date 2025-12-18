# Dynamic Portfolio Website

A beautiful, responsive one-page portfolio website with **zero hardcoded content**. All content is managed through a single configuration file (`data.js`), making it incredibly easy to customize and maintain.

## 🎯 Features

- **100% Dynamic Content** - No hardcoded text in HTML
- **Single Configuration File** - Update everything from `data.js`
- **Responsive Design** - Works perfectly on all devices
- **Modern Aesthetics** - Rose/pink color scheme with smooth animations
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Easy to Customize** - Change content without touching HTML/CSS

## 📁 File Structure

```
Portfolio/
├── index.html          # HTML template (no hardcoded content)
├── styles.css          # All styling and design
├── data.js            # ⭐ YOUR CONTENT CONFIGURATION
├── app.js             # Dynamic content loader
├── script.js          # Interactive features
├── profile.jpg        # Your profile photo
└── project1-5.png     # Project images
```

## 🚀 Quick Start

### 1. Update Your Content

Open `data.js` and customize all sections:

```javascript
const portfolioData = {
    personal: {
        name: "Your Name",
        logo: "Portfolio",
        tagline: "Your. Professional. Tagline.",
        subtitle: "Your professional summary...",
        profileImage: "profile.jpg"
    },
    // ... more sections
};
```

### 2. Replace Images

- **Profile Photo**: Replace `profile.jpg` with your photo
- **Project Images**: Replace `project1.png` through `project5.png` with your project images

### 3. Open in Browser

Simply open `index.html` in any modern web browser. No build process required!

## 📝 Content Sections

### Personal Information
```javascript
personal: {
    name: "Your Name",
    logo: "Portfolio",              // Navbar logo text
    tagline: "Line 1. Line 2. Line 3.",  // Hero title (periods create line breaks)
    subtitle: "Your professional summary",
    profileImage: "profile.jpg",
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890"
}
```

### Social Media Links
```javascript
social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    youtube: "https://youtube.com/@yourprofile",
    twitter: "https://twitter.com/yourprofile"
}
```

### About Section
```javascript
about: {
    story: "Your personal story and background...",
    skills: [
        {
            icon: "📊",  // Any emoji
            title: "Skill Name",
            description: "Skill description..."
        },
        // Add up to 6 skills
    ]
}
```

### Education
```javascript
education: [
    {
        year: "2023 - 2025",
        institution: "University Name",
        degree: "Degree Name",
        description: "Detailed description..."
    },
    // Add more education entries
]
```

### Experience
```javascript
experience: [
    {
        date: "January 2025 - Present",
        title: "Job Title",
        company: "Company Name",
        tagline: "Short. Catchy. Tagline.",
        description: "Job description..."
    },
    // Add more experience entries
]
```

### Projects
```javascript
projects: [
    {
        number: "01",
        title: "Project Title",
        date: "Month Year",
        description: "Project description...",
        image: "project1.png",
        link: "https://project-link.com",
        linkText: "View Project Report"
    },
    // Add more projects
]
```

### Contact Section
```javascript
contact: {
    title: "Let's Work Together",
    subtitle: "Get in touch message...",
    successMessage: "Thank you! Your message has been received."
}
```

## 🎨 Customization

### Change Colors

Edit `styles.css` CSS variables:

```css
:root {
    --color-primary: #E8C4C4;        /* Main theme color */
    --color-accent: #A84448;         /* Accent color */
    --color-text-primary: #2C2C2C;   /* Main text color */
    /* ... more colors */
}
```

### Change Fonts

Update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
    --font-heading: 'YourHeadingFont', serif;
    --font-body: 'YourBodyFont', sans-serif;
}
```

### Add/Remove Sections

1. Add your section to `data.js`
2. Create a loader function in `app.js`
3. Add HTML template in `index.html`
4. Style it in `styles.css`

## 🌐 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your portfolio files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your portfolio folder to [Netlify](https://app.netlify.com)
2. Your site is live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your portfolio directory
3. Follow the prompts

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 640px - 968px
- **Mobile**: < 640px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips

1. **Keep it concise**: Short, impactful descriptions work best
2. **Use high-quality images**: Compress images for faster loading
3. **Update regularly**: Keep your projects and experience current
4. **Test on mobile**: Most visitors will view on mobile devices
5. **Proofread**: Check for typos in `data.js`

## 🎯 Target Roles

This portfolio is optimized for professionals in:
- Product Management
- Project Management
- Business Analysis
- Supply Chain Analysis
- Process Engineering

The universal theme and flexible content structure work for all these roles!

## 📄 License

Free to use for personal portfolios. Customize as needed!

## 🤝 Support

Need help? Check the comments in `data.js` for guidance on each section.

---

**Made with ❤️ for professionals who value simplicity and elegance**