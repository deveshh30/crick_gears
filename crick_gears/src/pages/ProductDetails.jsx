import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white mt-8 shadow rounded">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-64 w-full object-cover mb-6"
      />

      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="my-4 text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold">{product.priceRange}</p>

      <div className="mt-6 flex gap-4">
        {product.affiliateLinks.amazon && (
          <a
            href={product.affiliateLinks.amazon}
            target="_blank"
            className="bg-yellow-500 px-4 py-2 rounded text-white"
          >
            Buy on Amazon
          </a>
        )}
        {product.affiliateLinks.flipkart && (
          <a
            href={product.affiliateLinks.flipkart}
            target="_blank"
            className="bg-blue-600 px-4 py-2 rounded text-white"
          >
            Buy on Flipkart
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
