const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use(express.json());

//ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const propertyRoute = require("./routes/property");

//ROUTE MIDDLEWARES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/property", propertyRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Mafia Go API");
});

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
