import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import Header from "./Header";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import NotificationCard from "./NotificationCard";
import axios from 'axios';
import './homeregister.css'; // Import the CSS file

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    staffId: "",
    designation: "",
    department: "",
    roleOfAccess: "",
    dateOfJoining: "",
    username: "",
    password: "",
    permanentAddress: "",
    temporaryAddress: "",
    emergencyContactName: "",
    emergencyRelationship: "",
    emergencyContactPhone: "",
    profilePicture: "",
    idProof: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    medicalConditions: "",
  });

  const [notification, setNotification] = useState({
    message: "",
    type: "", 
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false); // This will hide the notification card
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/register", formData); // Send data to backend
        setNotification({ message: response.data.message, type: "success" });
        setFormData({}); // Reset form
        setTimeout(() => {
            navigate("/"); // Redirect after successful registration
        }, 3000);
    } catch (err) {
        setNotification({
            message: err.response?.data?.message || "Error registering user",
            type: "error",
        });
    }
};

  return (
    <div>
      <Header />
      <div>
        {showNotification && notification.message && (
          <NotificationCard
            message={notification.message}
            type={notification.type}
            onClose={handleClose}
          />
        )}
      </div>

      <div className="container_homeregister">
        <div className="form-container_homeregister">
          <h1 className="title_homeregister">User Registration</h1>
          {errorMessage && (
            <div className="error-message_homeregister">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">1. Personal Information</h2>
              <div className="form-group_homeregister">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="date_of_birth">Date of Birth</label>
                <input type="date" id="date_of_birth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="text" id="phone_number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            {/* Professional Information */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">2. Professional Information</h2>
              <div className="form-group_homeregister">
                <label htmlFor="staff_id">Staff ID</label>
                <input type="text" id="staff_id" name="staffId" value={formData.staffId} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="department">Department</label>
                <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="roleOfAccesss">Role</label>
                <select id="roleOfAccesss" name="roleOfAccesss" value={formData.roleOfAccess}
                  onChange={handleChange}
                  required>
                  <option value="">Select Role of Access</option>
                  <option value="Admin">Admin</option>
                  <option value="Management">Management</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="date_of_joining">Date of Joining</label>
                <input type="date" id="date_of_joining" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
              </div>
            </div>

            {/* Credentials */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">3. Credentials</h2>
              <div className="form-group_homeregister">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="password">Password</label>
                <div className="password-input_homeregister">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="password-toggle_homeregister"
                    onClick={handlePasswordVisibility}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">4. Address Details</h2>
              <div className="form-group_homeregister">
                <label htmlFor="permanent_address">Permanent Address</label>
                <textarea id="permanent_address" name="permanentAddress" rows="3" value={formData.permanentAddress} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="temporary_address">Temporary Address</label>
                <textarea id="temporary_address" name="temporaryAddress" rows="3" value={formData.temporaryAddress} onChange={handleChange} required></textarea>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">5. Emergency Contact</h2>
              <div className="form-group_homeregister">
                <label htmlFor="emergency_contact_name">Emergency Contact Name</label>
                <input type="text" id="emergency_contact_name" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="emergency_relationship">Relationship</label>
                <input type="text" id="emergency_relationship" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} required />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="emergency_contact_phone">Emergency Contact Phone</label>
                <input type="text" id="emergency_contact_phone" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} required />
              </div>
            </div>

            {/* Additional Information */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">6. Additional Information</h2>
              <div className="form-group_homeregister">
                <label htmlFor="profile_picture">Profile Picture</label>
                <input type="file" id="profile_picture" name="profilePicture" onChange={handleChange} />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="id_proof">Identification Proof</label>
                <input type="file" id="id_proof" name="idProof" onChange={handleChange} />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="bank_name">Bank Name</label>
                <input type="text" id="bank_name" name="bankName" value={formData.bankName} onChange={handleChange} />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="account_number">Account Number</label>
                <input type="text" id="account_number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
              </div>
              <div className="form-group_homeregister">
                <label htmlFor="ifsc_code">IFSC Code</label>
                <input type="text" id="ifsc_code" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
              </div>
            </div>

            {/* Medical Conditions */}
            <div className="form-section_homeregister">
              <h2 className="section-title_homeregister">7. Medical Conditions</h2>
              <div className="form-group_homeregister">
                <label htmlFor="medical_conditions">Medical Conditions</label>
                <textarea id="medical_conditions" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="submit-button_homeregister">Register</button>
          </form>
          {/* Sign Up Link */}
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already having an acount? <Link to="/login" style={{ color: "#0F6A6B" }}>Login </Link>
        </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
