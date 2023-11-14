const express = require("express");

const port = 3000;

// initialize an Express server
const app = express();

// define a sample endpoint
app.get("/hello-world", (req, res) => {
    res.send("Hello, World!");
});

// start the server
app.listen(port, () => {
    console.log(`Server listening at http://hostname:${port}`);
});
