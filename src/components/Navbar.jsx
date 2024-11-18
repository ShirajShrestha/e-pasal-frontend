import {
  FiShoppingCart,
  FiHeart,
  FiMenu,
  FiUser,
  FiLogOut,
  FiShoppingBag,
  FiPhone,
  FiSearch,
} from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const isLoggedin = false; // Temporary state to check if user is logged in or not

  // Toggle function for profile dropdown
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <nav className="bg-white font-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo section*/}
        <a href="/" className="text-2xl font-bold text-primary">
          E-Pasal
        </a>
        {/* Search Bar (Only visible on larger screens) */}
        <form className="hidden lg:flex items-center w-1/2">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full pl-10 p-2"
              placeholder="Search product name..."
              required
            />
          </div>
          <button
            type="submit"
            className="ml-2 p-2 text-white bg-accent rounded-lg border border-accent hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        {/* Icons and User Profile section (Only visible on larger screens) */}
        {isLoggedin ? (
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/products">
              <FiShoppingBag className="text-xl cursor-pointer hover:text-accent" />
            </Link>
            <Link to="/cart">
              <FiShoppingCart className="text-xl cursor-pointer hover:text-accent" />
            </Link>
            <FiHeart className="text-xl cursor-pointer hover:text-accent" />
            <Link to="/contacts">
              <FiPhone className="text-xl cursor-pointer hover:text-accent" />
            </Link>
            <div className="relative">
              <div
                onClick={toggleProfileMenu}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1723200166097-4eed8c141f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="user"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-gray-700 font-semibold">Aurora</p>
              </div>

              {/* Profile Dropdown */}
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                  <a
                    href="/profile"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <FiUser className="mr-2" /> Profile
                  </a>
                  <a
                    href="/logout"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <FiLogOut className="mr-2" /> Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2 mr-2">
            <Link
              to="/signup"
              className="text-white bg-accent px-2 py-1 rounded-2xl hover:bg-primary"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-white bg-accent px-2 py-1 rounded-2xl hover:bg-primary"
            >
              Sign In
            </Link>
          </div>
        )}
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-accent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-transform transform ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-gray-50 shadow-lg rounded-lg p-4">
          {/* Search Bar */}
          <form className="flex items-center bg-white p-2 rounded-lg shadow-sm">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2"
              placeholder="Search product..."
              required
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-accent text-white rounded-lg"
            >
              <FiSearch />
            </button>
          </form>

          {/* Links and Profile Options */}
          {isLoggedin ? (
            <div className="space-y-4 mt-4">
              <Link to="/products" className="flex items-center space-x-2">
                <FiShoppingBag className="text-xl text-gray-700" />
                <span>Products</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Link to="/cart">
                  <FiShoppingCart className="text-xl text-gray-700 cursor-pointer hover:text-accent" />
                  <span>Cart</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <FiHeart className="text-xl text-gray-700" />
                <span>Favorites</span>
              </div>
              <Link to="/contacts" className="flex items-center space-x-2">
                <FiPhone className="text-xl text-gray-700" />
                <span>Contact</span>
              </Link>

              <div className="relative mt-4">
                <div
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1723200166097-4eed8c141f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-gray-700 font-semibold">Aurora</p>
                </div>
                {profileMenuOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FiUser className="mr-2" /> Profile
                    </Link>
                    <Link
                      to="/logout"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FiLogOut className="mr-2" /> Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <Link
                to="/signup"
                className="block text-center bg-accent text-white px-3 py-2 rounded hover:bg-primary"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="block text-center bg-accent text-white px-3 py-2 rounded hover:bg-primary"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
