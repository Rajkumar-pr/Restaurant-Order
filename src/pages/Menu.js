import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, TextField, Button } from "@mui/material";
import Slider from "react-slick";
import { MenuList } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handler to update search term state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the menu items based on the search term
  const filteredMenu = MenuList.filter((menu) =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter unique categories
  const uniqueCategories = [...new Set(MenuList.map(menu => menu.category))];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 ,marginTop:'35px'}}>
        {/* Search input field */}
        <TextField
          label="Search for a dish..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mb: 4, width: "50%" }}
        />
      </Box>
      <Box sx={{ maxWidth: "1200px", margin: "auto", mb: 4 }}>
        <Slider {...sliderSettings}>
          {uniqueCategories.map((category) => (
            <div key={category} style={{ textAlign: "center", padding: "10px" }}>
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: `url(${MenuList.find(menu => menu.category === category).image}) no-repeat center center`,
                  backgroundSize: "cover",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  border: "3px solid #fff"
                }}
                onClick={() => navigate(`/category/${category}`)}
              >
                <Typography variant="h6" sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: "50%", padding: "10px" }}>
                  {category}
                </Typography>
              </div>
            </div>
          ))}
        </Slider>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Render filtered menu items */}
        {filteredMenu.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: "300px", m: 2, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <CardActionArea>
              <CardMedia
                sx={{ height: "200px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}

              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {menu.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {menu.rating}
                </Typography>
                {/* Add to Cart Button */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="contained" color="primary" onClick={() => navigate("/table")}>
          Add table no.
        </Button>
      </Box>
    </Layout>
  );
};

export default Menu;

