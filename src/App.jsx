import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './components/Droppable';
import {Draggable} from './components/Draggable';

export default function App() {
  const startStyle = {
    margin: "45%, 45%, 5%, 5%",
    minWidth: 70,
    maxWidth: 70,
    minHeight: 110,
    maxHeight: 110
  }

  const timelineData = ['B']
  const [timeline, setTimeline] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={startStyle}>
        {timeline === null ? draggableMarkup : null}
      </div>
      
       {timelineData.map((id) => (
       
       <Droppable key={id} id={id}>
         {timeline === id ? draggableMarkup : null}
       </Droppable>
     ))}
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;

    setTimeline(over ? over.id : null);
  }
};