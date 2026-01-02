# 🏎️ Quick Setup Guide

## Before You Deploy - IMPORTANT!

### Step 1: Update Your Personal Information

Open `index.html` and update these two lines:

**Line 51** - Replace with your actual name:

```html
<div class="info-value" id="student-name">Your Name</div>
```

**Line 55** - Replace with your actual PRN:

```html
<div class="info-value" id="prn-number">Your PRN</div>
```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. **Create a GitHub Repository**

   ```bash
   cd "d:\Github\Edge-Computing\Assignment 1"
   git init
   git add .
   git commit -m "F1 Racing Hub - Edge Computing Assignment"
   ```

2. **Push to GitHub**

   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

3. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub (or your preferred method)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects static sites)
   - Wait ~30 seconds for deployment
   - Your site will be live at `https://your-project-name.vercel.app`

#### Option B: Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project directory)
cd "d:\Github\Edge-Computing\Assignment 1"
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? (press Enter for default or type your own)
# - Directory? ./ (press Enter)
# - Override settings? No

# Your site will be deployed!
```

### Step 3: Get Your Submission Details

After deployment, you'll have:

1. **Login ID**: Your Vercel account email
2. **Website URL**: `https://your-project-name.vercel.app`

### Step 4: Test Your Website

Visit your deployed URL and verify:

- ✅ Your name and PRN are displayed correctly
- ✅ The carousel works (5 F1 images)
- ✅ Dynamic time updates every second
- ✅ Visit counter increments
- ✅ Works on mobile (test on your phone)
- ✅ All animations are smooth

## 🎯 Assignment Checklist

- [ ] Updated name and PRN in `index.html`
- [ ] Created GitHub repository
- [ ] Deployed to Vercel
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Noted down Vercel login email
- [ ] Noted down website URL
- [ ] Submitted before deadline (9 Jan 2026)

## 🚨 Common Issues

**Issue**: Website not loading

- **Solution**: Check if you're using the correct URL from Vercel

**Issue**: Images not showing

- **Solution**: Images are from Unsplash CDN, ensure internet connection

**Issue**: Visit counter not working

- **Solution**: This uses localStorage, works after first visit

**Issue**: Animations not smooth

- **Solution**: Try a different browser (Chrome recommended)

## 📱 Mobile Testing

To test on mobile:

1. Open the Vercel URL on your phone
2. Check if navigation works
3. Try swiping the carousel
4. Verify all text is readable

## 🎓 What Makes This Project Stand Out

1. **Premium Design** - Glassmorphism effects and F1 theme
2. **Multiple Dynamic Elements** - Not just one, but 5+ dynamic features
3. **Fully Responsive** - Works perfectly on all devices
4. **Smooth Animations** - Professional-grade interactions
5. **Performance Optimized** - Fast loading and smooth scrolling
6. **Accessibility** - Keyboard navigation and semantic HTML

## 💡 Tips for Presentation

- Show the dynamic time changing
- Demonstrate the carousel (auto-advance and manual controls)
- Show the visit counter incrementing on refresh
- Display on both laptop and mobile
- Mention the cloud platform (Vercel)

---

**Good luck with your assignment! 🏁**
