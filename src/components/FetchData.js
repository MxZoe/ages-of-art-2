import { useState } from "react"
export default function FetchData(API){
  const [data, setData] = useState([])
  fetch(API)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setData(res)
    })
  }