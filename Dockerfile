# Production image for StekIndiaSite (serves stek-india.in).
#
# Modelled on P91Elite's Dockerfile: two stages, so the runtime image does not
# ship the build toolchain. `npm run build` (script/build.ts) emits the Vite
# client into dist/public and bundles the Express server to dist/index.cjs.
#
# node_modules is carried over rather than pruned because script/build.ts only
# bundles an allowlist of server deps — everything outside that list is still
# required at runtime.

FROM node:20-slim AS build
WORKDIR /app

# Install with dev dependencies present; vite/esbuild/tsx are all build-time.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production PORT=5000
COPY --from=build /app ./
EXPOSE 5000
CMD ["node", "dist/index.cjs"]
