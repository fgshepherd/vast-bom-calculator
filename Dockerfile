# Serve static site with NGINX
FROM nginx:alpine
COPY . /usr/share/nginx/html
# Expose port 80 (default for NGINX)
EXPOSE 80
# No CMD needed; NGINX runs by default
