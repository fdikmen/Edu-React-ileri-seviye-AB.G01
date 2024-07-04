import express from "express";
import { createServer } from "http";

const app = express();

const server = createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
