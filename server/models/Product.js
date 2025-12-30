const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  priceRange: { type: String },
  images: { type: [String] },
  affiliateLinks: {
    amazon: { type: String },
    flipkart: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
