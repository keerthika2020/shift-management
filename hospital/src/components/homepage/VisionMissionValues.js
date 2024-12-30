import React from "react";
import "./styles.css"; // Make sure your styles are updated as well

const VisionMissionValues = () => {
  return (
    <div className="vision-mission-values" id="vision">
      {/* Title Section */}
      <h2 className="section-title">Our Vision, Mission, and Values</h2>

      {/* Content Container */}
      <div className="content-container">
        {/* Vision Section */}
        <div className="content-item">
          <div className="content-image">
            <img src="/assets/vision.png" alt="Vision"  style={{ width: "100px", height: "auto", margin: "0 auto" }}/>
          </div>
          <h3 className="content-heading">Our Vision</h3>
          <p className="content-text">
            To revolutionize healthcare by integrating cutting-edge technology to provide personalized and accessible medical services to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="content-item" id="mission">
          <div className="content-image">
            <img src="/assets/mission.png" alt="Mission"  style={{ width: "100px", height: "auto", margin: "0 auto" }} />
          </div>
          <h3 className="content-heading">Our Mission</h3>
          <p className="content-text">
            To ensure every individual has access to world-class healthcare facilities through seamless service delivery and continuous improvement.
          </p>
        </div>

        {/* Values Section */}
        <div className="content-item" id="value">
          <div className="content-image">
            <img src="/assets/value.png" alt="Values"  style={{ width: "100px", height: "auto", margin: "0 auto" }} />
          </div>
          <h3 className="content-heading">Our Values</h3>
          <p className="content-text">
            We believe in compassion, innovation, and integrity. These values guide our commitment to delivering exceptional healthcare experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
