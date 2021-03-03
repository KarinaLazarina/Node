const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./routers/apiRouter');
const { PORT, MONGO_URL } = require('./configs/config');

const app = express();

connectMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(PORT, () => { console.log(`Listen port ${PORT}!`); });

function connectMongo() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (err) => {
        console.log(err);
    });
}
