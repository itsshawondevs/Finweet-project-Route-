import React from 'react'
import './setup.css'
import { FaArrowRightLong } from 'react-icons/fa6'

const Setup = () => {
  return (
    <section id="setup">
        <div className="container">
            <div className="setup_wrapper">
                <div className="setup_build">
                    <h2 className="heading">Building stellar websites for early startups</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <div className="setup_info">
                    <h3>Send inquiry</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <form className="setup_form" action="" method="">
                        <input type="text" placeholder="your name"/>
                        <input type="text" placeholder="email"/>
                        <input type="url" placeholder="Paste your Figma design URL"/>
                    </form>
                    <div className="setup_btn">
                        <button type="submit">Send an Inquiry</button>
                    </div>
                    <div className="setup_link">
                        <a href="#">Get in touch with <FaArrowRightLong className='setup_icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Setup