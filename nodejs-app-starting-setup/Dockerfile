# ------------------------------------------
# Image Build
# ------------------------------------------
FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 80
# ------------------------------------------
# Container commands to run
# ------------------------------------------
CMD ["node", "server.js"]
