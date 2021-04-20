FROM node

LABEL maintainer='kecsou'

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN yarn installl --production

CMD ["node", "index.js"]
