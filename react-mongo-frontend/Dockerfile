# Stage 1: Build React app
FROM node:18-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the production version of the app
RUN npm run build

# Stage 2: Use Nginx for serving the built app
FROM nginx:alpine

# Copy the build output from the build stage to the Nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# The default command starts Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
