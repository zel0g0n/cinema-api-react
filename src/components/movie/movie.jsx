import React, { useEffect, useState } from 'react'
import './movie.scss'
import useMovieService from '../../service/movie-service'
import { useParams } from 'react-router'
const Movie = () => {
  const {id} = useParams()
  const {getDetailsMovie} = useMovieService()
  const [movieData, setMovieData] = useState(null)

  const getMovie = async () => {
    try {
      const response = await getDetailsMovie(id)
      console.log(response)
      setMovieData(response)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovie()
  },[])

  return (
    movieData&&(
      <div  className='movie_item'>
        <img src={movieData.image} alt="movie-image" />
        <div>
          <p className="movie-name">{(movieData.name)}</p>
          <p className="movie-descr">{(movieData.description)}</p>
          <p className="movie-year">Date: {movieData.release_date}&#128467;</p>
          <p className="movie-duration">Views: {movieData.views}&#128065;</p>          
        </div>

      </div>
    )
  )
}

export default Movie

