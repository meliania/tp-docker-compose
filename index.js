const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const port = Number(process.env.port || 80);
const mongo_connection = process.env.mongo_connection;

if (typeof mongoose !== 'string') {
    console.error('A mongo connection must be provided');
    process.exit(1);
}

const app = express();
app.use(helmet());

async function bootstrap() {
    await mongoose.connect(mongo_connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    app.listen(port, () => {
        console.log(`App is listenning on port ${port}`);
    });
}

bootstrap()
    .catch(console.error);
