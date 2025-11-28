import { useCallback } from "react"

export const useHttp = () => {



  const request = useCallback(async (
    url,
    method = "GET",
    body = null, 
    headers = {"Content-Type":"aplication/json"}, 
  ) => {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw new Error()
      }
      const data = await response.json()
      return data
    } catch(error) {
      console.log(error.message)
      throw error
    } 

  },[])

  return request
}