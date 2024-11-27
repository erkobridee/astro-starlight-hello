# ---- Base ----
FROM node:lts-alpine AS base
WORKDIR /app
COPY . .
# install all dependencies
RUN npm ci

# ---- Build ----
FROM base AS build
WORKDIR /app
RUN npm run build

# ---- Release ----
FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080