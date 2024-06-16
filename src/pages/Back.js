

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../data/data";
import UserContext from "../UserContext";

const Menu = () => {
  const { cartItems, setCartItems, tot, tab, setTot } = useContext(UserContext);

  const addToCart = (menu) => {
    setTot((tot) => tot + menu.price);
    setCartItems([...cartItems, menu]);
  };

  useEffect(() => {
    setCartItems([]);
    setTot(0);
  }, [setCartItems, setTot, tab]);  // Added missing dependencies

  const logy = () => { alert("first login the age") };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Render Menu Items */}
        {MenuList.map((menu) => (
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
                <button style={{ backgroundColor: 'blue', marginTop: '20px' }} onClick={() => addToCart(menu)}>Add To Cart</button>
                <br />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {tot}
      {tab}
      {/* Render Cart Component */}
      <Link to='/cart'>
        <button onClick={logy}>
          View Total Cart
        </button>
      </Link>
    </Layout>
  );
};

export default Menu;
