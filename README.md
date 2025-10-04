# Portfolio Monorepo (React + Tailwind + Vite + Node/Express + MongoDB)

A minimal full‑stack portfolio with **two UIs**:
- **Developer UI (VSCode-like)** shown when the visitor answers "Yes" to "Are you a developer?"
- **General UI (clean portfolio)** shown when the visitor answers "No".
- **Theme switcher** (light/dark/system).

## Tech
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express + MongoDB (Mongoose)
- Monorepo scripts for dev & build

## Quick Start

### 1) Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)
- A MongoDB connection string (MongoDB Atlas or local)

### 2) Install all deps
```bash
npm run bootstrap
```

### 3) Configure environment variables
Copy `.env.example` to `.env` (root) and `apps/server/.env.example` to `apps/server/.env` and fill values.

### 4) Run dev (both apps concurrently)
```bash
npm run dev
```
- Frontend runs on http://localhost:5173
- Backend runs on http://localhost:5000

### 5) Build
```bash
npm run build
```

### 6) Deploy
- **Frontend**: Vercel or Netlify (build: `npm run build`, publish dir: `apps/client/dist`).
- **Backend**: Render, Railway, Fly.io, or a VPS (ensure `MONGODB_URI` and `PORT` are set).

## Monorepo Layout
```
.
├── README.md
├── package.json          # root scripts
├── .gitignore
├── .env.example          # root example env
└── apps
    ├── client            # React + Vite + Tailwind
    └── server            # Node + Express + MongoDB
```

## Env Vars
Root `.env` (used by frontend build if needed) and server `.env`:

- `VITE_API_BASE` (frontend): base URL of your server (e.g., `http://localhost:5000` for dev, or your prod URL).
- `MONGODB_URI` (server): your MongoDB connection string.
- `PORT` (server): defaults to 5000.

## Notes
- The Developer UI and General UI are both basic placeholders so you can customize quickly.
- All code is TypeScript-ready on the frontend; backend is JavaScript for simplicity.
