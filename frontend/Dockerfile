# Use an official Node runtime as a parent image
FROM node:21.6

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install -f

# Bundle your app source
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port Next.js is running on (default is 3001)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]