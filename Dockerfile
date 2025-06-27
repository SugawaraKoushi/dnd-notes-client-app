# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# ARG REACT_APP_API_URL
# ENV REACT_APP_API_URL=${REACT_APP_API_URL}
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
# CMD ["nginx", "-g", "daemon off;"]
CMD ["sh", "-c", "envsubst '${BACKEND_URL}' < /etc/nginx/nginx.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]d