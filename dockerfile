# Use an official Node.js runtime as a parent image
FROM node:20.9.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY sac/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY sac .

# Build the React app
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]
