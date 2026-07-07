FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend/package.json backend/
RUN npm ci
COPY . .
RUN npm run prisma:generate
RUN npm run build:backend

FROM node:24-alpine AS runtime
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend/package.json backend/
RUN npm ci --omit=dev
COPY prisma.config.ts ./
COPY backend/prisma backend/prisma
COPY backend/entrypoint.sh backend/entrypoint.sh
COPY --from=builder /app/backend/dist backend/dist
ENTRYPOINT ["sh", "backend/entrypoint.sh"]