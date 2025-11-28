import React, { useEffect, useState } from 'react'
import './hero.scss'
import useMovieService from '../../service/movie-service'
const Hero = () => {
  useEffect(() => {
    reRandomMovie()
  },[])
  const [movieData, setMovieData] = useState(null)
  const {getRandomMovie} = useMovieService()

  const reRandomMovie = async () => {
    try {
      const res = await getRandomMovie()
      setMovieData(res)
    }catch(err) {
      console.error(err)
    }
  }


  return (
    <div className='hero'>
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>TV shows and more</h1>
        <p className="hero__info-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem possimus omnis ipsa autem ad laborum est id delectus porro.
        </p>
        <button className="btn btn-seconday">DETAILS</button>
      </div>
      <div className="hero__movie">
        {
          movieData?(
            <>{movieData.image && <img src={movieData.image} alt="movie-image" />}

            <div className="hero__movie-descr">
              <h2>{movieData.name}</h2>
              <p>{(movieData.description && movieData.description.length>200)?movieData.description.slice(0,200)+'...':movieData.description}</p>
              <div>
                <button onClick={reRandomMovie} className='btn btn-primary'>Random movie</button>
                <button className='btn btn-secondary'>Details</button>
              </div>
            </div>
            </>
          ):(
            <p>Please wait...</p>
          )
        }
        

      </div>
    </div>
  )
}

export default Hero