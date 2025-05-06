# Use Node.js LTS as the base image
FROM node:22-slim

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build TypeScript code
RUN npm run bundle

# Set environment variables
ENV NODE_ENV=production
ENV HTTP_PORT=3000
ENV RAW_PORT=9100

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 9100

# Command to run the application
CMD ["node", "dist/index.js"]