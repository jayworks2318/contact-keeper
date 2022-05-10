require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const app = express();

// init middleware
app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 1010;
app.listen(PORT, connectDB);