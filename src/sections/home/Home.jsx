import React from 'react'

import Banner from '../banner/Banner'
import Work from '../work/Work'
import Project from '../project/Project'
import Feature from '../feature/Feature'
import About from '../about/About'
import Question from '../question/Question'
import Setup from '../setup/Setup'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <>
        <Banner/>
        <Work/>
        <Project/>
        <Feature/>
        <About/>
       <Question/>
       <Setup/>
       <Blog/>
       <Contact/>
    </>
  )
}

export default Home