import React, { useState, useEffect } from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";
import VisionMissionValues from "./VisionMissionValues";
import Footer from "./Footer";
//import LocationContent from "../LocationContent";
import "./styles.css"; // Adjust styles as needed.


const slides = [
  {
    title: "Welcome to The Vitality World of Lifecare",
    description:
      "Our team of over 10000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy, always.\nVitality Hospitals has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state-of-the-art facilities spread across several of the Vitality hospital locations, and each Centre of Excellence stands out as a citadel of world-class clinical outcomes.",
    image: "/assets/slide1.png",
  },
  {
    title: "Comprehensive Healthcare",
    description: "Providing 24/7 emergency and specialty care.",
    image: "/assets/slide2.jpg",
  },
  {
    title: "World-Class Facilities",
    description: "Dedicated to ensuring your health and well-being.",
    image: "/assets/slide3.jpg",
  },
];

const specializations = [
  "Cardiology",
  "Neurology",
  "Gastroenterology",
  "Pediatrics",
  "Endocrinology",
  "Orthopedics",
  "Oncology",
  "Gynecology",
  "Urology",
  "Pulmonology",
  "Dermatology",
  "Ophthalmology",
  "Rheumatology",
  "Neurosurgery",
  "Radiology",
  "Nephrology",
  "Plastic Surgery",
  "Neonatology",
  "Vascular Surgery",
  "Psychiatry",
];

const locations = [
  {
    name: "Chennai",
    icon: "/assets/chen.png",
    hospitalImage: "/assets/chennai.png",
    details: {
      heading: "Hospitals in Chennai",
      address: "5/639, Rajiv Gandhi Salai, Tirumalai Nagar, Perungudi, Chennai, Tamil Nadu 600096",
      phone: "+91 98765 43210",
      email: "chennai@vitalitygroup.com",
      mapUrl: "https://www.google.com/maps?q=123+Marina+Road,+Chennai,+Tamil+Nadu,600001", // Google map URL
    },
  },
  {
    name: "Madurai",
    icon: "/assets/madu.png",
    hospitalImage: "/assets/madurai.png",
    details: {
      heading: "Hospitals in Madurai",
      address: "80 Feet Rd, Deputy Collector Colony, KK Nagar, Madurai, Tamil Nadu 625020",
      phone: "+91 87654 32109",
      email: "madurai@vitalitygroup.com",
      mapUrl: "https://www.google.com/maps?q=45+Meenakshi+Street,+Madurai,+Tamil+Nadu,625001",
    },
  },
  {
    name: "Coimbatore",
    icon: "/assets/coim.png",
    hospitalImage: "/assets/coimbatore.png",
    details: {
      heading: "Hospitals in Coimbatore",
      address: "Tower 49, 1st KTS, 1, Sathy Rd, Athipalayam Pirivu, Ganapathy, Coimbatore, Tamil Nadu 641006",
      phone: "+91 76543 21098",
      email: "coimbatore@vitalitygroup.com",
      mapUrl: "https://www.google.com/maps?q=89+RS+Puram,+Coimbatore,+Tamil+Nadu,641001",
    },
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
   

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <Header />
      {/* Slideshow */}
      <Container>
        <div className="slideshow">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="slideshow-image"
          />
          <Box
            sx={{
              position: "absolute",
              left: "2%",
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              maxWidth: "50%",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {slides[currentSlide].title}
            </Typography>
            <Typography variant="body1">{slides[currentSlide].description}</Typography>
          </Box>
        </div>
      </Container>

      {/* Specializations Section */}
      <Container id="specializations" sx={{ marginTop: 5 }}>
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "'Poppins', sans-serif",  // Apply Poppins font
              fontWeight: 600,  // Bold weight
              color: "#0F6A6B",  // Custom color
            }}
          >
            Experience Commence Of Clinical Excellence
          </Typography>
        </Box>
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "'Poppins', sans-serif",  // Apply Poppins font
              fontWeight: 100,  // Bold weight
              color: "black",  // Custom color
            }}
          >
           Vitality Hospitals has dedicated Centres of Excellence for serveral key specialties
