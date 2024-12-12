# Use an official Node runtime as a parent image
FROM node:21.6


ARG NEXT_PUBLIC_POCKETBASE_HOST


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# env
ENV NEXT_PUBLIC_POCKETBASE_HOST=$NEXT_PUBLIC_POCKETBASE_HOST


# Install app dependencies
RUN npm install -f --legacy-peer-deps

# Bundle your app source
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port Next.js is running on (default is 3001)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]