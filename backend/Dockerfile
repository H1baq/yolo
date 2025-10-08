# Use a lightweight Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app port
EXPOSE 5000

# Define environment variables
ENV MONGO_URL=mongodb://mongo:27017/yolomy
ENV PORT=5000

# Start the app
CMD ["node", "server.js"]
