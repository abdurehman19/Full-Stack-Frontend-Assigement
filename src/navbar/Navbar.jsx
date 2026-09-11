import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useCart } from "../pages/useCart";
// import Accounts from "../pages/Accounts";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <>
      <nav className="navbar">

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>


        {/* =========================
            LOGO
        ========================= */}

        <Link to="/" className="logo">
          SHOP.CO
        </Link>


        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="nav-links">

          <Link
            to="/shop"
            className="shop-link"
          >
            Shop
            <FiChevronDown />
          </Link>

          <Link to="/shop">
            On Sale
          </Link>

          <Link to="/newarrival">
            New Arrivals
          </Link>

          <Link to="/brands">
            Brands
          </Link>

          <a href="https://admin-dashboard-ruddy-nu.vercel.app" target="_blank" rel="noopener noreferrer">
            Admin Dashboard
          </a>

        </div>


        {/* =========================
            SEARCH
        ========================= */}

        <div className="search-box">

          <FiSearch />

          <input
            type="text"
            placeholder="Search for products..."
          />

        </div>


        {/* =========================
            ACTIONS
        ========================= */}

        <div className="nav-actions">

          {/* CART */}

          <Link
            to="/cart"
            className="cart-link"
            aria-label="Shopping Cart"
          >

            <FiShoppingCart />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}

          </Link>


          {/* ACCOUNT */}

          <Link
            to="/accounts"
            aria-label="Account"
          >
            <FiUser />
          </Link>

        </div>

      </nav>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>

          <Link
            to="/sale"
            onClick={() => setMenuOpen(false)}
          >
            On Sale
          </Link>

          <Link
            to="/new-arrivals"
            onClick={() => setMenuOpen(false)}
          >
            New Arrivals
          </Link>

          <Link
            to="/brands"
            onClick={() => setMenuOpen(false)}
          >
            Brands
          </Link>

          {/* Mobile Cart */}

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="mobile-cart-link"
          >
            Cart

            {cartCount > 0 && (
              <span className="mobile-cart-count">
                {cartCount}
              </span>
            )}

          </Link>

        </div>

      )}

    </>
  );
};

export default Navbar;