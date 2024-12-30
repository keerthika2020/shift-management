import React, { useState , useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Dashboard from './components/hodpage/Dashboard';  
import StaffAvailability from './components/hodpage/StaffAvailability';  // Import StaffAvailability component
import ShiftManagement from './components/hodpage/ShiftManagement';  // Import ShiftManagement component
import Notification from './components/hodpage/Notification';  // Import Notification component
import AttendanceTrends from './components/hodpage/AttendanceTrends';  // Import AttendanceTrends component
import ProfileSettings from './components/hodpage/ProfileSettings';  // Import ProfileSettings component
import TimeTable from './components/hodpage/TimeTable';  // Import TimeTable component
import  EmergencyStaffing from './components/hodpage/EmergencyStaffing';
 // Import EmergencyStaffing component

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff-availability" element={<StaffAvailability />} />
        <Route path="/emergency-staffing" element={<EmergencyStaffing />} />
        <Route path="/shift-management" element={<ShiftManagement />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/attendance-trends" element={<AttendanceTrends />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/timetable"  element={<TimeTable />} />
      </Routes> 
      
      </div>
    </Router>
   
    
   
    
  );
}

export default App; 
 
