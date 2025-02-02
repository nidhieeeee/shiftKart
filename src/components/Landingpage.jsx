import React from "react";
import "./Landingpage.css";
import Products from './Products'

function Landingpage({setProductData}){
return(
<div className="landingpage-container">
<Products category="jewelery" setProductData={setProductData} />
    <Products category="electronics" setProductData={setProductData} />
    <Products category="men's clothing" setProductData={setProductData} />
    <Products category="women's clothing" setProductData={setProductData} />


</div>

);
}
export default Landingpage;