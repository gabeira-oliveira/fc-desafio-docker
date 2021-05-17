# pull the Node.js Docker image
FROM gbofullcycle/node-desafio-fc

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# create the directory inside the container
WORKDIR /usr/src/app

# copy the generated modules and all other files to the container
COPY . .

# run npm install in our local machine
RUN npm install

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 3000
