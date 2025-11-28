import ErrorBoundary from "../error-boundary/ErrorBoundary"
import {lazy, Suspense} from 'react'
// import Hero from 
import Navbar from "../navbar/navbar" 
import { Routes, Route } from "react-router"
// import RowMovies from 
// import Popular from 
// import Rating from 
// import Movie from 

const  Hero  = lazy(() => import("../hero/hero")),
       Popular = lazy(() => import("../popular/popular")),
       RowMovies = lazy(() => import("../row-movies/row-movies")),
       Rating = lazy(() => import("../rating/rating")),
       Movie = lazy(() => import("../movie/movie"))

function App() {

  
  return (
    <div className='app'>


      <ErrorBoundary>
        <Navbar/>
      </ErrorBoundary>
      
      <Routes>

        <Suspense fallback={<h1>Loading 1 minute, pls...</h1>}>
          <Route path="/" element={
            <>
              <ErrorBoundary>
                <Hero/>
              </ErrorBoundary>
              <ErrorBoundary>
                <RowMovies/>
              </ErrorBoundary>
            </>
          }/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/trending" element={<Rating/>}/>
          <Route path="/movie/:id" element={<Movie/>}/>
        </Suspense>
        
      </Routes>
      

      
      
      
    </div>
  )
}

export default App
