import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

function Products({ category, setProductData }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData([]);
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => setData(response.data))
            .catch((err) => setError(err.message));
    }, [category]);

    if (error) return <p>Error: {error}</p>;

    function handleAddToCart(item) {
        setProductData((prevCart) => {
            const existingProduct = prevCart.find((prod)=> prod.id === item.id);
            if(existingProduct){

                console.log("existing product")
                return prevCart.map((cartItem)=> 
                    cartItem.id === item.id ? {...cartItem , quantity:cartItem.quantity+1} : cartItem);

                
            }
            else{

                console.log("new product");
                return [...prevCart, {
                    id:item.id,
                    quantity:1,
                }]
            }


        })  
        
    }

    // function handleAddToCart(item) {
    //     setProductData((prevCart) => {
    //         const existingProduct = prevCart.find((prod) => prod.id === item.id);
    
    //         if (existingProduct) {
    //             return prevCart.map((cartItem) =>
    //                 cartItem.id === item.id
    //                     ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //                     : cartItem
    //             );
    //         } else {
    //             return [...prevCart, {
    //                 id: item.id,
    //                 productImg: item.image,  
    //                 productTitle: item.title,  
    //                 productPrice: item.price,  
    //                 quantity: 1,
    //             }];
    //         }
    //     });
    // }
    

    return (
        <div className="products-main">
            <h1>{category}</h1>
            <div className="products-container">
                {data.map((item) => (
                    <div className="products" key={item.id}>
                        <div className="products-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="products-title">{item.title}</div>
                        <div className="products-price">${item.price}</div>
                        <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
