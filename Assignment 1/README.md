# Edge Computing Assignment 1

A simple, modern website with a photo carousel and dynamic time display.

## Features

✅ Publicly accessible website  
✅ Responsive design (Mobile & Desktop)  
✅ Name and PRN display  
✅ Photo carousel with 5 images  
✅ Dynamic time display (updates every second)

## Setup Instructions

### Before Deploying

1. **Update Your Information**: Open `index.html` and replace:
   - `Your Name` with your actual name
   - `Your PRN Number` with your actual PRN

### Deploy to Vercel

1. **Create a Vercel Account**:

   - Go to [vercel.com](https://vercel.com)
   - Sign up using GitHub, GitLab, or Bitbucket

2. **Push to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Log in to Vercel
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live in seconds!

### Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd "d:\Github\Edge-Computing\Assignment 1"
vercel
```

## What to Submit

- **Login ID**: Your Vercel account email/username
- **Website URL**: The URL provided by Vercel (e.g., `your-project.vercel.app`)

## Technologies Used

- HTML5
- CSS3 (with Inter font from Google Fonts)
- Vanilla JavaScript
- Vercel (Cloud hosting)

## Design Features

- Thin, minimal borders
- Modern typography with Inter font
- Smooth transitions and hover effects
- Auto-playing carousel (pauses on hover)
- Real-time clock display
- Fully responsive layout
