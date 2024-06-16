import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Back from "./pages/Back";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
// client/src/App.js
import Table from "./pages/Table";
import Pagenotfound from "./pages/Pagenotfound";
import UserContextProvider from "./UserContextProvider";
function App() {
  return (
    <div>
      <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/back" element={<Back />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<CartPage />} />
         <Route path="/table" element={<Table/>}/>
         <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;