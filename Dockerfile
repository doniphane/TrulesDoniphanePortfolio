# syntax=docker/dockerfile:1

# Build stage — Node 26.12.1 includes the fixes from the 21 Oct 2026
# security release (CVE-2026-105482, -105483, -106069, -111497, etc.).
# Versions are pinned by tag + digest for reproducible, tamper-resistant builds.
FROM node:26.12.1-alpine3.24@sha256:40cd011b55415bc894e45b02fdd5a5dfde056921b7d23a64c74f80497af48797 AS build
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Pin bun to the version used locally instead of pulling whatever is latest.
RUN npm install -g bun@1.4.3

RUN chown node:node /app
COPY --chown=node:node package.json bun.lock ./
USER node
RUN bun install --frozen-lockfile

COPY --chown=node:node . .
RUN bun run build

# Runtime stage — nginx-unprivileged runs as UID 101 (no root master process).
FROM nginxinc/nginx-unprivileged:1.30.6-alpine3.24@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03 AS runtime

COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/ || exit 1
