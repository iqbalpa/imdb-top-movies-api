# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 20 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/


# # PNPM
# FROM node:20-alpine as base

# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

# COPY . /app
# WORKDIR /app

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm prisma generate
# RUN pnpm run build

# FROM base
# COPY --from=prod-deps /app/node_modules /app/node_modules
# COPY --from=build /app/dist /app/dist
# EXPOSE 3000
# CMD [ "node", "dist/src/main" ]


# YARN
FROM node:20-alpine AS base

FROM base AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn cache clean
RUN yarn install --no-lockfile
COPY . .
RUN yarn prisma generate
RUN yarn build

FROM base AS production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json .
COPY --from=build /app/prisma ./prisma
EXPOSE 3000
CMD ["sh", "-c", "yarn migrate && yarn start:prod"]

