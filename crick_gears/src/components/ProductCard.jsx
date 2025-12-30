import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    category,
    priceRange,
    images,
    rating = 4.5,
    reviews = 120,
    tag, 
  } = product;

  return (
    <Link
      to={`/products/${_id}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={images?.[0]}
          alt={name}
          className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform"
        />

        {tag && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category */}
        <p className="text-xs uppercase tracking-wide text-gray-400">
          {category}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-400">({reviews})</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-blue-600 font-semibold">
            ₹{priceRange}
          </span>

          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
