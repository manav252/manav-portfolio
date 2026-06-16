# Vercel Deployment Guide

## Production Status

This project is a Vite + React portfolio and is ready to deploy to Vercel.

Verified commands:

```bash
npm run check-types
npm run build
```

Vercel settings:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

## Environment Variables

The site builds without environment variables, but the contact form uses EmailJS.
Add these in Vercel under Project Settings > Environment Variables if you want
the contact form to send emails:

```bash
VITE_APP_SERVICE_ID=your_emailjs_service_id
VITE_APP_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_KEY=your_emailjs_public_key
VITE_APP_EMAILJS_RECIEVER=your_email_address
```

If these are not set, the site can still deploy, but the contact form submission
will fail at runtime.

## Git Setup And Push

Run these from the project folder:

```bash
cd /Users/manavdoshi/Downloads/3d-portfolio-main
git init
git add .
git commit -m "Prepare portfolio for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your GitHub account and
new repository name.

If Git says the remote already exists, use:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

## Deploy On Vercel

1. Go to https://vercel.com/new
2. Import the GitHub repository.
3. Keep the framework as `Vite`.
4. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add the EmailJS environment variables if using the contact form.
6. Click Deploy.

## Notes

- The resume PDF is served from `public/Manav_Doshi_Resume copy.pdf`.
- Research PDFs, images, and videos are served from `public/research`.
- The magnet separation demo video was not present locally, so its broken
  production link was removed. Add the video to `public/research` and restore
  the link in `src/constants/index.ts` when you have the file.
