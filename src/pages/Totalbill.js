import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MenuList } from './data/data';

function Backend() {
  const [tables, setTables] = useState([]);
  const [activeTable, setActiveTable] = useState(null);

  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    // Fetch the list of tables from the backend
    axios.get('http://localhost:8080/tables').then((response) => {
      setTables(response.data);
    });
  }, []);

  const addToCart = async (menu) => {
    setCart([...cart, menu]);
    setTotalBill(totalBill + menu.price);

    try {
      const response = await axios.post('http://localhost:8080/addOrder', {
        tableId: activeTable.id,
        menuId: menu._id,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding order:', error.message);
    }
  };

  const removeFromCart = async (index) => {
    const updatedCart = [...cart];
  
    // Ensure the index is within bounds before attempting to remove an item
    if (index >= 0 && index < updatedCart.length) {
      const removedItem = updatedCart.splice(index, 1)[0];
  
      // Check if removedItem is defined before updating the state
      if (removedItem) {
        setCart(updatedCart);
        setTotalBill(totalBill - removedItem.price);
  
        try {
          const response = await axios.post('http://localhost:8080/removeOrder', {
            tableId: activeTable.id,
            itemId: removedItem._id,
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error removing order:', error.message);
        }
      }
    }
    // Optionally, you can log an error or handle the case where the index is out of bounds
    else {
      console.error('Invalid index:', index);
    }
  };

  const switchTable = (table) => {
    setActiveTable(table);
    setCart([]);
    setTotalBill(0);
  };

  return (
    <div>
      <div>
        <h2>Tables</h2>
        <ul>
          {tables.map((table) => (
            <li key={table.id}>
              <button onClick={() => switchTable(table)}>Table {table.id}</button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu, index) => (
          <div key={index} style={{ border: '3px solid black', width: '400px', margin: '10px' }}>
            <ul>
              <li>
                <p>Image:</p>
                <img src={menu.image} alt={menu.name} style={{ height: '200px' }} />
              </li>
              <li>
                <p>Price: {menu.price}</p>
              </li>
              <li>
                <button style={{ height: '30px', marginRight: '10px' }} onClick={() => addToCart(menu)}>
                  Add to Cart
                </button>
                <button style={{ height: '30px' }} onClick={() => removeFromCart(index)}>
                  Remove from Cart
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2>Cart - Table {activeTable ? activeTable.id : 'N/A'}</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <p>Total Bill: {totalBill}</p>
      </div>
    </div>
  );
}

export default Backend;
