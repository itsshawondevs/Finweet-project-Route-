import React from 'react'
import './feature.css'
import { FaUsers } from 'react-icons/fa6'
import { FaCheckCircle, FaPencilRuler } from 'react-icons/fa'
import { FaCommentsDollar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";

const Feature = () => {
  return (
    <section id="feature">
        <div class="container">
            <h6>features</h6>
            <h2 class="heading">Design that solves problems, one product at a time</h2>
            <div class="feature_wrapper">
                <div class="feature_item">
                    <FaUsers className='feature_icon'/>
                    <h3>Uses Client First</h3>
                    <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div class="feature_item">
                    <FaCheckCircle className='feature_icon'/>
                    <h3>Two Free Revision Round</h3>
                    <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div class="feature_item">
                    <FaPencilRuler className='feature_icon'/>
                    <h3>Template Customization</h3>
                    <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div class="feature_item">
                    <FaCommentsDollar className='feature_icon'/>
                    <h3>24/7 Support</h3>
                    <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div class="feature_item">
                    <FaStopwatch className='feature_icon'/>
                    <h3>Quick Delivery</h3>
                    <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                <div class="feature_item">
                    <FaFileSignature className='feature_icon'/>
                    <h3>Hands-on approach</h3>
                    <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature