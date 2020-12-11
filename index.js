const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use(express.json());
app.use(express.static(__dirname + "/public"));

//ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const propertyRoute = require("./routes/property");

//ROUTE MIDDLEWARES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/properties", propertyRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
