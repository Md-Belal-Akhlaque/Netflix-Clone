import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTIzZGNmZDFhZGM3MDc1MjRkMDBmZjM4OTEzOWIxMyIsIm5iZiI6MTc2MjU5ODQ4NC44MTYsInN1YiI6IjY5MGYxZTU0YjgyY2M4YzcwN2RkMTkzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OFDLiHyUSpCZpRlJ-NbVKZR7mcbUGaeSKibhYz6Ltc4'
    }
  };
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setMovieDetails(res.results[0]))
      .catch(err => console.error(err));
  }, [])


  return (


    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
      <iframe
        src={`http://www.youtube.com/embed/${movieDetails.key}`}
         frameborder="0"
        width="90%"
        height="90%"
        title='trailer'
        allowFullScreen
        allowTransparency
      ></iframe>
      <div className="player-info">
        <p>{movieDetails.published_at.slice(0,10)}</p>
        <p>{movieDetails.name}</p>
        <p>{movieDetails.type}</p>
      </div>
    </div >
  )
}

export default Player
