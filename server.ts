import express from "express";
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const clients = require("./routes/api/clients")

const app: express.Application = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.ts');

// Connect to Mongo
mongoose
    .connect(db.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err: any) => console.log(err));

// Use Routes
app.use('/api/clients', clients);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server started on port ${port}`));


// app.get('/', function (req, res) {
//     res.send('Hello world');
// });
//
// app.listen(7000, function () {
//     console.log('App is listening on port 7000');
// });