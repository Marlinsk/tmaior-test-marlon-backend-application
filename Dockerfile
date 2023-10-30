# Use the Node.js image with a specific version (node:19.6.0) as the base image.
FROM node:19.6.0

# Set the working directory inside the container to /app.
WORKDIR /app

# Set the working directory inside the container to /app.
COPY ["package.json", "package-lock.json", "./"] 

# Set the working directory inside the container to /app.
RUN npm install

# Copy the rest of the application source code from the host machine to the container's /app directory.
COPY . .

# Run 'npm run build' to execute any build scripts for the Node.js application (e.g., transpile TypeScript to JavaScript).
RUN npm run build

# Expose port 5000 to the outside world, allowing external access to the application.
EXPOSE 5000

# Start the Node.js application using 'npm start' when the container is launched.
CMD ["npm", "start"]