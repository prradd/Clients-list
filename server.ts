import express from "express";
const path = require('path');

const app = require('./app')

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));

        app.get('*', (req: any, res: any) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
