import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { initialData } from "./initial-data";
import { useState } from "react";
import styled from "styled-components";



export default function GamePage(){
  const [art, setArt] = useState(initialData.startArt);
  const [startZone, setStart] = useState(initialData.startZone)
 
  
  
  return(
    <div>
    </div>
  )
}