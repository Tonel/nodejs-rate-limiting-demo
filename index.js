const express = require("express");
const { rateLimit } = require("express-rate-limit");

const port = 3000;

// initialize an Express server
const app = express();

// define the rate limiting middleware
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 10, // each IP can make up to 10 requests per `windowsMs` (5 minutes)
    standardHeaders: true, // add the `RateLimit-*` headers to the response
    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
});

// apply the rate limiting middleware to all endpoints
app.use(limiter);

// define a sample endpoint
app.get("/hello-world", (req, res) => {
    res.send("Hello, World!");
});

// start the server
app.listen(port, () => {
    console.log(`Server listening at http://hostname:${port}`);
});
