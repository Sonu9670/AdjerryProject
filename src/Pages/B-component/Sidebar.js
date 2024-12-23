import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Experience from "./images/experience-1.png";

function Sidebar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }
  const decodedToken = JSON.parse(atob(token.split(".")[1]));

  return (
    <div className="menu-sidebar">
      <Link to="/uploadDesign" className="menu-item">
        <img src="/images/sidebar/data-management (1).png" alt="Projects Icon" className="menu-icon" />
        <span className="menu-text">Upload Design</span>
      </Link>
      <div className="menu-item">
        <img src="/images/sidebar/graph.png" alt="Completed Designs Icon" className="menu-icon" />
        <span className="menu-text">View Post</span>
      </div>
      <Link to="/business/view" className="menu-item">
        <img src='/images/sidebar/app.png' alt="All Designs" className="menu-icon" />
        <span className="menu-text">All Designs</span>
      </Link>
      <Link to="/business/orders" className="menu-item">
        <img src="/images/sidebar/compass-circular-tool.png" alt="Order Icon" className="menu-icon" />
        <span className="menu-text">Orders</span>
      </Link>

      <div className="sidebar-image">
        <img
          src={Experience}
          alt="Experience"
        />
      </div>
      <div className="user-card">
        <img src={decodedToken.profile || '/images/user.jpg'} alt="Profile Picture" />
        <div className="user-name">{decodedToken.name || 'Adjerry User'}</div>
        <button className="user-button">Business Profile</button>
      </div>
    </div>
  );
}

export default Sidebar;
