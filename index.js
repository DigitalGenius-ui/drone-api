const express = require("express");
const products = require("./data/products");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Drone api link...");
});

app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server Connected on port ${port}`));