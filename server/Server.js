const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // <-- must be first line


const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = process.env.MONGODB_URL || "";
if (mongoUrl) {
  mongoose.connect(mongoUrl)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err.message));
} else {
  console.warn("MONGODB_URL not set; skipping DB connection (server will run in limited mode)");
}

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
