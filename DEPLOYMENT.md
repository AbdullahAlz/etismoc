# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed locally
- Node.js and npm installed

## Setup Instructions

### 1. Repository Setup
1. Create a new repository on GitHub named `ibtisite`
2. Initialize git in your project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/ibtisite.git
   git push -u origin main
   ```

### 2. GitHub Pages Configuration
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to main/master

### 3. Repository Name Configuration
If your repository name is different from `ibtisite`, update the base path in `next.config.js`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME' : '',
```

### 4. Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public` directory with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Local Development
```bash
npm run dev
```

## Build and Test Locally
```bash
npm run build
```

## Deploy Manually (if needed)
```bash
npm run deploy
```

## Live Site
After deployment, your site will be available at:
- `https://YOUR_USERNAME.github.io/ibtisite`
- Or your custom domain if configured

## Automatic Deployment
The GitHub Actions workflow automatically:
- Builds the project when code is pushed to main/master
- Adds `.nojekyll` file to prevent Jekyll processing
- Deploys to GitHub Pages
- Updates the live site

## Troubleshooting
- Ensure repository is public or you have GitHub Pro for private repos
- Check the Actions tab for build logs if deployment fails
- Verify all environment variables and paths are correct
- Make sure GitHub Pages is enabled in repository settings
