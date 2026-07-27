# Anuj Kumar Gond — Portfolio

A clean, minimal, recruiter-focused portfolio built with React, Vite, TypeScript, and Tailwind CSS.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (subtle section reveals only)
- EmailJS (contact form)
- Lucide Icons

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Configuration

Copy `.env.example` to `.env` and add your EmailJS credentials.

## Deployment

Deploy the `dist` folder to Vercel, Netlify, or any static host.

```bash
npx vercel
```

## Customization

- Personal info: `src/data/personal.ts`
- Skills: `src/data/skills.ts`
- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
