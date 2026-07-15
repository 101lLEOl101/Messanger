# MessAnger

A full-stack messenger web app, built as a portfolio project.

> ⚠️ **Work in progress.** The app is under active development. A working auth page is already deployed and live.

## 🔗 Live demo

**[https://messanger.mooo.com/auth/](https://messanger.mooo.com/auth/)** — registration & login (deployed on a personal VPS).

> Note: the root path is not built yet, so open the `/auth/` page directly.

## Tech stack

**Frontend:** React · TypeScript · Redux Toolkit + RTK Query · React Hook Form + Zod · Material UI · React Router · webpack

**Backend:** Node.js · TypeScript · Express · Prisma ORM · PostgreSQL · JWT · bcrypt · Zod

**Tooling:** npm workspaces (monorepo) · Jest · ESLint · GitHub Actions · Docker

## What's done

- ✅ **Monorepo** on npm workspaces (`backend` + `frontend`)
- ✅ **Auth API** — register & login with bcrypt password hashing, JWT, Zod validation, centralized error handling and rate limiting
- ✅ **PostgreSQL via Prisma** with migrations
- ✅ **Health / readiness** endpoints (`/api/health`, `/api/ready`)
- ✅ **Auth page** — login/register form on Material UI, validated with React Hook Form + Zod
- ✅ **State & data layer** — Redux Toolkit slice + RTK Query
- ✅ **Tests** — Jest with co-located unit tests and coverage thresholds
- ✅ **CI** — GitHub Actions: lint, typecheck, tests + coverage; Dependabot & CodeQL; branch protection on `main`
- ✅ **Deployment** — Dockerized, images published to GHCR, deployed to a VPS with post-deploy smoke tests

## In progress

- 🚧 Home route & post-login redirect, protected routes

## Roadmap

The goal is a Telegram-style messenger:

- 📨 Real-time 1:1 and group chats
- 📞 WebRTC audio & video calls
- 🔒 End-to-end encryption in dedicated secret chats

## Local development

```bash
npm install
npm run dev        # runs backend (:3001) and frontend (:3000) in parallel
npm test           # runs the test suites
npm run lint       # lints the whole monorepo
```

Requires a running PostgreSQL and a `.env` with `DATABASE_URL` and `JWT_SECRET`.
