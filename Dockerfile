# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve the production build
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app using serve
CMD ["serve", "-s", "build", "-l", "3000"]
