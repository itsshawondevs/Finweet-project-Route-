import React from 'react'
import './about.css'
import clientImg from '../../assets/images/client.png'

const About = () => {
  return (
    <section id="about">
        <div class="container">
            <div class="about_wrapper">
                <div class="about_left">
                    <h3>What our clients say about us</h3>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div class="about_right">
                    <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                    <div class="client_info">
                        <div class="client_img">
                            <img src={clientImg} alt="img"/>
                        </div>
                        <div class="client_details">
                            <h4>Jenny Wilson</h4>
                            <h6>vice president</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About