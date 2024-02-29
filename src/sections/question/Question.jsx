import React from 'react'
import './question.css'

const Question = () => {
  return (
    <section id="question">
        <div class="container">
            <div class="question_main">
                <div class="question_left">
                    <h2 class="heading">Frequently asked questions</h2>
                    <a href="#">Contact us for more info</a>
                </div>
                <div class="question_right">
                    <div class="question_item">
                        <div class="question_part">
                            <div class="question_number">
                                <span>01</span>
                            </div>
                            <div class="question_area">
                                <h4>How much time does it take?</h4>
                                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="question_symbol">
                            <h3>+</h3>
                        </div>
                    </div>
                    <div class="question_item">
                        <div class="question_part">
                            <div class="question_number">
                                <span>02</span>
                            </div>
                            <h4>What is your class naming convention?</h4>
                        </div>
                        <div class="question_symbol">
                            <h3>+</h3>
                        </div>
                    </div>
                    <div class="question_item">
                        <div class="question_part">
                            <div class="question_number">
                                <span>03</span>
                            </div>
                            <h4>How do you communicate?</h4>
                        </div>
                        <div class="question_symbol">
                            <h3>+</h3>
                        </div>
                    </div>
                    <div class="question_item">
                        <div class="question_part">
                            <div class="question_number">
                                <span>04</span>
                            </div>
                            <h4>I have a bigger project. Can you handle it?</h4>
                        </div>
                        <div class="question_symbol">
                            <h3>+</h3>
                        </div>
                    </div>
                    <div class="question_item">
                        <div class="question_part">
                            <div class="question_number">
                                <span>05</span>
                            </div>
                            <h4>What is your class naming convention?</h4>
                        </div>
                        <div class="question_symbol">
                            <h3>+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question