# F1 Racing Hub - Edge Computing Assignment 1

A stunning, dynamic Formula 1 themed website built for the Edge Computing TY CSE Assignment.

## 🏎️ Features

### ✅ Assignment Requirements Met

1. **Publicly Available** - Deployed on Vercel cloud platform
2. **Responsive Design** - Works perfectly on both Mobile & Laptop resolutions
3. **Student Information** - Displays Name and PRN prominently
4. **Image Carousel** - Five F1 photographs in an interactive carousel
5. **Dynamic Elements** - Multiple dynamic features that change with every visit:
   - Real-time clock with greeting based on time of day
   - Visit counter (persists across sessions)
   - Animated speed meter
   - Time spent on site tracker
   - Current date display

### 🎨 Design Features

- **Modern Glassmorphism UI** - Beautiful glass-like effects throughout
- **F1 Racing Theme** - Red and gold color scheme inspired by Formula 1
- **Smooth Animations** - Racing line animations, grid backgrounds, and micro-interactions
- **Premium Typography** - Orbitron and Rajdhani fonts for that racing aesthetic
- **Interactive Carousel** - Auto-advancing with manual controls, keyboard navigation, and touch support
- **Responsive Navigation** - Smooth scrolling with active section highlighting

## 🚀 Deployment Instructions

### Prerequisites

- A Vercel account (free tier works perfectly)
- Git installed on your system

### Step 1: Initialize Git Repository

```bash
cd "d:\Github\Edge-Computing\Assignment 1"
git init
git add .
git commit -m "Initial commit: F1 Racing Hub"
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI (Recommended)**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect it's a static site
6. Click "Deploy"

### Step 3: Customize Your Information

Before deploying, update the following in `index.html`:

```html
<!-- Line 51: Update with your name -->
<div class="info-value" id="student-name">Your Name</div>

<!-- Line 55: Update with your PRN -->
<div class="info-value" id="prn-number">Your PRN</div>
```

## 📱 Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, animations, glassmorphism
- **Vanilla JavaScript** - No frameworks, pure performance
- **Vercel** - Cloud hosting platform

## 🎯 Dynamic Elements

1. **Time-based Greeting** - Changes based on time of day (Morning/Afternoon/Evening/Night)
2. **Real-time Clock** - Updates every second
3. **Visit Counter** - Tracks and persists visit count using localStorage
4. **Speed Animation** - Simulates F1 car acceleration/deceleration
5. **Session Timer** - Tracks time spent on the website
6. **Auto-rotating Carousel** - Changes every 5 seconds

## 📊 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 What to Submit

1. **Login ID**: Your Vercel account email
2. **Website URL**: `https://your-project-name.vercel.app`

## 🎓 Assignment Details

- **Course**: Edge Computing TY CSE
- **Assignment**: Assignment 1
- **Deadline**: 9 Jan 2026
- **Cloud Provider**: Vercel

## 🏆 Features Beyond Requirements

- Keyboard navigation for carousel (Arrow keys)
- Touch/swipe support for mobile devices
- Smooth scroll navigation
- Intersection Observer animations
- Performance monitoring
- SEO optimized with meta tags
- Accessibility features
- Console easter eggs for developers

## 📸 Gallery Images

The carousel features 5 stunning F1 images from Unsplash:

1. F1 Car Racing - Speed demon in action
2. Pit Stop - 2-second tire changes
3. Racing Circuit - Iconic tracks
4. Cockpit View - Driver's perspective
5. Victory Lane - Champions celebration

## 🔧 Local Development

Simply open `index.html` in your browser. No build process required!

```bash
# Or use a local server
npx serve .
```

## 📄 License

Created for educational purposes - Edge Computing Assignment 1

---

**Built with ❤️ and ⚡ for Formula 1 enthusiasts**
