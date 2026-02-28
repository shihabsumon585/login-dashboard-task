import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://task-api-eight-flax.vercel.app/api/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm text-center">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-gray-700 font-semibold">Products</h2>
        <button
          onClick={() => navigate("/dashboard/products")}
          className="text-sm text-white bg-emerald-800 rounded-2xl hover:bg-emerald-700 px-3 py-1 flex items-center gap-1"
        >
          View Details
        </button>
      </div>
      <ul className="text-gray-600 text-sm space-y-2">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between">
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;