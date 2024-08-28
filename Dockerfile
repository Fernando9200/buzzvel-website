# Use an official node image as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use an official nginx image to serve the React app
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Combine commands to start Nginx and then print the message
CMD sh -c "nginx -g 'daemon off;' & sleep 1 && echo 'Your application is running at: http://localhost:3000' && wait"
