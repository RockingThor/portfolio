# Dockerfile

# Use the official Node.js image as the base image
FROM node:20

# Install pnpm
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the port on which the application will run
EXPOSE 3000

# Start the Next.js application¯
CMD ["pnpm", "start"]
