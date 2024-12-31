import React, { useState } from "react";

function UserManagement() {
  // Sample data for pending requests and registered users
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: "Alice", email: "alice@gmail.com" },
    { id: 2, name: "Hasi", email: "hasi@gmail.com" },
    { id: 3, name: "Rian", email: "rian@gmail.com" },
  ]);

  const [registeredUsers, setRegisteredUsers] = useState([
    {
      id: 1,
      name: "Bob Brown",
      email: "bobbrown@gmail.com",
      domain: "Healthcare",
      contact: "987-654-3210",
      address: "456, oak st, city, country",
      image: "https://via.placeholder.com/80", // Image URL
    },
    {
      id: 2,
      name: "Charlie Davis",
      email: "charliedavis@gmail.com",
      domain: "Technology",
      contact: "555-123-4567",
      address: "789, pine st, city, country",
      image: "https://via.placeholder.com/80", // Image URL
    },
  ]);

  const [editingUser, setEditingUser] = useState(null); // Track the user being edited
  const [editedUserData, setEditedUserData] = useState({});

  // Handle input changes for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Approve a request
  const approveRequest = (id) => {
    const userToApprove = pendingRequests.find((request) => request.id === id);
    setRegisteredUsers([
      ...registeredUsers,
      { ...userToApprove, domain: "", contact: "", address: "" },
    ]);
    setPendingRequests(pendingRequests.filter((request) => request.id !== id));
  };

  // Reject a request
  const rejectRequest = (id) => {
    setPendingRequests(pendingRequests.filter((request) => request.id !== id));
  };

  // Delete a user
  const deleteUser = (id) => {
    setRegisteredUsers(registeredUsers.filter((user) => user.id !== id));
  };

  // Edit user
  const editUser = (user) => {
    setEditingUser(user.id); // Set the user being edited
    setEditedUserData(user); // Pre-populate the form with user data
  };

  // Save edited user data
  const saveUserData = () => {
    const updatedUsers = registeredUsers.map((user) =>
      user.id === editingUser ? { ...user, ...editedUserData } : user
    );
    setRegisteredUsers(updatedUsers);
    setEditingUser(null); // Exit edit mode
  };

  return (
    <div style={{ display: "flex", gap: "30px", padding: "30px", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar (Placeholder for actual sidebar component) */}
      <div style={{ width: "250px", backgroundColor: "#f8f8f8", padding: "20px", borderRadius: "8px" }}>
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          style={{ width: "100%", borderRadius: "50%", marginBottom: "20px" }}
        />
        <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#333" }}>Hello, Keerthi</h3>
        <p style={{ color: "#777", marginBottom: "20px" }}>Admin</p>
        {/* Sidebar navigation (This should be your actual Sidebar) */}
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500", color: "#333" }}>Dashboard</li>
          <li style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500", color: "#333" }}>User Management</li>
          <li style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500", color: "#333" }}>Analytics</li>
          <li style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500", color: "#333" }}>Settings</li>
        </ul>
      </div>

      {/* Main content area */}
      <div style={{ flex: "1", backgroundColor: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ fontSize: "30px", fontWeight: "700", color: "#333", marginBottom: "20px" }}>User Management</h1>

        <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#444", marginBottom: "20px" }}>Pending Requests</h2>
        <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
          {pendingRequests.map((request) => (
            <div
              key={request.id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "8px",
                width: "200px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src="https://via.placeholder.com/80"
                alt={request.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <p style={{ fontSize: "18px", fontWeight: "600", color: "#333" }}>{request.name}</p>
              <p style={{ color: "#777" }}>{request.email}</p>
              <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={() => approveRequest(request.id)}
                >
                  Approve
                </button>
                <button
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={() => rejectRequest(request.id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#444", marginBottom: "20px" }}>Registered Users</h2>
        <table
          border="1"
          style={{
            width: "100%",
            textAlign: "left",
            borderCollapse: "collapse",
            marginBottom: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#f5f5f5" }}>
            <tr>
              <th style={{ padding: "10px", fontSize: "16px", fontWeight: "600", color: "#333" }}>Name</th>
              <th style={{ padding: "10px", fontSize: "16px", fontWeight: "600", color: "#333" }}>Email</th>
              <th style={{ padding: "10px", fontSize: "16px", fontWeight: "600", color: "#333" }}>Domain</th>
              <th style={{ padding: "10px", fontSize: "16px", fontWeight: "600", color: "#333" }}>Contact</th>
              <th style={{ padding: "10px", fontSize: "16px", fontWeight: "600", color: "#333" }}>Address</th>
              <th style={{ padding: "10px", fontSize: "16px", fontWeight: "600", color: "#333" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: "10px" }}>
                  <img
                    src={user.image}
                    alt={user.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {user.name}
                </td>
                <td style={{ padding: "10px" }}>{user.email}</td>
                <td style={{ padding: "10px" }}>{user.domain}</td>
                <td style={{ padding: "10px" }}>{user.contact}</td>
                <td style={{ padding: "10px" }}>{user.address}</td>
                <td style={{ padding: "10px", display: "flex", justifyContent: "center", gap: "10px" }}>
                  <button
                    style={{
                      backgroundColor: "#2196F3",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => editUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingUser && (
          <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <h3>Edit User</h3>
            <form>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={editedUserData.name || ""}
                onChange={handleInputChange}
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <br />
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={editedUserData.email || ""}
                onChange={handleInputChange}
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <br />
              <label>Domain: </label>
              <input
                type="text"
                name="domain"
                value={editedUserData.domain || ""}
                onChange={handleInputChange}
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <br />
              <label>Contact: </label>
              <input
                type="text"
                name="contact"
                value={editedUserData.contact || ""}
                onChange={handleInputChange}
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <br />
              <label>Address: </label>
              <textarea
                name="address"
                value={editedUserData.address || ""}
                onChange={handleInputChange}
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <br />
              <button
                type="button"
                onClick={saveUserData}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Save
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserManagement;