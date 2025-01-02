import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { 
  FaHome, FaUsers, FaChartPie, FaCommentDots, FaBell, 
  FaFileAlt, FaSignOutAlt, FaLifeRing 
} from "react-icons/fa"; // FaLifeRing icon added for Help & Support
import "./Sidebar2.css";

const Sidebar2 = () => {
   const { username1 } = useContext(UserContext);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [clickedImage, setClickedImage] = useState(""); // State to store clicked image URL

  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  // Function to open the modal with the clicked image
  const handleImageClick = (imageSrc) => {
    setClickedImage(imageSrc);
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal when clicked outside the image
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setClickedImage(""); // Reset the clicked image
    }
  };

  return (
    <aside className="sidebar">
      {/* Logo and Hospital Name */}
      <div className="sidebar-header">
        <img 
          src="/assets/smartshiftlogo.png" 
          alt="Hospital Logo" 
          className="hospital-logo" 
        />
        <h2 className="hospital-name">Vitality Healthcare</h2>
      </div>

      {/* User Profile */}
      <div className="user-profile">
        <div className="avatar-container" onClick={() => handleImageClick("/assets/admin_avatar.png")}>
          <img 
            src="/assets/admin_avatar.png" 
            alt="Admin Avatar" 
            className="profile-img" 
          />
        </div>
        <p className="greeting">
          <span>👋</span> HELLO, {username1.toUpperCase()}
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/Adminpage/dashboard2" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaHome className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Adminpage/user-management" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaUsers className="icon" /> User Management
          </NavLink>
        </li>
        <li className="submenu">
          <div onClick={toggleAnalytics}>
            <FaChartPie className="icon" /> Analytics
          </div>
          {isAnalyticsOpen && (
            <ul className="submenu-items">
              <li>
                <NavLink 
                  to="/Adminpage/key-metrics" 
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  Key Metrics
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/Adminpage/advanced" 
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  Advanced Analytics
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink 
            to="/Adminpage/notifications2" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaBell className="icon" /> Notifications
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/Adminpage/feedback" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaCommentDots className="icon" /> Feedback 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Adminpage/policy-section" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaFileAlt className="icon" /> Policy Updates
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Adminpage/help-support" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaLifeRing className="icon" /> Help & Support
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            <FaSignOutAlt className="icon" /> Log Out
          </NavLink>
        </li>
      </ul>

      {/* Modal for displaying large image */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={clickedImage} alt="Clicked Admin Avatar" className="modal-image" />
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar2;