import ErrorBoundary from "../error-boundary/ErrorBoundary"
import Hero from "../hero/hero"
import Navbar from "../navbar/navbar"
import RowMovies from "../row-movies/row-movies"
function App() {

  
  return (
    <div className='app'>
      <ErrorBoundary>
        <Navbar/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero/>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <RowMovies/>
      </ErrorBoundary>
    </div>
  )
}

export default App
