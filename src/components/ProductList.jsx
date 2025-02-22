import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from local storage or API (replace with actual API call if needed)
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="font-bold mt-2">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
