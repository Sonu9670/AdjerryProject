import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./ADJERRY LOGO.png";

const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          // Token expired
          localStorage.removeItem("token");
          setUser(null);
        } else {
          setUser(decodedToken); // Token is valid
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    } else {
      setUser(null); // No token found
    }
  }, [location]); // Re-run whenever the location changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar p-1 mx-6 rounded-3xl">
      <div className="flex-box navb">
        <div className="navbar-brand">
          <img src={logo} className="logo" alt="Website Logo" />
        </div>

        <i className={`fa fa-${menuOpen ? 'times' : 'bars'} menubar`} onClick={toggleMenu}></i>
        <div className={`flex-box mobileFlex mobileNav gap-5 ${menuOpen ? '' : 'hide'}`}>
          <div className="">
            <ul className="navbar-nav d-flex flex-row gap-5 mobileFlex">
              {user ? (
                <li className="nav-item">
                  <Link to={`/${user.user_type}/home`} className="nav-link">
                    Dashboard
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      AboutUs
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  ContactUs
                </Link>
              </li>
              {user ? (
                user.user_type === "business" ? (
                  <li className="nav-item">
                    <Link to="/business/orders" className="nav-link">
                      Orders
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/designer/wallet" className="nav-link">
                      Wallet
                    </Link>
                  </li>
                )
              ) : null}
            </ul>
          </div>
          {user ? (
            <div className="d-flex gap-4 align-items-center">
              <Link to="/profile" className="align-self-center">
                Profile
                <span>Welcome, {user.email}</span>
              </Link>
              <button onClick={handleLogout} className="btn px-3xl">
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex gap-4 align-items-center ">
              <Link to="/login" className="align-self-center">
                Login
              </Link>
              <Link to="/proceed" className="btn px-3xl">
                Join Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
