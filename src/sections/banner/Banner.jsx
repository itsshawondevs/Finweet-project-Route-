import React from 'react'
import './banner.css'
import bannerImg from '../../assets/images/banner_img.png'

const Banner = () => {
  return (
    <section id="banner">
        <div class="container">
            <div class="banner_wrapper">
                <div class="banner_content">
                    <h1 class="banner_heading">Building stellar websites for early startups</h1>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div class="banner_btn">
                        <a href="#">view our work</a>
                        <a href="#">view pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div class="banner_img">
                    <img src={bannerImg} alt="not found"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner