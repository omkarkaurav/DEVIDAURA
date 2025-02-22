import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-svgrepo-com.svg";
import wishlistIcon from "../assets/wishlist-svgrepo-com.svg";
import userIcon from "../assets/user-avatar-svgrepo-com.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">DEVIDAURA</Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <img src={wishlistIcon} alt="Wishlist" className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">{wishlistCount}</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">{cartCount}</span>
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <img src={userIcon} alt="Profile" className="w-8 h-8 rounded-full" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black p-4 rounded-md shadow-lg">
                <Link to="/profile" className="block hover:bg-gray-200 p-2">Profile</Link>
                <Link to="/myorders" className="block hover:bg-gray-200 p-2">My Orders</Link>
                <button className="w-full text-left hover:bg-gray-200 p-2">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
