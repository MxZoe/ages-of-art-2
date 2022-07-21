import { Droppable } from "react-beautiful-dnd";
import PaintingCard from "./PaintingCard";
import { Card } from "./Card"
let cardArray = [];
function getData(){
  return (PaintingCard())
}
function newCard(data){
  const card = Card(data.title, data.primaryImage, data.objectYearBegin, data.objectYearEnd)
  cardArray.push(card);
}
export default function GamePage(){
  newCard(getData());
  return(
    <div>
      <h1>{cardArray[0].title}</h1>
    </div>
  )
}