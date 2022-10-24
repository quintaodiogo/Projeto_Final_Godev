import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Cadastro from './Pages/Cadastro/cadastro';
import Login from './Pages/Login/Login';
import Navbar from './Components/navbar';
import Menu from './Components/Menu/hamburguermenu';
import Slideshow from './Components/Slidershow/slidershow';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Carrinho/cart';
import Amazon from './Components/amazon';
import Acessorios from './Components/Acessórios/acessorios';
import Clothes from './Components/Roupas/clothes';
function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<>
          <Navbar handleClick={handleClick} setShow={setShow} size={cart.length} />
          <Menu setShow={setShow} size={cart.length} handleChange={handleChange} />
          {show ? <Slideshow handleClick={handleClick} /> : <a />}
          {show ? (
            <Amazon handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
          <Footer />
        </>
        } />
        <Route path='/roupas' element={<>
          <Navbar handleClick={handleClick} setShow={setShow} size={cart.length} />
          <Menu setShow={setShow} size={cart.length} handleChange={handleChange} />
          {show ? (
            <Clothes handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
          <Footer />
        </>} />
        <Route path='/acessorios' element={<>
          <Navbar handleClick={handleClick} setShow={setShow} size={cart.length} />
          <Menu setShow={setShow} size={cart.length} handleChange={handleChange} />
          {show ? (
            <Acessorios handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
          <Footer />
        </>} />
        <Route path='/cadastro' element={<>
          <Navbar handleClick={handleClick} setShow={setShow} size={cart.length} />
          <Menu setShow={setShow} size={cart.length} handleChange={handleChange} />
          {show ? (
            <Cadastro handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
          <Footer />
        </>} />
        <Route path='/login' element={<>
          <Navbar handleClick={handleClick} setShow={setShow} size={cart.length} />
          <Menu setShow={setShow} size={cart.length} handleChange={handleChange} />
          {show ? (
            <Login handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
