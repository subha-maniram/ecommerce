import React , { useState , useEffect } from "react";
import { useDispatch } from 'react-redux';
import { cartActions } from '../component/redux/slices/cartSlice';

import {Link, useParams } from "react-router-dom";

export default function Products(){
    
    const {id} = useParams();
    console.log(id);
    const[products,setProducts]=useState([]);
     const dispatch= useDispatch();
    const addToCart =()=>{
        dispatch(cartActions.addItem({
          id:products.id,
          productName:products.title,
          price:products.price,
          imgUrl:products.image
        }))
      }
      
    useEffect(() => {

            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))

        },[id])
        console.log(products)

        const ShowProduct = ()=>{
            return(
                <>
                 <div className="col-md-6">
                    <img src={products.image} alt={products.title}
                    height="400px"  width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {products.category}
                    </h4>
                    <h1 className="display-5">{products.title}</h1>
                    <p className="lead fw-bolder">Rating {products.rating && products.rating.rate}
                    <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">${products.price}</h3>
                    <p className="lead">{products.description}</p>
                    <button className="btn btn-outline-info px-4 py-2"
                    onClick={ addToCart}>Add to Cart</button>
                    <Link to="/cart" className="btn btn-outline-warning ms-2 px-3 py-2">Go to Cart</Link>
                    
                </div> 

                </>
            )
        }
    return(
        <div>
           <div className="container py-3">
            <div className="row py-3">
                {<ShowProduct/>}
            </div>
           </div>
        </div>
    )
}