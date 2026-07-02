# Manav Doshi | Data Analyst Portfolio

![TypeScript](https://img.shields.io/badge/TypeScript-Portfolio-3178C6)
![React](https://img.shields.io/badge/React-UI-61DAFB)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

Personal portfolio website for Manav Doshi, focused on data analytics, machine learning, business intelligence, and applied research projects.

Live site: https://manav-portfolio-woad.vercel.app

## Overview

This portfolio highlights my work as an aspiring Data Analyst / Data Scientist / AI Engineer. It includes:

- Data analytics and BI projects
- Machine learning and computer vision work
- IoT and research-based academic projects
- Resume download
- GitHub and LinkedIn links
- Contact form integration

## Featured Work

### Projects

- Customer Behavior Analysis
- Healthcare Data Analysis
- YouTube Trend Analyzer

### Research

- IoT Enabled Smart Helmet Breathalyzer
- Waste Segregation System
- Magnet Separation Demo
- Sanitary Detection Demo

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Three.js
- Framer Motion
- EmailJS

## Data And AI Tools Represented

- Python
- SQL
- PostgreSQL
- Pandas
- NumPy
- Power BI
- Tableau
- Matplotlib
- Scikit-Learn
- TensorFlow
- FastAPI
- OpenAI API
- Git
- Docker

## Getting Started

This project uses npm. Use `package-lock.json` as the source of truth for dependency installs.

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Start the development server:

```bash
npm run dev
```

Run type checks:

```bash
npm run check-types
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

The site can build without environment variables. The contact form requires EmailJS configuration:

```env
VITE_APP_SERVICE_ID=your_emailjs_service_id
VITE_APP_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_KEY=your_emailjs_public_key
VITE_APP_EMAILJS_RECIEVER=your_email_address
```

## Deployment

This project is deployed on Vercel.

Vercel settings:

- Framework: Vite
- Install Command: `npm install --legacy-peer-deps`
- Build Command: `npm run build`
- Output Directory: `dist`

Every push to the `main` branch triggers a new production deployment.

## Repository

GitHub: https://github.com/manav252/manav-portfolio

## Documentation

- `docs/architecture.md`
- `docs/methodology.md`
- `docs/findings.md`
