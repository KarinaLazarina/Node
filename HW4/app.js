const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./routers/apiRouter');

const app = express();

connectMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(8000, () => { console.log('Listen port 8000!'); });

function connectMongo() {
    mongoose.connect('mongodb://localhost:27017/NodeJS', { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (err) => {
        console.log(err);
    });
}
