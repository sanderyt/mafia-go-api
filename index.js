const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = 3000;

dotenv.config();

mongoose.connect(
  "mongodb+srv://sanderyt:mzmTSr7plokzQ73p@cluster0.t0pjs.gcp.mongodb.net/mafiago?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use(express.json());

//ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

//ROUTE MIDDLEWARES
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Mafia Go API");
});

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
