import FetchData from "./FetchData";
import { useState } from "react";
import RandomRange from "./RandomRange";

export default function PaintingsArray(){
  const API = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImage&medium=Paintings&q=Paintings"

  const data = FetchData(API);

  let newNum = RandomRange(0,10)
  const paintingID = data.objectIDs;

  return paintingID;
  ;
}

