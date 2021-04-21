FROM node

LABEL maintainer='kecsou'

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN yarn install --production

CMD ["node", "index.js"]
