import ErrorBoundary from "../error-boundary/ErrorBoundary"
import {createContext, lazy, Suspense, useCallback, useState} from 'react'
import Navbar from "../navbar/navbar" 
import { Routes, Route } from "react-router"
import Counter from "../counter"
export const dataContext = createContext(null)
const {Provider} = dataContext
const  Hero  = lazy(() => import("../hero/hero")),
       Popular = lazy(() => import("../popular/popular")),
       RowMovies = lazy(() => import("../row-movies/row-movies")),
       Rating = lazy(() => import("../rating/rating")),
       Movie = lazy(() => import("../movie/movie"))

function App() {
  
  const [counter, setCounter] = useState({counter: 0})

  const inc = useCallback(() => {
    setCounter(prev => ({counter: prev.counter+1}))
  },[])
  const reset = useCallback(() => {
    setCounter({counter: 0})
  },[])
  
  return (
    <Provider value={counter}>
      <div className='app'>


        <ErrorBoundary>
          <Navbar/>
          <Counter counter={counter.counter} inc={inc} reset={reset} />
        </ErrorBoundary>
        <Suspense fallback={<h1>Loading 1 minute, pls...</h1>}>
          <Routes>
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
          </Routes>
        </Suspense>


        

        
        
        
      </div>      
    </Provider>

  )
}

export default App
