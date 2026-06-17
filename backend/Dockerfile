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
COPY --from=builder /app/backend/dist backend/dist
CMD ["node", "backend/dist/index.js"]