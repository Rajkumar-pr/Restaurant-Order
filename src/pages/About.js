import React from "react";
import Layout from "../component/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to our culinary haven, a dining destination like no other – My Restaurant. Nestled in the heart of [Your City], we take pride in offering a gastronomic journey that transcends ordinary dining. Our restaurant is a celebration of flavors, a symphony of tastes that caters to the diverse palates of our cherished guests.

At My Restaurant, our culinary philosophy is rooted in the belief that every meal should be an unforgettable experience. Our menu is a carefully curated ensemble of dishes, a vibrant tapestry of flavors that reflects the richness and diversity of global cuisine. From the sizzling streets of Asia to the comforting classics of Europe, our chefs draw inspiration from around the world to create a menu that promises a delightful adventure for your taste buds.

Step into our inviting ambiance, where the warm hues and contemporary design set the stage for a memorable dining experience. Whether you're seeking a romantic evening for two, a lively gathering with friends, or a family celebration, our restaurant provides the perfect backdrop for every occasion. Immerse yourself in the cozy atmosphere as the aroma of our expertly crafted dishes wafts through the air, creating a sensory symphony that beckons you to indulge.
orld of flavors within the welcoming confines of My Restaurant. We look forward to serving you an exquisite array of dishes that not only satisfy your cravings but also create lasting memories of culinary bliss. Welcome to My Restaurant – where every meal is a celebration of taste, tradition, and togetherness.






        </p>
        <br />
       
      </Box>
    </Layout>
  );
};

export default About;