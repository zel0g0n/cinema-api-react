import React from 'react'
import './item.scss'
const Item = ({movie, showDetailMovie}) => {
  return (
    <div onClick={() => showDetailMovie(movie.id)}  className='list__item'>
      <img src={movie.image} alt="movie-image" className="list__item-img" />
      <p className="movie-name">{(movie.name&&movie.name.length>20?movie.name.slice(0,20)+'...':movie.name)}</p>
      <p className="movie-year">Date: {movie.release_date}&#128467;</p>
      <p className="movie-duration">Views: {movie.views}&#128065;</p>
    </div>
  )
}

export default Item