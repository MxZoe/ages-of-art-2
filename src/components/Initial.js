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
        setData(res)
      })
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  const UpperBound = data.total - 1;
  let newNum = RandomRange(0, UpperBound);
  const IDArray = data.objectIDs[newNum];
  let newUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${IDArray}`
  const fetchNewData = () => {
    fetch(newUrl)
      .then((res) => res.json())
      .then((res) => {
        setNewData(res)
      })
  }
  useEffect(()=>{
    fetchNewData()
  },[]
  )

  return(

    <>
    {newData.title}
    </>
  )

}

