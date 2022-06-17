// Import Dependencies and Json Files
const express = require("express");
const cors = require("cors")

const projects = require("./projects.json");
const about = require("./about.json");

// Create App Object
const app = express();

// Cors Middleware
app.use(cors());

// Home route to test app
app.get("/", (req,res) => {
    res.send("Hello World");
});

// /projects route to retreive proj info
app.get("/projects", (req,res) => {
    res.json(projects);
});

// /about route to retreive about me
app.get("/about", (req,res) => {
    res.json(about);
});

// PORT number variable
const PORT = process.env.PORT || 4000;

// setup server listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));