import React from 'react'
import './blog.css'

import blogImg1 from '../../assets/images/blog-img1.png'
import blogImg2 from '../../assets/images/blog-img2.jpg'
import blogImg3 from '../../assets/images/blog-img3.jpg'

import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <section id="blog">
        <div class="container">
            <h2 class="heading">our blog</h2>
            <div class="blog_wrapper">
                <div class="blog_item">
                    <div class="blog_img">
                        <img src={blogImg1} alt="image"/>
                    </div>
                    <h5>19 Jan 2022</h5>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p class="paragraph">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#">read more<FaArrowRightLong className='blog_icon'/></a>
                </div>
                <div class="blog_item">
                    <div class="blog_img">
                        <img src={blogImg2} alt="image"/>
                    </div>
                    <h5>19 Jan 2022</h5>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p class="paragraph">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#">read more<FaArrowRightLong className='blog_icon'/></a>
                </div>
                <div class="blog_item">
                    <div class="blog_img">
                        <img src={blogImg3} alt="image"/>
                    </div>
                    <h5>19 Jan 2022</h5>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p class="paragraph">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a href="#">read more<FaArrowRightLong className='blog_icon'/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog