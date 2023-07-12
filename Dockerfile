# Use a Node 16 base image
FROM node:16-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD =====

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci

# Build the app
RUN npm run build

# ==== RUN =======

# Set the env to "production"
ENV NODE_ENV production

# Expose the port on which the app will be running (3001 is the default that `serve` uses)
EXPOSE 3001
EXPOSE 30352
EXPOSE 27017

# Install NGINX
RUN apk update && apk add nginx

# Remove default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start NGINX and the app
CMD ["nginx", "-g", "daemon off;"]


