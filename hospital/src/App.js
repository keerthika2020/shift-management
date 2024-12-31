import React, { useState , useEffect } from "react";
import { BrowserRouter as Router, Routes,  Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/homepage/Home";
import DoctorsList from "./components/homepage/DoctorsList";
import Login from "./components/homepage/Login";
import Register from "./components/homepage/Register";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AmbulanceServices from "./pages/AmbulanceServices";
import MedicalServices from "./pages/MedicalServices";
import Pharmacy from "./pages/Pharmacy";
import WhyChooseUs from "./pages/WhyChooseUs";
import NewsAndArticles from "./pages/NewsAndArticles";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions"; // Import TermsConditions page
import Dashboard1 from './components/hodpage/Dashboard1';  
import StaffAvailability from './components/hodpage/StaffAvailability';  // Import StaffAvailability component
import ShiftManagement from './components/hodpage/ShiftManagement';  // Import ShiftManagement component
import Notification1 from './components/hodpage/Notification1';  // Import Notification component
import AttendanceTrends from './components/hodpage/AttendanceTrends';  // Import AttendanceTrends component
import ProfileSettings from './components/hodpage/ProfileSettings';  // Import ProfileSettings component
import TimeTable from './components/hodpage/TimeTable';  // Import TimeTable component
import  EmergencyStaffing from './components/hodpage/EmergencyStaffing';


// Admin Components
import Sidebar2 from './components/Adminpage/Sidebar2';
import Dashboard2 from "./components/Adminpage/Dashboard2";
import UserManagement from "./components/Adminpage/UserManagement";
import KeyMetrics from "./components/Adminpage/KeyMetrics";
import AdvancedAnalytics from "./components/Adminpage/AdvancedAnalytics";
import Notification2 from './components/Adminpage/Notification2';
import Feedback from "./components/Adminpage/Feedback";
import PolicySection from "./components/Adminpage/PolicySection";
import PolicyDetail from "./components/Adminpage/PolicyDetail";
import AddPolicyForm from "./components/Adminpage/AddPolicyForm";
import HelpSupport from "./components/Adminpage/HelpSupport";
// CSS Imports
import "./components/Adminpage/Card.css";
import "./components/Adminpage/Chart.css";
import "./components/Adminpage/Dashboard2.css";
import "./components/Adminpage/Sidebar2.css";
import "./components/Adminpage/UserManagement.css";
import "./components/Adminpage/AdvancedAnalytics.css";
import "./components/Adminpage/Feedback.css";
import "./components/Adminpage/PolicySection.css";
import "./components/Adminpage/PolicyDetail.css";
import "./components/Adminpage/HelpSupport.css";



// Admin Layout Wrapper
function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar2 />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}

// Logout Button Component
function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (e.g., token or user session)
    localStorage.removeItem("userToken"); // Example of clearing session storage or token
    sessionStorage.removeItem("userSession");

    // Redirect to home page
    navigate("/"); // This will navigate to the home page
  };

  return <button onClick={handleLogout}>Logout</button>;
}


function App() {
 

  return (
    
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:specialization" element={<DoctorsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ambulance" element={<AmbulanceServices />} />
        <Route path="/medical-services" element={<MedicalServices />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/news-articles" element={<NewsAndArticles />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/staff-availability" element={<StaffAvailability />} />
        <Route path="/emergency-staffing" element={<EmergencyStaffing />} />
        <Route path="/shift-management" element={<ShiftManagement />} />
        <Route path="/notifications1" element={<Notification1 />} />
        <Route path="/attendance-trends" element={<AttendanceTrends />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/timetable"  element={<TimeTable />} />
         {/* Admin Routes */}
      
      <Route path="/Adminpage/dashboard2" element={<AdminLayout><Dashboard2 /></AdminLayout>} />
      <Route path="/Adminpage/user-management" element={<AdminLayout><UserManagement /></AdminLayout>} />
      <Route path="/Adminpage/key-metrics" element={<AdminLayout><KeyMetrics /></AdminLayout>} />
      <Route path="/Adminpage/advanced" element={<AdminLayout><AdvancedAnalytics /></AdminLayout>} />
      <Route path="/Adminpage/notifications2" element={<AdminLayout><Notification2 /></AdminLayout>} />
      <Route path="/Adminpage/feedback" element={<AdminLayout><Feedback /></AdminLayout>} />
      <Route path="/Adminpage/policy-section" element={<AdminLayout><PolicySection /></AdminLayout>} />
      <Route path="/Adminpage/policy-section/:policyId" element={<AdminLayout><PolicyDetail /></AdminLayout>} />
      <Route path="/Adminpage/policy-section/add" element={<AdminLayout><AddPolicyForm /></AdminLayout>} />
      <Route path="/Adminpage/help-support" element={<AdminLayout><HelpSupport /></AdminLayout>} />
      </Routes> 
      
      </div>
    </Router>
   
    
   
    
  );
}

export default App; 
 

