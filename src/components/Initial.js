import React, { useState, useEffect } from 'react'
import RandomRange from './RandomRange';
export default function Initial() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState([])
  const API = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImage&q=Paintings";
  
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      })
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  //const newID = data.objectIDs[RandomRange(0,46514)]
  const newUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/206321`
  const fetchNewData = () => {
    fetch(newUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setNewData(res)
      })
  }
  useEffect(()=>{
    fetchNewData()
  },[]
  )

  return(

    <>
    {data.total}
    {newData.title}
    </>
  )

}

