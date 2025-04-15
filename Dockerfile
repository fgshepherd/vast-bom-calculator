# Use the official NGINX image from Docker Hub
FROM nginx:alpine

# Set the maintainer label (optional, but good practice)
LABEL maintainer="fgshepherd"

# Remove the default NGINX static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site files from the local public directory to the NGINX html directory
COPY public /usr/share/nginx/html

# Expose port 80 (the default HTTP port)
EXPOSE 80

# Start NGINX when the container launches
CMD ["nginx", "-g", "daemon off;"]
