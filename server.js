const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hsello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running at port", port));
