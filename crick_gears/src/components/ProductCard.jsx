import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.images[0]} alt={product.name} className="h-40 mx-auto" />
      <h2 className="font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.priceRange}</p>
      <Link
        to={`/products/${product._id}`}
        className="text-green-700 font-medium"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
