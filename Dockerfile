# ==== CONFIGURE =====

# Use a Node 16 base image
FROM node:16-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Copy wait-for-it script
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# ==== BUILD =====

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci

# Build the app
RUN npm run build

# ==== RUN =======

# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3001
EXPOSE 30342
EXPOSE 27017

# Start the app
CMD /wait-for-it.sh mongodb:27017 -- npm start