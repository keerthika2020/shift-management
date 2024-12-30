import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, TextField, Box, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css"; // Adjust styles as needed.

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#0F6A6B",
});

const Logo = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  marginLeft: "10px", // Adds space between the logo and text
});

const LogoImage = styled("img")({
  height: "90px", // Adjust the height of the logo
  width: "auto",
  marginRight: "10px", // Adds space between the logo and the text
});

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search and scroll to section
  const handleSearch = () => {
    if (searchQuery) {
      const section = document.getElementById(searchQuery.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <StyledAppBar position="static" className="header-container">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          {/* Add the logo image */}
          <LogoImage src="/assets/smartshiftlogo.png" alt="Logo" />
          <Logo>The Vitality World of Lifecare</Logo>
        </Box>
        <TextField
          className="header-search-bar"
          variant="outlined"
          placeholder="Search..."
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            marginRight: "20px",
            borderRadius: "20px", // Makes the edges curvy
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px", // Ensures the border radius is applied
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleSearch} sx={{ cursor: "pointer" }}>
                <SearchIcon sx={{ color: "#0F6A6B" }} /> {/* Search icon styling */}
              </InputAdornment>
            ),
          }}
        />
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{
            color: "#fff",
            "&:hover": {
              backgroundColor: "#054D4F", // Darker shade of #0F6A6B for hover effect
              color: "#fff", // Change text color to white on hover
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Add pop-up shadow effect
            },
            transition: "all 0.3s ease", // Smooth transition for hover effect
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/register"
          sx={{
            color: "#fff",
            "&:hover": {
              backgroundColor: "#054D4F", // Darker shade of #0F6A6B for hover effect
              color: "#fff", // Change text color to white on hover
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Add pop-up shadow effect
            },
            transition: "all 0.3s ease", // Smooth transition for hover effect
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
