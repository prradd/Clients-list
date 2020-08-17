import express from "express";

const mongo = require('./libs/mongo');

const app: express.Application = express();

// Bodyparser Middleware
app.use(express.json());

// Connect to Mongo
mongo();

// Use Routes
app.use('/api/clients', require("./routes/api/clients"));
app.use('/api/users', require("./routes/api/users"));
app.use('/api/auth', require("./routes/api/auth"));

module.exports = app