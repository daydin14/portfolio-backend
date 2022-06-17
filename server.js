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
// /projects route to retreive proj info
// /about route to retreive about me
// setup server listener