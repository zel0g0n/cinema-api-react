import { useContext } from "react"
import { dataContext } from "./app/App"

const Counter = function Counter({inc,reset})  {
  const data = useContext(dataContext)
  console.log(data);
  
  
  return(
    <>
      <p>{data.counter}</p>
      <button onClick={inc}>+++</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter