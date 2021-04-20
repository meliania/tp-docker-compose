const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const port = Number(process.env.port || 80);
const mongo_connection = process.env.mongo_connection;
const app = express();
app.use(helmet());

if (typeof mongo_connection !== 'string') {
    console.error('A mongo connection must be provided');
    process.exit(1);
}

async function bootstrap() {
    try {
        await mongoose.connect(mongo_connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
    } catch(e) {
        console.error('Error when connecting to mongodb database');
        throw e;
    }

    app.listen(port, () => {
        console.log(`App is listenning on port ${port}`);
    });
}

bootstrap()
    .catch(console.error);
