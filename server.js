const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
