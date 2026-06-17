FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY frontend/package.json frontend/
RUN npm ci
COPY . .
RUN npm run build:frontend

FROM nginx:alpine AS runtime
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf