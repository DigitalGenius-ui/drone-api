const express = require("express");
const products = require("./data/products");
const slides = require("./data/slides");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Drone api link...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/slides", (req, res) => {
  res.send(slides);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server Connected on port ${port}`));
