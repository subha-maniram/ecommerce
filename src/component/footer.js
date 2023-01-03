import React from "react"
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <>
        {/* footer top content */}
            <div class="container-fluid bg-primary">
                <div class="site-info">
                    <div class="row text-center py-3 bg-blue m-0">
                        <div class="col-md-4 col-sm-12 my-md-0 my-4">
                            <div class="row justify-content-center text-light">
                                <i class="fa fa-rocket fa-4x px-4"></i>
                                <div class="py-2 font-roboto text-left">
                                    <h6 class="m-0">Free Shopping & Return</h6>
                                    <small>Free Shipping on order over $49</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 my-md-0 my-4">
                            <div class="row justify-content-center text-light">
                                <i class="fa fa-money fa-4x px-4"></i>
                                <div class="py-2 font-roboto text-left">
                                    <h6 class="m-0">Money Guarantee</h6>
                                    <small>30 Days money back guarantee</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 my-md-0 my-4">
                            <div class="row justify-content-center text-light">
                                <i class="fa fa-headphones fa-4x px-4"></i>
                                <div class="py-2 font-roboto text-left">
                                    <h6 class="m-0">Online Support</h6>
                                    <small>We support online 24 hours a day</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* footer page start */}
       <div className="bg-dark">
                <div className="container bg-dark">
                    <div className="row py-4 text-white">
                        <div className="col-md-3 col-sm-12">
                            <h4 className="text-warning">Company Name</h4>
                            <p>In this section we should write about our company
                                to introduce your company or something else.
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-12 ">
                            <h4 className="text-warning">Services</h4>
                            <p>About</p>
                            <p>Return Policy</p>
                            <p>Term & Condition</p>
                            <p>Custom serv</p>
                        </div>
                        <div className="col-md-3 col-sm-12 ">
                            <h4 className="text-warning">Useful Links</h4>
                            <p>  <Link to="/home" style={{textDecoration: 'none'}}>Home</Link></p>
                            <p>  <Link to="/product" style={{textDecoration: 'none'}}>Product</Link></p>
                            <p>  <Link to="/home" style={{textDecoration: 'none'}}>About</Link></p>
                            <p>  <Link to="/home" style={{textDecoration: 'none'}}>Contact Us</Link></p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <h4 className="text-warning">Address</h4>
                            <div >
                                <i class="fa fa-home me-2 "></i>
                                <span>Kabul</span>
                            </div>
                            <div>
                                <i class='fa fa-phone me-2'></i>
                                <span>0093783832546</span>
                            </div>
                            <div>
                                <i class='fa fa-envelope me-2'></i>
                                <span>shopping@gmail.com</span>
                            </div>
                            <div>
                                <i class='fa fa-phone me-2'></i>
                                <span>+9028390989</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                         <div className="col-md-3 col-sm-12 ">
                            <input type="text" placeholder="YOUR E-MAIL"></input><br />
                            <button className="bg-primary mt-2">SUBSCRIPE</button>
                        </div>

                    </div>
                </div>
                <div class="container text-center">
                    <p class="pt-5">
                        <img src="./asset/payment.png" alt="pay img" class="img-fluid"/>
                    </p>
                    <small class="text-secondary py-4">@copyright Code With subulakshmi 2022</small>
                </div>
            </div>
        </>
    )
}

export default Footer