import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import insta from '../images/insta.png'
import fb from '../images/fb.png'
import ln from '../images/ln.png'

const Home = () => {
 
  return (
    <>
      <Hero>
      <span className="wave"/>
        <Banner title="the happy vibes" subtitle="A brand new resort beyond ordinary">
          <Link to='/rooms' className="btn-primary">
            explore it
        </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
      <div className="footer">
        <h6>Designed and Developed by Harin
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2019
        </h6>
        <div id="contacts">
          <h1><span>Folow me</span></h1>
          <a href="https://www.instagram.com/the_photogenic_glitch/"target="_blank">
            <img alt="Instagram" src={insta} />
          </a>
          <a href="https://www.facebook.com/harin.rajan" target="_blank">
            <img alt="Facebook" src={fb} />
          </a>
          <a href="https://www.linkedin.com/in/harin-rajan-877249166/" target="_blank">
            <img alt="Linkedin" src={ln} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
