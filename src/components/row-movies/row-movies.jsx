import {useRef, useEffect, useState, useMemo } from 'react'
import './row-movies.scss'
import Item from '../item/item'
import MovieService from '../../service/movie-service'
const RowMovies = () => {
  
  const [movieList, setMovieList] = useState([])
  const [page,setPage] = useState(1)
  const movieService = useMemo(() => new MovieService(),[])
  const didFetch = useRef(false)

  useEffect(() => {
    if (!didFetch.current) {
      showMoreMovies(page)
      didFetch.current = true
    }
  }, [])//dublicate useEffectni oldini olish uchun
  
  const showMoreMovies = async (currentPage) => {
    try {
      const newMovies = await movieService.getPopularMovies(currentPage)
      setMovieList(prev => ([...prev,...newMovies]))
    }catch(err) {
      console.log(err)
    }
  }

  const pageHandler = async () => {
    try {
      const nextPage = page+1
      setPage(nextPage)
      await showMoreMovies(nextPage)
    }catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='rowmovies'>
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src="/tranding.svg" alt="trending" />
          <h3>Trending</h3>
        </div>
        <div className="hr"></div>
        <a href="#">See more</a>
      </div>
      <div className="rowmovies__list">
        {movieList.length?movieList.map((item) => (
          <Item movie={item} key={item.id}/>
        )):null}
      </div>
      <div className="more">
        <button onClick={pageHandler} className="btn btn-secondary">More</button>
      </div>
    </div>
  )
}

export default RowMovies