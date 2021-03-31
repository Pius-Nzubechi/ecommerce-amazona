import express from "express";
import data from "./data.js";
  
const app = express();

app.get("/api/products", (req, res, next) => {
  res.send(data.products);
});

app.get("/", (req, res, next) => {
  res.send("server is running");
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log("server is running");
});
