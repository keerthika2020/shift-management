import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPolicyForm = () => {
  const navigate = useNavigate();
  
  // Define state to store form data
  const [policyData, setPolicyData] = useState({
    title: '',
    description: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicyData({
      ...policyData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make an API request to add the policy (assuming you have a backend API)
    try {
      const response = await fetch('/api/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(policyData),
      });

      if (response.ok) {
        // Redirect to policy section or another page after success
        navigate('/adminpage/policy-section');
      } else {
        console.error('Failed to add policy');
      }
    } catch (error) {
      console.error('Error adding policy:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f7fa' }}>
  <div style={{ width: '600px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginLeft: '300px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add New Policy</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>Policy Title</label>
        <input type="text" id="title" name="title" value={policyData.title} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.3s ease' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="description" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>Policy Description</label>
        <textarea id="description" name="description" value={policyData.description} onChange={handleChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.3s ease', minHeight: '150px', resize: 'vertical' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', transition: 'background-color 0.3s ease' }}>Add Policy</button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AddPolicyForm;
