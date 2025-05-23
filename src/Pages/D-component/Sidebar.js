import React from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";
import Activity from "./image/Activity.png"
import Experience from "./image/experience-1.jpg"
import Profile from "./image/profile-picture.webp"
import Group from './image/Group .png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src="/images/sidebar/data-management (1).png" alt="Projects Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Projects</span>
      </div>
      <div className="sidebar-item">
        <img src="/images/sidebar/graph.png" alt="Transactions Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Transactions</span>
      </div>
      <div className="sidebar-item">
        <img src="/images/sidebar/app.png" alt="Completed Designs Icon" className="sidebar-item-icon" />
        <NavLink to='/designer/view'><span className="sidebar-item-text">Completed Designs</span></NavLink>
      </div>
      <div className="sidebar-item">
        <img src="/images/sidebar/compass-circular-tool.png" alt="Wallet Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Wallet</span>
      </div>
      <div className="image">
        <img src={Experience} style={{ height: 'auto', width: '100%' }} alt="Experience" />
      </div>
      <div className="profile-card">
        <img src={Profile} alt="Profile Picture" />
        <div className="profile-name">Mickelson Klus</div>
        <button className="profile-button">Designer's Profile</button>
      </div>
      <div className="group">
        <img src={Group} style={{ marginTop: ' 5px' }} alt="Group" />
      </div>
    </div>
  );
}

export default Sidebar;
