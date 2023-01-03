import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Meta from './Meta';

export default function Home({ data }) {

    const [filter, setFilter] = useState(data);

    useEffect(() => {

        const updatedlist = data.filter((x) => ((x.category === ("women's clothing")) || (x.category === ("men's clothing"))));
        setFilter(updatedlist);

    }, [data])

    console.log(filter);



    return (
        <>
            {/*  <div className='hero'>
                <div className="card text-bg-dark border-0">
                    <img src="/asset/item2.jpg" className="card-img" alt="background" height="500px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-item center">
                        <div className='container'>

                            <h5 className="card-title display-6 fw-bolder mb-0">NEW SEASON ARRAIVALS</h5>
                            <p className="card-text lead fs-4">CHECK OUT ALL THE TRENDS</p>

                        </div>
                    </div>
                </div>

            </div>
            */}

            <Meta title='Home'>
                <section>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="/asset/item2.jpg"
                                alt="First slide"
                                height="500px"
                            />

                            <Carousel.Caption>
                                <h5 className="card-title display-6 fw-bolder mb-0">NEW SEASON ARRAIVALS</h5>
                                <p className="card-text lead fs-4">CHECK OUT ALL THE TRENDS</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="/asset/item1.jpg"
                                alt="Second slide"
                                height="500px"
                            />
                            <Carousel.Caption>
                                <h3 className="card-title display-6 fw-bolder mb-0">NEW SEASON ARRAIVALS</h3>
                                <p className="card-text lead fs-4">CHECK OUT ALL THE TRENDS</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/asset/item3.jpg"
                                alt="Third slide"
                                height="500px"
                            />
                            <Carousel.Caption>
                                <h3 className="card-title display-6 fw-bolder mb-0">NEW SEASON ARRAIVALS</h3>
                                <p className="card-text lead fs-4">
                                    CHECK OUT ALL THE TRENDS
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section>
                    <div className='col-12 mb-5 mt-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product </h1>
                        <hr />
                    </div>
                    <div className='d-flex flex-wrap justify-content-evenly mx-4'>
                        {filter.map((product) => (
                            <div className='col-md-3 mb-4 px-2'>
                                <div className="card1 h-100 text-center p-4"   key={product.id}>

                                    <motion.img whileHover={{ scale: 1.1 }} src={product.image} className="card-img-top" alt={product.title} height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">
                                            {product.title.substring(0, 12)}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <Link to={`/product/${product.id}`} className="btn btn-outline-primary">Buy Now</Link>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>



                <Footer></Footer>
            </Meta>

        </>

    )
}


