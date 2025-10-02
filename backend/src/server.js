const express = require('express');
const app = express();
const port = 4000;

app.get("/", (_req, res) => {
  return res.send("Running")
});

app.listen(port)