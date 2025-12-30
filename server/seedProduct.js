require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const products = [
  {
    name: "MRF Genius Cricket Bat",
    description: "Premium English willow bat for professional players.",
    priceRange: "₹7,000 – ₹9,000",
    images: ["https://example.com/mrf_bat.jpg"],
    affiliateLinks: {
      amazon: "https://www.amazon.in/dp/B00XXXXXXX",
      flipkart: "https://www.flipkart.com/product/p/itmXXXXXXX"
    }
  },
  {
    name: "SG Test Cricket Ball",
    description: "Professional quality leather cricket ball.",
    priceRange: "₹450 – ₹600",
    images: ["https://example.com/sg_ball.jpg"],
    affiliateLinks: {
      amazon: "https://www.amazon.in/dp/B01XXXXXXX",
      flipkart: "https://www.flipkart.com/product/p/itmXXXXXXX"
    }
  },
  {
    name: "Kookaburra Wicket Keeping Gloves",
    description: "High-quality gloves for wicket keepers.",
    priceRange: "₹1,200 – ₹1,800",
    images: ["https://example.com/kookaburra_gloves.jpg"],
    affiliateLinks: {
      amazon: "https://www.amazon.in/dp/B01XXXXXXX",
      flipkart: "https://www.flipkart.com/product/p/itmXXXXXXX"
    }
  }
];

async function seed() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products seeded");
  mongoose.disconnect();
}

seed();
