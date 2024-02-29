import React from 'react'
import './contact.css'
import contactLogo from '../../assets/images/logo.png'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact_part">
        <div class="container">
            <div class="contact_wrapper">
                <div class="contact_left">
                    <img src={contactLogo} alt="logo"/>
                    <p class="paragraph">We are always open to discuss your project and improve your online presence.</p>
                    <div class="contact_main">
                        <div class="contact_email">
                            <h6>Email me at</h6>
                            <span>contact@website.com</span>
                        </div>
                        <div class="contact_call">
                            <h6>Call us</h6>
                            <span>0927 6277 28525</span>
                        </div>
                    </div>
                </div>
                <div class="contact_right">
                    <h2 class="heading">Lets Talk!</h2>
                    <p class="paragraph">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div class="contact_icon_area">
                        <FaFacebook className='contact_icon'/>
                        <FaTwitter className='contact_icon'/>
                        <FaInstagram className='contact_icon'/>
                        <FaLinkedin className='contact_icon'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact