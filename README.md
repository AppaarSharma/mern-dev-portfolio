# DevGrid Portfolio

High-performance MERN portfolio built with React, Vite, Tailwind CSS, Framer Motion, and an Express contact API.

## Stack

- Frontend: React + TypeScript + Vite + Tailwind CSS + Framer Motion
- Backend: Node.js + Express + Zod
- Deployment: Vercel (frontend) + Render (backend)

## Local Development

```bash
npm install
npm run dev:full
```

The frontend runs on `http://localhost:5173` and proxies `/api` requests to the Express server on `http://localhost:5000`.

## Environment Variables

Root `.env`:

```bash
VITE_API_BASE_URL=https://your-render-service.onrender.com
```

Backend `.env`:

```bash
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
```

## Deployment

### Frontend on Vercel

1. Import the repo.
2. Leave the root directory as the project root.
3. Set `VITE_API_BASE_URL` to the Render API URL.
4. Deploy with the default Vite settings or the included `vercel.json`.

### Backend on Render

1. Create a new Web Service using the `backend` directory as the root.
2. Use `npm install` as the build command.
3. Use `npm run start` as the start command.
4. Set `FRONTEND_ORIGIN` to your Vercel domain.

## Content Editing

Update portfolio content in `src/utils/portfolioData.ts`. This keeps personal details, project copy, skills, metrics, and links in a single file.
