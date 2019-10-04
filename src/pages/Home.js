import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

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
      </div>
    </>
  )
}

export default Home
