
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Row, Col, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faStethoscope,
  faClock,
  faChartBar,
  faHeart,
  faPeopleArrows,
  faRobot,
  faUsers,
  faNotesMedical,
  faUserMd,
  faFileContract,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./PolicySection.css";

const policies = [
  { id: 1, title: "Fairness and Equity Policy", icon: faBalanceScale },
  { id: 2, title: "Skill-Based Allocation Policy", icon: faStethoscope },
  { id: 3, title: "Priority and Preference Policy", icon: faNotesMedical },
  { id: 4, title: "Peak Hour Coverage Policy", icon: faClock },
  { id: 5, title: "Compliance Policy", icon: faFileContract },
  { id: 6, title: "Leave and Absence Policy", icon: faUserMd },
  { id: 7, title: "Health and Well-Being Policy", icon: faHeart },
  { id: 8, title: "Staff-Patient Ratio Policy", icon: faUsers },
  { id: 9, title: "Automation and Flexibility Policy", icon: faRobot },
  { id: 10, title: "Shift Swap Policy", icon: faExchangeAlt },
  { id: 11, title: "Emergency Preparedness Policy", icon: faPeopleArrows },
  { id: 12, title: "Salary and Incentives Policy", icon: faChartBar },
];

const PolicySection = () => {
  const navigate = useNavigate();

  const handleCardClick = (policyId) => {
    navigate(`/adminpage/policy-section/${policyId}`);
  };

  return (
    <div className="policy-section">
      <h1 className="title">Policy Management</h1>
      
      {/* Button to navigate to Add New Policy page */}
      <Link to="/adminpage/policy-section/add">
        <Button type="primary" className="add-policy-button">Add New Policy</Button>
      </Link>

      {/* Displaying the list of policies */}
      <Row gutter={[16, 16]} className="policy-cards">
        {policies.map((policy) => (
          <Col span={8} key={policy.id}>
            <Card
              hoverable
              className="policy-card"
              onClick={() => handleCardClick(policy.id)} // Pass policy ID directly
            >
              <div className="card-content">
                <FontAwesomeIcon icon={policy.icon} size="3x" />
                <h3>{policy.title}</h3>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PolicySection;
