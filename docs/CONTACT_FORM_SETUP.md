# Contact Form Setup Guide

## 📧 How to Make Your Contact Form Work

Your contact form is set up to use **Formspree** - a free service that handles form submissions without any backend code!

### 🚀 Quick Setup (2 minutes)

#### Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" (it's FREE!)
3. Sign up with your email

#### Step 2: Create a New Form
1. After logging in, click "+ New Form"
2. Give it a name like "Portfolio Contact Form"
3. Copy your **Form ID** (looks like: `xyzabc123`)

#### Step 3: Update Your Website
1. Open `index.html`
2. Find this line (around line 103):
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
   ```
4. Save the file

#### Step 4: Test It!
1. Refresh your portfolio website
2. Fill out the contact form
3. Click "Send"
4. You'll get an email notification! 🎉

---

## ✨ What Happens When Someone Submits the Form?

1. **Visitor fills out form** → Clicks "Send"
2. **Formspree receives the data** → Sends you an email
3. **You get notified** → Reply directly from your email!

---

## 🎯 Features You Get (Free Plan)

- ✅ **50 submissions/month** (plenty for a portfolio!)
- ✅ **Email notifications** when someone contacts you
- ✅ **Spam filtering** built-in
- ✅ **No backend code needed**
- ✅ **Works on any hosting** (GitHub Pages, Netlify, etc.)

---

## 📝 Example

**Before:**
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

**After (with your Form ID):**
```html
action="https://formspree.io/f/mrbgpqxy"
```

---

## 🔧 Troubleshooting

**Form not working?**
- Make sure you replaced `YOUR_FORM_ID` with your actual ID
- Check that you're using the correct Formspree URL
- Verify your email is confirmed in Formspree

**Not receiving emails?**
- Check your spam folder
- Verify your email in Formspree settings
- Make sure the form has your correct Form ID

---

## 💡 Pro Tips

1. **Customize the thank you page** in Formspree settings
2. **Add auto-reply emails** to visitors
3. **View all submissions** in your Formspree dashboard
4. **Export data** if you need it later

---

That's it! Your contact form will be fully functional with just one line change. 🎉
