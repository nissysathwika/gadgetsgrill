import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './comp/nav';
import Rout from './comp/rout'; // Main component for Home
import Footer from './comp/footer';
import Homeproduct from './comp/home_product'; // Assuming this contains product data
import Shop from './comp/shop'; // Import Shop component
import Cart from './comp/cart'; // Import Cart component
import Contact from './comp/contact'; // Import Contact component
import Offers from './comp/offers';
import About from './comp/about';
const App = () => {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState('');

  const Filter = (category) => {
    const filteredProducts = Homeproduct.filter(product => product.cat === category);
    setShop(filteredProducts);
  };

  const allcatefilter = () => {
    console.log("Showing all products"); // Debugging log
    setShop(Homeproduct);
  };

  const searchlength = (search || []).length === 0;
  const searchproduct = () => {
    if (searchlength) {
      alert("Please Search Something !");
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => x.cat === search);
      setShop(searchfilter);
    }
  };

  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To cart");
    }
  };

  return (
    <BrowserRouter>
      <Nav 
        search={search} 
        setSearch={setSearch} 
        searchproduct={searchproduct} 
        allcatefilter={allcatefilter} // Ensure this is passed
      />
      <Routes>
        <Route path="/" element={<Rout setCart={setCart} cart={cart} shop={shop} addtocart={addtocart} />} />
        <Route path="/All-offers" element={<Offers cart={cart} setCart={setCart}/>} />
        <Route path="/shop" element={<Shop shop={shop} addtocart={addtocart} Filter={Filter} allcatefilter={allcatefilter} />} /> {/* Pass Filter here */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
