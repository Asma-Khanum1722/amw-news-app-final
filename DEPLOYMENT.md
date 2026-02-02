# AMW News App - Deployment Guide

## 🔒 Environment Variables for Vercel

When deploying to Vercel, add these environment variables in your project settings:

### Required Variables:

1. **Firebase Configuration:**
   - `VITE_FIREBASE_API_KEY` - Your Firebase API key
   - `VITE_FIREBASE_AUTH_DOMAIN` - Your Firebase auth domain
   - `VITE_FIREBASE_PROJECT_ID` - Your Firebase project ID
   - `VITE_FIREBASE_STORAGE_BUCKET` - Your Firebase storage bucket
   - `VITE_FIREBASE_MESSAGING_SENDER_ID` - Your Firebase sender ID
   - `VITE_FIREBASE_APP_ID` - Your Firebase app ID
   - `VITE_FIREBASE_MEASUREMENT_ID` - Your Firebase measurement ID

2. **GNews API:**
   - `VITE_GNEWS_API_KEY` - Your GNews API key

## 📝 How to Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with its value
4. Select all environments (Production, Preview, Development)
5. Click **Save**

## 🚀 Deployment Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add all environment variables
   - Click "Deploy"

## ⚠️ Important Notes:

- Never commit `.env` file to GitHub (it's in `.gitignore`)
- `.env.example` is safe to commit (no actual keys)
- Environment variables in Vercel are encrypted and secure
- You can update env vars anytime in Vercel settings

## 🔧 Local Development:

Copy `.env.example` to `.env` and fill in your actual API keys:
```bash
cp .env.example .env
```

Then edit `.env` with your actual values.
