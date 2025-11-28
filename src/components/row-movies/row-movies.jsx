import {useRef, useEffect, useState, useCallback } from 'react'
import './row-movies.scss'
import Item from '../item/item'
import useMovieService from '../../service/movie-service'
import { useLocation, useNavigate } from 'react-router'
const RowMovies = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  const [movieList, setMovieList] = useState([])
  const [page,setPage] = useState(1)
  const {getPopularMovies, getTrandingMovies} = useMovieService()
  const didFetch = useRef(false)
  
  useEffect(() => {
    if (!didFetch.current) {
      showMoreMovies(page)
      didFetch.current = true
    }
  }, [])//dublicate useEffectni oldini olish uchun
  
  
  
  const showMoreMovies = async (currentPage) => {
    if(pathname == '/popular') {
      try {
        const newMovies = await getPopularMovies(currentPage)
        setMovieList(prev => ([...prev,...newMovies]))
      }catch(err) {
        console.log(err)
      }
    }else {
      try {
        const newMovies = await getTrandingMovies(currentPage)
        setMovieList(prev => ([...prev,...newMovies]))
      }catch(err) {
        console.log(err)
      }
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
  const navigate = useNavigate()
  const showDetailMovie = useCallback((id) => {
    navigate('/movie/'+id)
  },[])

  return (
    <div className='rowmovies'>
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src="/tranding.svg" alt="trending" />
          <h3>{pathname=='/popular'?'Popular':"Trending"}</h3>
        </div>
        <div className="hr"></div>
        <a href="#">See more</a>
      </div>
      <div className="rowmovies__list">
        {movieList.length?movieList.map((item) => (
          <Item showDetailMovie={showDetailMovie} movie={item} key={item.id}/>
        )):null}
      </div>
      <div className="more">
        <button onClick={pageHandler} className="btn btn-secondary">More</button>
      </div>
    </div>
  )
}

export default RowMovies