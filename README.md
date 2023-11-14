# Node.js Rate Limiting Demo Project

This project is a simple Node.js API built with Express. It showcases different rate-limiting strategies using popular middlewares.

The two branches are:
1. **express-rate-limit**: Demonstrates rate limiting using the `express-rate-limit` library.
2. **express-slow-down**: Illustrates rate limiting with a delay using the `express-slow-down` package.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
Then, install the project's dependencies with:
```bash
npm install
```

### Start the Application
```bash
npm run start
```

### Test the API
Contact the `GET` endpoint at `http://localhost:3000/hello-world`. This should return the "Hello, World!" string, following a specific rate-limiting behavior based on the branch you are in.
