# ==== CONFIGURE =====

# Use a Node 16 base image
FROM node:16-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD =====

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
RUN npm install
RUN npm install concurrently
RUN npm install -g nodemon
# Build the app
RUN npm run build

# ==== RUN =======

# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 30342
# Start the app
CMD [ "npm", "run", "start" ]
# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname