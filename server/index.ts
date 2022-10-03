import express from "express";

const app = express();

import dotenv from "dotenv";
dotenv.config();

//connect mongodb
import "./config/dbConnect";

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App is runing on PORT", PORT);
});
