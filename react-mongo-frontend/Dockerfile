# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

# Install project dependencies
RUN npm install

# Install Babel dependencies (if needed)
# RUN npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-private-property-in-object

COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use Nginx for serving the built app
FROM nginx:alpine

# Install OpenSSL
RUN apk --no-cache add openssl

# Copy the build output from the build stage to the Nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy SSL certificate and key to the container
COPY nginx/ssl/nginx.crt /etc/nginx/cert/nginx.crt
COPY nginx/ssl/nginx.key /etc/nginx/cert/nginx.key

# Copy Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Expose port 80 and 443 for serving the app over HTTP and HTTPS
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
