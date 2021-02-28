require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const cors = require("cors");
const db_connect = require("./config/db");
const userRoutes = require("./routes/user.routes.js");

const app = express();
// using middleware to parse req/res in json
app.use(express.json());
app.use(cors());

// connecting to database
db_connect();

// user routes
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
