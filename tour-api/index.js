import express from "express";
import mongoose from "./db/index.js";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.static("uploads"));

app.use(express.json());

app.use(routes);

app.use("*", (req, res) => {
  res.status(404).send("No Routes Found");
});

app.listen(3000, () => {
  console.log("App is running @localhost:3000");
});
