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
    <div className="retailer-sidebar">
      <Link to="/uploadDesign" className="retailer-item">
        <img src="/images/sidebar/data-management (1).png" alt="Projects Icon" className="retailer-icon" />
        <span className="retailer-text">Upload Design</span>
      </Link>
      <div className="retailer-item">
        <img src="/images/sidebar/graph.png" alt="Completed Designs Icon" className="retailer-icon" />
        <span className="retailer-text">View Post</span>
      </div>
      <Link to="/business/view" className="retailer-item">
        <img src='/images/sidebar/app.png' alt="All Designs" className="retailer-icon" />
        <span className="retailer-text">All Designs</span>
      </Link>
      <Link to="./" className="retailer-item">
        <img src="/images/sidebar/compass-circular-tool.png" alt="Order Icon" className="retailer-icon" />
        <span className="retailer-text">Orders</span>
      </Link>

      <div className="retailer-image">
        <img
          src={Experience}
          alt="Experience"
        />
      </div>
      <div className="retailer-card">
        <img src={decodedToken.profile || '/images/user.jpg'} alt="Profile Picture" />
        <div className="retailer-name">{decodedToken.name || 'Adjerry User'}</div>
        <button className="retailer-button">Business Profile</button>
      </div>
    </div>
  );
}

export default Sidebar;
