import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Cart.css";
function Cart({ data }) {
    const [cart , setCart] = useState([]);
function fetchProducts(data){
    

    Promise.all(data.map((item)=>
        //see here  okay idhar humne promise.all lagaya and fetch kar ke only collect kiya
        axios.get(`https://fakestoreapi.com/products/${item.id}`).then((response)=> response.data))
    )
    .then((products)=> setCart(products))  // this will be executed only after all the api calls are done ohhhhhhh
    .catch((err)=> console.log(err)); //we did setCart only once here otherwise pehle hum fetch karte aur turant hi update karte thee and that was the error causing part samji
}

useEffect(()=>{
    fetchProducts(data);

},[data])

useEffect(()=>{
    console.log('cart:',cart);
},[cart]);
    return (
        <div className="products-main">
            <h2>Shopping Cart</h2>
            <div className="products-container-cart">
            {
                cart.length !== 0 ? (
                    cart.map((item,index)=> 
                        <div className="products" key={index}>
                    <div className="products-img">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="products-title">{item.title}</div>
                    <div className="products-price">${item.price}</div>
                    <div className="products-quantity">Quantity:{data[index].quantity}</div>
                </div>                   
                    
                    )
                ):(
                    <p>No Item in Cart</p>
                )
            }
            
            </div>
        </div>
    );
}

export default Cart;







// import React, { useEffect, useState } from "react";
// function Cart({ data }) {
//     return (
//         <div>
//             <h2>Shopping Cart</h2>
//             {data.length > 0 ? (
//                 data.map((prod) => (
//                     <div className="products" key={prod.id}>
//                         <div className="products-img">
//                             <img src={prod.productImg} alt={prod.productTitle} />
//                         </div>
//                         <div className="products-title">{prod.productTitle}</div>
//                         <div className="products-price">${prod.productPrice}</div>
//                         <div className="product-quantity">Quantity:{prod.quantity}</div>
//                     </div>
//                 ))
//             ) : (
//                 <p>No items in the cart.</p>
//             )}
//         </div>
//     );
// }

// export default Cart;


