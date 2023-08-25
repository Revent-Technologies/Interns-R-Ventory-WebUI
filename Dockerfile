# Stage 1: Build Angular app
FROM node:14 as build

WORKDIR /app

# Copy and install app dependencies
COPY package*.json ./
RUN npm install -g npm

# Copy the rest of the app source code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the compiled Angular app from the build stage to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port for Nginx (default is 80)
EXPOSE 80

# Start Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
