import React, { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import Layout from "../component/Layout/Layout";

const CartPage = () => {
  const { cartItems, tot, tab } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/tato', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tableNumber: tab,
            totalBill: tot,
            cartobject: cartItems
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Handle the response here if needed
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately
      }
    };
    
    fetchData();
  }, [cartItems, tab, tot]);  // Added missing dependencies

  return (
    <Layout>
      <div>
        <h2>Cart Items on Cart Page items:</h2>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((car) => (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>
                    <img src={car.image} style={{ height: '30px', width: '30px' }} alt='imaged' />
                  </td>
                  <td>{car.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        total bill: {tot}
        <br />
        <Link to='/table'>
          <button>
            load to table
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default CartPage;
