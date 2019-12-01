const express = require("express");
const mongoose = require("mongoose");
const message = require("./model/Messages");
const dashboard = require("./controller/DashboardController");

const app = express();

mongoose.connect(
  "mongodb+srv://trier:ferrarif40@trier-urlshortener-iyvpg.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("[mongoDB] => connected.");
  }
);

app.listen(3000, () => {
  console.log("[express] => listening 3000");
});

// ROUTES

app.use(express.json());
app.post("/", async (req, res) => await dashboard.getMessage(req, res));
