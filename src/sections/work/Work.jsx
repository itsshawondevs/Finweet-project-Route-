import React from 'react'
import './work.css'

import { FaArrowRightLong } from "react-icons/fa6";


const Work = () => {
  return (
    <section id="work">
        <div class="container">
            <div class="work_main">
                <div class="work_content">
                    <h2 class="heading">How we work</h2>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us<FaArrowRightLong className='work_icon'/></a>
                </div>
                <div class="work_item_wrapper">
                    <div class="work_item">
                        <div class="pointer">
                            <span>01</span>
                            <div class="back"></div>
                            <div class="middle"></div>
                            <div class="front"></div>
                        </div>
                        <h3>strategy</h3>
                        <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div class="work_item">
                        <div class="pointer">
                            <span>02</span>
                            <div class="back"></div>
                            <div class="middle"></div>
                            <div class="front"></div>
                        </div>
                        <h3>Wireframing</h3>
                        <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div class="work_item">
                        <div class="pointer">
                            <span>03</span>
                            <div class="back"></div>
                            <div class="middle"></div>
                            <div class="front"></div>
                        </div>
                        <h3>Design</h3>
                        <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div class="work_item">
                        <div class="pointer">
                            <span>04</span>
                            <div class="back"></div>
                            <div class="middle"></div>
                            <div class="front"></div>
                        </div>
                        <h3>Development</h3>
                        <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work