FROM node:14.18-alpine AS production
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Build the app
ENTRYPOINT ["npm", "start"]