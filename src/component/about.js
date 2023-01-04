import React from 'react';
import '../about.css';
import Meta from './Meta';

function About() {
    return (
        <Meta title="about">
        <div className='mx-4'>
            <div class="review" id="review">

                <h1 class="heading text-center"> People Say <span style={{ color: 'orange' }}>About Us</span> </h1>

                <div class="box-container">

                    <div class="box col-md-3 col-sm-12">
                        <img src="asset/pic1.png" alt="" />
                        <h3>john Jenny</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos eum. Laborum aut a consequatur ducimus, quisquam rerum temporibus ipsum voluptate. </p>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>

                    <div class="box col-md-3 col-sm-12">
                        <img src="asset/pic2.png" alt="" />
                        <h3>john deo</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias possimus quisquam rerum temporibus ipsum voluptate. </p>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-alt"></i>
                        </div>
                    </div>

                    <div class="box col-md-4 col-sm-12">
                        <img src="asset/pic3.png" alt="" />
                        <h3>Amado Claus</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias possimus quisquam  ipsum voluptate accusamus, unde ab asperiores? Exercitatione.
                           
                        </p>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>

                </div>

            </div>

            <div class="newsletter">

                <div class="content">
                    <h3>Monthly Newsletter</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam itaque culpa hic corporis saepe dicta doloremque nihil.</p>
                    <form >
                        <input type="email" placeholder="enter your email" class="box" />
                        <input type="submit" value="send" class="btn btn-warning" />
                    </form>
                </div>

            </div>
        </div>
        </Meta>
    )
}

export default About