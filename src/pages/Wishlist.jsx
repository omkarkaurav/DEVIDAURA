import { useState, useEffect } from "react";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <ul className="bg-white shadow-md rounded-lg p-4">
          {wishlistItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center p-4 border-b">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromWishlist(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
