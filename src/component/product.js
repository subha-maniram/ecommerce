import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Meta from './Meta';
import { Link } from 'react-router-dom';
import Footer  from './footer'; 

export default function Product({data}) {
   
 
    const [filter, setFilter] = useState(data);
    console.log(filter); 
    
   const filterproduct =(cat)=>{
    console.log(cat);
    const updatedlist=data.filter((x)=>x.category===cat);
    setFilter(updatedlist);
    console.log(filter);
   }
   console.log(filter);

    const ShowProducts = () => {

const handleSearch = (e)=> {
    const search = e.target.value
    console.log(search);
    
    const word = data.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));
    setFilter(word)
}


        return (
            <>
                <div className='buttons d-flex flex-wrap justify-content-start mb-3 pb-5'>
                    <motion.button whileHover={{scale:1.2}} className='btn btn-outline-dark me-2 mb-2' 
                    onClick={()=>setFilter(data)}>All</motion.button>
                    <motion.button whileHover={{scale:1.2}} className='btn btn-outline-dark me-2 mb-2' 
                    onClick={()=>filterproduct("men's clothing")}>Men's Clothing</motion.button>
                    <motion.button whileHover={{scale:1.2}} className='btn btn-outline-dark me-2 mb-2' 
                    onClick={()=>filterproduct("women's clothing")}>Women's Clothing</motion.button>
                    <motion.button whileHover={{scale:1.2}} className='btn btn-outline-dark me-2 mb-2' 
                    onClick={()=>filterproduct("jewelery")}>Jewelery</motion.button>
                    <motion.button whileHover={{scale:1.2}} className='btn btn-outline-dark me-2 mb-2' 
                    onClick={()=>filterproduct("electronics")}>Electronic</motion.button>

                    <input type="text"  placeholder='Search Products' onChange={handleSearch}/>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    
                                    <motion.img whileHover={{scale:1.1}} src={product.image} className="card-img-top" alt={product.title} height="200px" width="200px"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">
                                            {product.title.substring(0,12)}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <Link to={`/product/${product.id}`} className="btn btn-outline-info">Buy Now</Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </>

        );
    };

    return (
        <Meta title="Product">
        <div>
            <div className='container my-3 py-5'>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product </h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {<ShowProducts/>}
                </div>
            </div>
        </div>

        <Footer></Footer>
        </Meta>
    );
}

