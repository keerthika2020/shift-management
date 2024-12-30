import React from "react";
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const articles = [
  {
    image: "/assets/news/trauma.png",
    date: "March 18 - 2024",
    title: "Trauma and Emergency Network Training Programme",
    content:
      "Vitality Lifecare’s Trauma and Emergency Network Training Programme catered to duty medical officers and emergency medical officers, providing comprehensive training in basic emergency procedures. Participants were equipped with essential skills to handle emergencies effectively.",
    link: "#",
  },
  {
    image: "/assets/news/womensday.jpeg",
    date: "March 09 - 2024",
    title: "World Women's Day",
    content:
      "Vitality Lifecare celebrated Women’s Day with joy and vibrancy. Our wonderful women embraced the spirit of unity and empowerment through meaningful activities like planting plants, symbolizing growth and environmental care.",
    link: "#",
  },
  {
    image: "/assets/news/inauguration.jpg",
    date: "March 05 - 2024",
    title: "Inauguration of New B Block 3rd Floor",
    content:
      "A grand celebration as Vitality Lifecare inaugurated the new B Block 3rd Floor. This milestone reflects our commitment to elevating patient care to the next level. Our MD & CEO, along with their family, graced this joyous occasion.",
    link: "#",
  },
  {
    image: "/assets/news/cme.jpg",
    date: "February 25 - 2024",
    title: "Ortho CME",
    content:
      "The Ortho CME Programme at Vitality Lifecare provided valuable insights into the evolving field of orthopedics. Experts shared cutting-edge treatments and trends, enhancing the knowledge base of healthcare professionals.",
    link: "#",
  },
  {
    image: "/assets/news/republic.jpeg",
    date: "January 26 - 2024",
    title: "Republic Day Celebration",
    content:
      "Vitality Lifecare celebrated Republic Day with pride, fostering a sense of unity and patriotism among our staff and community. The flag-hoisting ceremony highlighted our commitment to our nation's rich heritage.",
    link: "#",
  },
];

const NewsAndArticles = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: "20px", backgroundColor: "#fafafa" }}>
        <Typography variant="h4" align="center" gutterBottom>
          News & Articles
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ borderRadius: "8px", boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    {article.date}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={article.link}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default NewsAndArticles;
