import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./hodpagestyles/hodprofilesettings.css";

const ProfileSettings = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
  const [role, setRole] = useState("admin");
  const [showPopup, setShowPopup] = useState(false);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container_hodprofilesettings">
      <Sidebar />
      <div className="content_hodprofilesettings">
        <h1 className="header_hodprofilesettings">PROFILE SETTINGS</h1>

        {/* Profile Picture */}
        <div className="profilePicContainer_hodprofilesettings">
          <img
            src={profilePic}
            alt="Profile"
            className="profilePic_hodprofilesettings"
            onClick={() => setShowPopup(true)}
          />
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="pencilIcon_hodprofilesettings"
            onClick={() => document.getElementById("profile-pic-input").click()}
          />
          <input
            type="file"
            id="profile-pic-input"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfilePicChange}
          />
        </div>

        {/* Profile Picture Popup */}
        {showPopup && (
          <>
            <div className="overlay_hodprofilesettings" onClick={() => setShowPopup(false)} />
            <div className="popup_hodprofilesettings">
              <img
                src={profilePic}
                alt="Profile Large"
                className="popupImage_hodprofilesettings"
              />
              <button
                onClick={() => setShowPopup(false)}
                className="closeBtn_hodprofilesettings"
              >
                Close
              </button>
            </div>
          </>
        )}

        {/* Profile Form */}
        <form className="form_hodprofilesettings">
          <h4 className="sectionHeader_hodprofilesettings">PERSONAL INFORMATION</h4>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">First Name</label>
            <input type="text" className="input_hodprofilesettings" placeholder="Enter your first name" />
          </div>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Last Name</label>
            <input type="text" className="input_hodprofilesettings" placeholder="Enter your last name" />
          </div>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Email</label>
            <input type="email" className="input_hodprofilesettings" placeholder="Enter your email" />
          </div>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Phone Number</label>
            <input type="text" className="input_hodprofilesettings" placeholder="Enter your phone number" />
          </div>

          <h4 className="sectionHeader_hodprofilesettings">ACCOUNT INFORMATION</h4>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Username</label>
            <input type="text" className="input_hodprofilesettings" placeholder="Enter your username" />
          </div>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Role</label>
            <select
              className="select_hodprofilesettings"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="management">Management</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          <h4 className="sectionHeader_hodprofilesettings">CHANGE PASSWORD</h4>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Old Password</label>
            <input
              type="password"
              className="input_hodprofilesettings"
              placeholder="Enter old password"
            />
          </div>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">New Password</label>
            <input
              type="password"
              className="input_hodprofilesettings"
              placeholder="Enter new password"
            />
          </div>
          <div className="inputGroup_hodprofilesettings">
            <label className="label_hodprofilesettings">Confirm Password</label>
            <input
              type="password"
              className="input_hodprofilesettings"
              placeholder="Confirm new password"
            />
          </div>

          <button type="button" className="saveBtn_hodprofilesettings">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
