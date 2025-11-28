import { useHttp } from "../hooks/useHttp"
export const  useMovieService = () => {
  const _apiBase = 'https://api.themoviedb.org/3/movie/'
  const _apiLng = 'language=en-US'
  const _apiKEY = 'api_key=300fe233bd863fc86907cac7b2f9b7d1'
  const _imgbaseURL = 'https://image.tmdb.org/t/p/original'

  
  const request = useHttp()

  const getPopularMovies = async (page) => {
    const response = await request(`${_apiBase}popular?${_apiLng}&page=${page}&${_apiKEY}`)
    return _getMovieList(response.results)
  }
  const getTrandingMovies = async (page) => {
    const response = await request(`${_apiBase}top_rated?${_apiLng}&page=${page}&${_apiKEY}`)
    return _getMovieList(response.results)
     
  }

  const getDetailsMovie = async (id) => {
    const response = await request(`${_apiBase}${id}?${_apiLng}&${_apiKEY}`)
    return _transformMovie(response)
  }

  const getRandomMovie = async () => {
    const response = await getPopularMovies(1)
    const movie = response[Math.floor(Math.random()*20)]
    return movie

  }

  const _getMovieList = (data) => {
    const finallyMovieList = data.map(item => _transformMovie(item))
    return finallyMovieList
  }
  const _transformMovie = (movie) => {
    return ({
      name: movie.original_title,
      description: movie.overview,
      image: _imgbaseURL+movie.poster_path,
      release_date: movie.release_date,
      views: movie.vote_count,
      id: movie.id

    })
  }
  return {
    getDetailsMovie,getPopularMovies, getTrandingMovies, getRandomMovie
  }

  
}
export default useMovieService