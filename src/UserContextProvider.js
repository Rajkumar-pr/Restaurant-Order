import React,{useState} from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
    const [cartItems,setCartItems]=useState([{}]);
    const [tot,setTot]=useState(0);
    const [tab,setTab]=useState(0);
  return (
    <div>
      <UserContext.Provider value={{cartItems,setCartItems,tot,setTot,tab,setTab}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider
