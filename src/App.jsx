import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './components/Droppable';
import {Draggable} from './components/Draggable';
import RandomRange from './components/RandomRange';
const startStyle = {
  minWidth: 20,
  maxWidth: 70,
  minHeight: 110,
  border: "5px solid gray",
  margin: "5px 5px 20px 20px"
}
function newDraggable(){
  let newNum = RandomRange(1,1000);
  return(
    <Draggable>{newNum}</Draggable>
  )
}
export default function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );
 
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={startStyle}>
      {!isDropped ? draggableMarkup : null}
      </div>
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
     

    }
  }
}