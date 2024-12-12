# Use an official Node runtime as a parent image
FROM node:21.6




# Set the working directory in the container
WORKDIR /app

# Accept build arguments
ARG NEXT_PUBLIC_POCKETBASE_HOST
ARG POCKETBASE_EMAIL
ARG POCKETBASE_PASSWORD
ARG POCKETBASE_ADMIN_TOKEN

# Write arguments to a .env file
RUN echo "NEXT_PUBLIC_POCKETBASE_HOST=$NEXT_PUBLIC_POCKETBASE_HOST" >> .env && \
    echo "POCKETBASE_EMAIL=$POCKETBASE_EMAIL" >> .env && \
    echo "POCKETBASE_PASSWORD=$POCKETBASE_PASSWORD" >> .env && \
    echo "POCKETBASE_ADMIN_TOKEN=$POCKETBASE_ADMIN_TOKEN" >> .env

    
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