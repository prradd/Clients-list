import express from "express";

const clients = require("./routes/api/clients")
const mongo = require('./libs/mongo');

const app: express.Application = express();

// Bodyparser Middleware
app.use(express.json());

// Connect to Mongo
mongo();

// Use Routes
app.use('/api/clients', clients);

module.exports = app