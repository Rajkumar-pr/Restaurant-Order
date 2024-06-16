import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../data/data";

const CategoryPage = () => {
  const { category } = useParams();

  // Filter MenuList based on the selected category
  const filteredMenuItems = MenuList.filter((menu) => menu.category === category);

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredMenuItems.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                {/* Add to Cart Button */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default CategoryPage;
