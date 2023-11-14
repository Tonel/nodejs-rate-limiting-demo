const express = require("express");
const { slowDown } = require("express-slow-down");

const port = 3000;

// initialize an Express server
const app = express();

// define the behavior of the slowing down rate limiting middleware
const limiter = slowDown({
    windowMs: 15 * 60 * 1000, // 5 minutes
    delayAfter: 10, // allow 10 requests per `windowMs` (5 minutes) without slowing them down
    delayMs: (hits) => hits * 200, // add 200 ms of delay to every request after the 10th
    maxDelayMs: 5000 // max global delay of 5 seconds
});

// register the slowing down rate limiting middleware to all endpoints
app.use(limiter);

// define a sample endpoint
app.get("/hello-world", (req, res) => {
    res.send("Hello, World!");
});

// start the server
app.listen(port, () => {
    console.log(`Server listening at http://hostname:${port}`);
});