and super specialties. They are unique and state of the art facilities spread across
several of the Vitality hospital locations and each Centre of Excellence stands out
as a citadel of world class clinical outcomes.
          </Typography>
        </Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",  // Apply Poppins font
            fontWeight: 600,  // Bold weight
            color: "#0F6A6B",  // Custom color
          }}
        >
          Explore Our Specializations
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img
              src="/assets/spc.png"
              alt="Specializations"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={1}>
              {specializations.map((spec) => (
                <Grid item xs={3} key={spec}>
                  <Link to={`/doctors/${spec.toLowerCase()}`} className="specialization-icon">
                    <img
                      src={`/assets/${spec.toLowerCase()}.png`}
                      alt={spec}
                      style={{
                        width: "100%",
                        maxWidth: "90px",
                        height: "auto",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      

      {/* Hospital in TamilNadu Content */}
      <Container id="location" sx={{ marginTop: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign:"center",
            fontFamily: "'Poppins', sans-serif",  // Apply Poppins font
            fontWeight: 600,  // Bold weight
            color: "#0F6A6B",  // Custom color
          }}
        >
          Hospitals In TamilNadu
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",  // Apply Poppins font
            fontWeight: 200,  // Bold weight
            color: "black",  // Custom color
          }}
        >
          The Vitality Group is one of the best hospital groups in TamilNadu with over 8,000+ beds across 3+ hospitals, 6,000+ pharmacies, over 300+ clients, 800+ diagnostic centres, and 200+ Telemedicine units.
        </Typography>
      </Container>

      {/* Locations Section */}
      <Container sx={{ marginTop: 5 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",  // Apply Poppins font
            fontWeight: 600,  // Bold weight
            color: "#0F6A6B",  // Custom color
          }}
        >
          Locations
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          {locations.map((location) => (
            <Grid item xs={4} key={location.name}>
              <Box
                onClick={() => handleLocationClick(location)}
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  "& img": {
              border: "2px solid transparent", // Transparent border to avoid layout shifts
              borderRadius: "50%", // Ensure circular border (if your icons are circular)
              transition: "transform 0.3s ease, border-color 0.3s ease",
            },
            "& img:hover": {
              transform: "scale(1.2)", // Scale effect
              borderColor: "#0F6A6B", // Add hover border
            },
          }}
              >
                <img
                  src={location.icon}
                  alt={location.name}
                  style={{
                    width: "100%",
                    maxWidth: "90px",
                    height: "auto",
                    borderRadius: "10px",
                    
                  }}
                />
                <Typography variant="subtitle1" mt={1}>
                  {location.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Display Selected Location Details */}
       {/* Display Selected Location Details */}
{selectedLocation && (
  <Grid container spacing={3} sx={{ marginTop: 4 }} justifyContent="center">
    {/* Title Section */}
    <Grid item xs={12} textAlign="center">
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          color: "#0F6A6B",
        }}
      >
        {selectedLocation.details.heading}
      </Typography>
    </Grid>

    {/* Hospital Image Section */}
    <Grid item xs={12} textAlign="center">
      <Box
         sx={{
          border: "3px solid  #0F6A6B", // theme border
          borderRadius: "0px", // Sharp edges
          padding: "0", // No padding
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Keep shadow
          background: "transparent", // Remove gradient for simplicity
          display: "inline-block", // Ensures the box wraps tightly around the image
        }}
      >
        <img
          src={selectedLocation.hospitalImage}
          alt={selectedLocation.name}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "0px", // Sharp edges
          }}
        />
      </Box>
    </Grid>

    {/* Contact Details Section */}
    <Grid item xs={12} textAlign="center">
      <Box sx={{ marginTop: "20px" }}>
        <Box display="flex" alignItems="center" justifyContent="left" mb={1}>
          <img
            src="/assets/location.png"
            alt="Location"
            style={{ width: "25px", marginRight: "5px" }}
          />
          <Typography variant="body1">{selectedLocation.details.address}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="left" mb={1}>
          <img
            src="/assets/phone.png"
            alt="Phone"
            style={{ width: "20px", marginRight: "5px" }}
          />
          <Typography variant="body1">{selectedLocation.details.phone}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="left" mb={1}>
          <img
            src="/assets/mail.png"
            alt="Email"
            style={{ width: "20px", marginRight: "5px" }}
          />
          <Typography variant="body1">{selectedLocation.details.email}</Typography>
        </Box>

        {/* Know More Link */}
        <Box sx={{  marginTop: "20px", // Adjust spacing from above elements
    display: "flex", // Use flexbox for alignment
    justifyContent: "flex-end", // Align to the right
    marginBottom:"30px",
     }}>
          <Link
            to={selectedLocation.details.mapUrl}
            target="_blank"
            style={{
              backgroundColor: "#0F6A6B",
              padding: "8px 16px",
              borderRadius: "5px",
              color: "white",
              textDecoration: "none",
              
            }}
          >
            Know More
          </Link>
        </Box>
      </Box>
    </Grid>
  </Grid>
)}

      </Container>
       {/* Vision, Mission, and Values Section */}
       <VisionMissionValues />

{/* Footer Section */}
<Footer />
    </div>
  );
}

export default Home;
