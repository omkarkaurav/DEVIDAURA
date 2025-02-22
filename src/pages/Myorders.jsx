import { useState, useEffect } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length > 0 ? (
        <ul className="bg-white shadow-md rounded-lg p-4">
          {orders.map((order, index) => (
            <li key={index} className="p-4 border-b">
              <h3 className="font-bold">Order #{index + 1}</h3>
              <p className="text-gray-500">Total: ${order.total}</p>
              <p className="text-gray-500">Status: {order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default MyOrdersPage;
