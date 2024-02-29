import React from 'react'
import './project.css'
import projectImg from '../../assets/images/project-img.jpg'
import projectImg1 from '../../assets/images/project-item1.jpg'
import projectImg2 from '../../assets/images/project-item2.jpg'

import { FaArrowRightLong } from "react-icons/fa6";


const Project = () => {
  return (
    <section id="project">
        <div class="container">
            <div class="project_heading">
                <h3 class="heading">View our projects</h3>
                <a href="#">view more<FaArrowRightLong className='project_icon'/></a>
            </div>
            <div class="project_wrapper">
                <div class="big_project">
                    <img src={projectImg} alt="not found"/>
                    <div class="big_project_overley">
                        <h4 class="project_item_heading">Workhub office Webflow Webflow Design</h4>
                        <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                        <a href="#">view more<FaArrowRightLong className='project_icon'/></a>
                    </div>
                </div>
                <div class="small_project">
                    <div class="small_project_item">
                        <img src={projectImg1} alt="img"/>
                        <div class="small_project_overley">
                            <h4 class="project_item_heading">Unisaas Website Design</h4>
                            <a href="#">view more<FaArrowRightLong className='project_icon'/></a>
                        </div>
                    </div>
                    <div class="small_project_item">
                        <img src={projectImg2} alt="img"/>
                        <div class="small_project_overley">
                            <h4 class="project_item_heading">Unisaas Website Design</h4>
                            <a href="#">view more<FaArrowRightLong className='project_icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project