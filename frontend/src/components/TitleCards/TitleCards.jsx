import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({ title, category }) => {

  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  }

  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  //its from tmdb api
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTIzZGNmZDFhZGM3MDc1MjRkMDBmZjM4OTEzOWIxMyIsIm5iZiI6MTc2MjU5ODQ4NC44MTYsInN1YiI6IjY5MGYxZTU0YjgyY2M4YzcwN2RkMTkzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OFDLiHyUSpCZpRlJ-NbVKZR7mcbUGaeSKibhYz6Ltc4'
    }
  };





  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));


    cardRef.current.addEventListener('wheel', handleWheel)
  }, [])


  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {/* //yahapar card_data ko hata kar apiData use karo */}
        {apiData.map((card, index) => {
          //url is from searching img url of tmdb on internet
          const cardImg = "https://image.tmdb.org/t/p/w500" + card.poster_path;
          const cardName = card.original_title;

          return (<Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={cardImg} alt="" />
            <span>{cardName}</span>
          </Link>)
        })}
      </div>
    </div>
  )
}

export default TitleCards
