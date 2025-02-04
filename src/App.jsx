import Navbar from './components/Navbar'
import './App.css'
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Signin from './components/Singin';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Cart from './components/Cart';
function App() {
const [productData , setProductData] = useState([]);

  useEffect(
    ()=>{
      console.log("Product Data :", productData );
    }, [productData]
  )
  return (
    <div className='main'>
       <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage setProductData={setProductData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart data={productData} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
