import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Import icons
import "./PolicyDetail.css";

const policyDetails = {
  1: {
    title: "Fairness and Equity Policy",
    content: [
      "Maximum Work Hours: Ensure no staff member works more than 40–48 hours a week, depending on their role.",
      "Staff Allocation: Staff allocation should be based on fairness, avoiding any form of discrimination.",
      "Equal Treatment: All employees should have equal access to opportunities and resources, regardless of their gender, race, or background."
    ],
  },
  2: {
    title: "Skill-Based Allocation Policy",
    content: [
      "Assign staff shifts based on specialization or qualifications.",
      "Preference should be given to staff with the required skills for specific tasks.",
      "Continuous skill development should be encouraged to enhance staff expertise and job satisfaction."
    ],
  },
  3: {
    title: "Priority and Preference Policy",
    content: [
      "Ensure that patient needs and priorities are the primary focus when allocating shifts.",
      "Allow staff to express their preferences for shifts, whenever possible, while balancing operational requirements.",
      "Prioritize staff availability during peak hours to ensure optimal patient care."
    ],
  },
  4: {
    title: "Peak Hour Coverage Policy",
    content: [
      "Implement a rotating shift system to ensure coverage during peak hours (e.g., early mornings, late evenings).",
      "Establish a policy for providing staff overtime compensation during peak hours.",
      "Ensure that essential services are available during all times, especially during high demand periods."
    ],
  },
  5: {
    title: "Compliance Policy",
    content: [
      "Ensure all shifts comply with labor laws and regulations regarding working hours, rest periods, and compensation.",
      "Regularly review compliance with industry standards and adjust policies accordingly.",
      "Maintain transparency in shift allocation and make sure all staff are aware of their rights."
    ],
  },
  6: {
    title: "Leave and Absence Policy",
    content: [
      "Establish clear guidelines for staff leave requests, including paid and unpaid leave.",
      "Ensure adequate staff coverage by having a flexible approach to shift swaps and temporary replacements.",
      "Encourage staff to use their annual leave to promote well-being while maintaining the operational flow."
    ],
  },
  7: {
    title: "Health and Well-Being Policy",
    content: [
      "Offer shift scheduling options that promote employee health, including flexibility and adequate rest periods.",
      "Provide support for employees experiencing stress or burnout, including access to counseling services.",
      "Encourage regular health screenings and provide incentives for a healthy lifestyle."
    ],
  },
  8: {
    title: "Staff-Patient Ratio Policy",
    content: [
      "Maintain a proper staff-to-patient ratio to ensure quality care and minimize burnout.",
      "Regularly monitor staffing levels to ensure that patients receive the attention they require without overwhelming staff.",
      "Adjust staffing based on patient volume and acuity, especially during high-demand times."
    ],
  },
  9: {
    title: "Automation and Flexibility Policy",
    content: [
      "Leverage automation tools to streamline administrative tasks, reducing staff workload.",
      "Offer flexible scheduling options to accommodate the diverse needs of the workforce.",
      "Use technology to assist in shift management, ensuring that all shifts are filled efficiently and fairly."
    ],
  },
  10: {
    title: "Shift Swap Policy",
    content: [
      "Allow staff to swap shifts, provided that the swap is approved by management and staffing needs are met.",
      "Ensure transparency in the swap process, allowing all staff to see available shifts and request changes.",
      "Maintain a record of shift swaps for operational tracking and accountability."
    ],
  },
  11: {
    title: "Emergency Preparedness Policy",
    content: [
      "Ensure that staff are trained and equipped to handle emergencies (e.g., natural disasters, medical crises).",
      "Create contingency plans to address unexpected events or staff shortages during emergencies.",
      "Encourage regular drills to maintain preparedness and familiarity with emergency protocols."
    ],
  },
  12: {
    title: "Salary and Incentives Policy",
    content: [
      "Ensure that salary and benefits are competitive with industry standards and fairly distributed across roles.",
      "Offer performance-based incentives to motivate staff and recognize their contributions.",
      "Review compensation policies regularly to ensure they remain aligned with organizational goals and financial constraints."
    ],
  },
};

const PolicyDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const policyId = parseInt(location.pathname.split("/")[3]); // Extract policyId from the URL path

  const policy = policyDetails[policyId];

  if (!policy) {
    return <div>No policy selected</div>;
  }

  return (
    <div className="policy-detail">
      <Button onClick={() => navigate(-1)} icon={<ArrowLeftOutlined />} className="back-btn">
        Back
      </Button>
      <div className="policy-header">
        <InfoCircleOutlined className="policy-icon" />
        <h1>{policy.title}</h1>
      </div>
      <div className="policy-content">
        {policy.content.map((point, index) => (
          <div key={index} className="policy-point">
            <li>{point}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyDetail;