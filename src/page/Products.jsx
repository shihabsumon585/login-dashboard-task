import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://task-api-eight-flax.vercel.app/api/products/"
                );
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
            <div className="text-center py-6 text-gray-500">Loading products...</div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 min-h-screen p-10">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white border border-gray-100 rounded-2xl shadow p-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                    <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-gray-900 font-semibold text-lg">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="text-gray-500 text-sm">{product.sales} Sales</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;