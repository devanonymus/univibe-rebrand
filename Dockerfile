FROM node:24-alpine AS base

ENV NEXT_TELEMETRY_DISABLED=1

# =========================================================
# Dependencies
# =========================================================

FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


# =========================================================
# Build
# =========================================================

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


# =========================================================
# Production
# =========================================================

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# File statici pubblici
COPY --from=builder /app/public ./public

# Standalone: server.js + node_modules minimi + build
COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/standalone ./

# CSS / JS / font generati da Next
COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]
