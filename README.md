# İnanıcı Hukuk Bürosu Website

A modern, fast, and trustworthy single-page website built with **Next.js 15 (App Router)** and **Tailwind CSS v4**.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## 🛠 Configuration & Editing

### Changing Content
All content is hardcoded in specific components for simplicity and speed.

- **Menu & Header**: `components/Header.tsx`
- **Hero / Main Text**: `components/Hero.tsx`
- **About / Features**: `components/About.tsx`
- **Services**: `components/Services.tsx`
- **Team Members**: `components/Team.tsx`
- **FAQs**: `components/FAQ.tsx`
- **Contact Info**: `components/Contact.tsx`
- **Footer**: `components/Footer.tsx`

### Changing WhatsApp Number
Edit `components/WhatsApp.tsx`, `components/Header.tsx`, and `components/Hero.tsx`. Look for the URL:
`https://wa.me/905001234567` (Replace `905001234567` with your actual number).

### Contact Form
The contact form logic is in `app/actions.ts`.
Currently, it logs submissions to the server console.

To send emails:
1. Sign up for a provider like **Resend** or **SendGrid**.
2. Update `app/actions.ts` to use their SDK.
3. Add environment variables in `.env.local`:
   ```env
   RESEND_API_KEY=re_123456...
   CONTACT_EMAIL=info@inanicihukuk.com
   ```

## 🎨 Styling
Styles are defined in `app/globals.css` using Tailwind v4 variables.
- **Colors**: `navy-900`, `navy-800`, `gold-600`, etc. defined in `@theme` block.

## ✅ Verification Checklist
- [x] **Smooth Scroll**: Clicking menu items scrolls gently to the section.
- [x] **Responsiveness**: Site adapts to Mobile, Tablet, and Desktop.
- [x] **SEO**: Turkish metadata is set in `app/layout.tsx`.
- [x] **Forms**: Contact form validates inputs and triggers server action.

## 📦 Deployment
Recommended: **Vercel**
1. Push to GitHub.
2. Import project in Vercel.
3. It detects Next.js automatically.
4. Add Environment Variables if needed.
5. Deploy.

---
© 2025 İnanıcı Hukuk Bürosu
