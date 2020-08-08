import express from "express";
const mongoose = require("mongoose");
const path = require('path');

const clients = require("./routes/api/clients")
const mongo = require('./libs/mongo');

const app: express.Application = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const config = require('./config')[process.env.PROFILE || 'dev'];

// Connect to Mongo
mongo(config.mongo)

// Use Routes
app.use('/api/clients', clients);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
