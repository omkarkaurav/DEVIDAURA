import { useState, useEffect } from "react";
import CheckoutModal from "../components/CheckoutModal";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="container mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-gray-500">${item.price}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {/* Proceed to Checkout Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCheckoutOpen(true)}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Proceed to Checkout
        </button>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && <CheckoutModal closeModal={() => setIsCheckoutOpen(false)} />}
    </div>
  );
};

export default Cart;
