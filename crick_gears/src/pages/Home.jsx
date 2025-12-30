import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
  console.log("Products:", products);
}, [products]);


  return (
    
    <div>
      {/* HERO SECTION */}
      <section className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Best Cricket Gear at Best Prices
        </h1>
        <p className="text-lg text-gray-700">
          Compare prices from Amazon & Flipkart
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="/products" className="text-green-700 font-medium">View all →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
