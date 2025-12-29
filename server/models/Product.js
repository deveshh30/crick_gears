const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  priceRange: String,
  images: [String],
  affiliateLinks: {
    amazon: String,
    flipkart: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
