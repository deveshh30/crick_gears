import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>

      <div className="mt-4 space-x-4">
        {product.affiliateLinks.amazon && (
          <a href={product.affiliateLinks.amazon} target="_blank"
             className="bg-yellow-400 px-4 py-2">
            Buy on Amazon
          </a>
        )}
        {product.affiliateLinks.flipkart && (
          <a href={product.affiliateLinks.flipkart} target="_blank"
             className="bg-blue-500 text-white px-4 py-2">
            Buy on Flipkart
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
