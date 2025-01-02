import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

function DoctorsList() {
  const { department } = useParams(); // Get department from URL
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:8082/api/doctors/${department}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming JWT token is stored in localStorage
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Doctors:", data); // Log data to verify if it's being fetched correctly
          setDoctors(data); // Store fetched doctors in state
        } else {
          console.error("Failed to fetch doctor data");
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [department]);

  if (loading) {
    return <Typography variant="h6" style={{ color: "#fff", textAlign: "center" }}>Loading...</Typography>;
  }

  return (
    <div style={{ padding: "20px", background: "#0F6A6B" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
         {department.charAt(0).toUpperCase() + department.slice(1).toLowerCase()} {/* Capitalize department name */}
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
              {/* Use profile picture from API */}
              <CardMedia
                component="img"
                alt={`${doctor.firstName} ${doctor.lastName}`}
                height="300"
                image={`http://localhost:8082${doctor.profilePicture}`}
                // Use profilePicture URL
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {doctor.firstName} {doctor.lastName}
                </Typography>
                <Typography style={{ color: "#555" }}>
                  {doctor.designation}
                </Typography>
                <Typography style={{ color: "#777", marginBottom: "15px" }}>
                  {doctor.yearsOfExperience} years of experience
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DoctorsList;
