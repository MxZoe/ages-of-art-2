import React, { useState, useEffect } from "react";
import RandomRange from "./RandomRange";
import { paintings } from "../data"
//import "./PaintingCardStyles.css"
import { Card } from "./Card";

export default function PaintingCard(){
  const [data, setData] = useState([])
  const length = paintings.length - 1;
  let ranNum = RandomRange(0, length)
  let paintID = paintings[ranNum]
  const API = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${paintID}`

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
  const newCard = Card({title: data.title, primaryImage: data.primaryImage, yearBegin: data.objectYearBegin, YearEnd: data.objectYearEnd})
  return (
    <>
      <div>
      </div>
    </>
  );

  
}

