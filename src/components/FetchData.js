import { useState, useEffect } from "react"
export default function FetchData(API){
  const [data, setData] = useState([])
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
  }
  
  useEffect(() => {
    fetchData()
  }, [])

    return data;
  }