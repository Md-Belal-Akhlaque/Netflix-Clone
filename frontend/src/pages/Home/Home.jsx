import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import herobanner from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={herobanner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src={herotitle} alt="" className='hero-title' />
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from his immortal enemy.</p>
            <div className="hero-btns">
              <button className='btn'><img src={playIcon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={infoIcon} alt="" />Know More</button>
            </div>
          </div>
        </div>
      <TitleCards />
        <div className="more-cards">
      <TitleCards title={"Now Playing"} category={"now_playing"}/>
      <TitleCards title={"Top Picks for You"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>

        </div>
        <Footer/>
      </div>

    </>
  )
}

export default Home
