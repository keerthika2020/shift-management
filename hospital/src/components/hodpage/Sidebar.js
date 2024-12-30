import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaUserCheck, FaCalendarAlt, FaChartLine, FaBell, FaUser, FaSignOutAlt, FaAddressBook, FaAccessibleIcon, FaBalanceScale, FaCalendar, FaCalendarPlus } from 'react-icons/fa';
import './Sidebar.css'; // You can create a separate CSS file for styling

const Sidebar = ({ username = "User" }) => {
    return (
        <aside className="sidebar_hodsidebar">
            {/* Logo and Hospital Name */}
            <div className="sidebar-header_hodsidebar">
                <img src="/assets/smartshiftlogo.png" alt="Hospital Logo" className="hospital-logo_hodsidebar" />
                <h2 className="hospital-name_hodsidebar">Vitality Healthcare</h2>
            </div>

            {/* User Profile */}
            <div className="user-profile_hodsidebar">
                <div className="avatar-container_hodsidebar">
                    <img src="/assets/med2.png" alt="User Avatar" className="profile-img_hodsidebar" />
                </div>
                <p className="greeting_hodsidebar">👋 HELLO, {username.toUpperCase()}</p>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links_hodsidebar">
                <li>
                    <Link to="/dashboard">
                        <FaHome className="icon_hodsidebar" /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/emergency-staffing">
                        <FaUsers className="icon_hodsidebar" /> Emergency Staff Needs
                    </Link>
                </li>
                <li>
                    <Link to="/staff-availability">
                        <FaUserCheck className="icon_hodsidebar" /> Staff Availability
                    </Link>
                </li>
                <li>
                    <Link to="/shift-management">
                        <FaCalendarPlus className="icon_hodsidebar" /> Shift Management
                    </Link>
                </li>
                <li>
                    <Link to="/notifications">
                        <FaBell className="icon_hodsidebar" /> Notifications
                    </Link>
                </li>
                <li>
                    <Link to="/attendance-trends">
                        <FaChartLine className="icon_hodsidebar" /> Attendance Trends
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <FaUser className="icon_hodsidebar" /> Profile
                    </Link>
                </li>
                <li>
                    <Link to="/timetable">
                        <FaCalendarAlt className="icon_hodsidebar" /> TimeTable
                    </Link>
                </li>
                <li>
                    <Link to="/compliance">
                        <FaBalanceScale className="icon_hodsidebar" /> Compliances
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FaSignOutAlt className="icon_hodsidebar" /> Log Out
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
