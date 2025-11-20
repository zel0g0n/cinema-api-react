class MovieService {
  _apiBase = 'https://api.themoviedb.org/3/movie/'
  _apiLng = 'language=en-US'
  _apiKEY = 'api_key=300fe233bd863fc86907cac7b2f9b7d1'
  _imgbaseURL = 'https://image.tmdb.org/t/p/original'

  getResourse = async (url) => {

    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }
    return await response.json()
  }

  getPopularMovies = async (page) => {
    const response = await this.getResourse(`${this._apiBase}popular?${this._apiLng}&page=${page}&${this._apiKEY}`)
    return this._getMovieList(response.results)
  }
  getTrandingMovies = (page) => {
    return this.getResourse(`${this._apiBase}top_rated?${this._apiLng}&page=${page}&${this._apiKEY}`)
  }

  getDetailsMovie = () => {
    return this.getResourse(`${this._apiBase}1062722?${this._apiLng}&${this._apiKEY}`)
  }

  getRandomMovie = async () => {
    const response = await this.getPopularMovies(1)
    const movie = response[Math.floor(Math.random()*20)]
    return movie

  }

  _getMovieList = (data) => {
    const finallyMovieList = data.map(item => this._transformMovie(item))
    return finallyMovieList
  }
  _transformMovie = (movie) => {
    return ({
      name: movie.original_title,
      description: movie.overview,
      image: this._imgbaseURL+movie.poster_path,
      release_date: movie.release_date,
      views: movie.vote_count,
      id: movie.id

    })
  }


}
export default MovieService