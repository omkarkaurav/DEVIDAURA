import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyOrders from "./pages/MyOrders";
import Wishlist from "../pages/Wishlist";  // ✅ Added Wishlist Page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/wishlist" element={<Wishlist />} />  {/* ✅ Now it’s included */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
