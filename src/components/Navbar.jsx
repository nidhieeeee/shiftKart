import React, { useState } from "react";
import "./Navbar.css";
import { Search, CircleUserRound, ShoppingCart, Menu } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate(); 
    const [menuOpen, setMenuOpen] = useState(false);

    function handleLogin() {
        navigate("/login"); 
    }

    function handleCart() {
        navigate("/cart");
    }
    function handleHome() {
        navigate("/");
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="navbar-container">
            <div className="logo" onClick={handleHome}>
                <div className="flipkart-logo">
                    <img src="https://freepngimg.com/save/134877-bag-girl-fashion-shopping-holding/900x900" alt="flipkart-logo" />
                </div>
                <div className="logo-text"><h2>SwiftKart</h2></div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <Menu size={30} />
            </div>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <div className="searchbar">
                    <div className="searchbar-svg"> <Search strokeWidth={1} color="rgb(79, 79, 79)" size={30} /></div>
                    <div className="searchbar-text"><p>Search for Products, Brands and More</p></div>
                </div>
                <div className="login" onClick={handleLogin}>
                    <div className="login-svg"><CircleUserRound strokeWidth={1.5} size={23} /></div>
                    <div className="login-text"> <p>Login</p> </div>
                </div> 
                <div className="cart" onClick={handleCart}>
                    <div className="cart-svg">
                        <ShoppingCart strokeWidth={1.5} size={23} />
                    </div>
                    <div className="cart-text"><p>Cart</p></div>
                </div> 
            </div> 
        </div>
    );
}

export default Navbar;
