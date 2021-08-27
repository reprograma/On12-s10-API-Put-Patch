const express = require("express");
const cors = require("cors");
const postsRoutes = require("./routes/postsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postsRoutes);

module.exports = app;