# Check out https://hub.docker.com/_/node to select a new base image
FROM node:16.10.0-alpine3.14

# Set to a non-root built-in user `node`
RUN addgroup app && adduser -S -G app app

USER app
# Create app directory (with user `node`)

WORKDIR /app

COPY --chown=app:node package*.json ./
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)




RUN npm install

# Bundle app source code
COPY --chown=app:node . .

# Bind to all network interfaces so that it can be mapped to the host OS
#ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000
CMD [ "npm", "start" ]
