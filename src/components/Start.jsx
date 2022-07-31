import { useDroppable, DndContext } from "@dnd-kit/core";
import Droppable from "./Droppable";
import React from "react";

export default function Start(id, items, style, modifiers, sensors, handleDragEnd, handleDragOver){
  const { setNodeRef } = useDroppable({ id });

return(
    <DndContext
    sensors={sensors}
    onDragEnd={handleDragEnd}
    onDragOver={handleDragOver}
    modifiers={modifiers}
  >
      {Object.keys(items).map((group) => (
        <Droppable id={group} items={items[group]} key={group} style={style}/>
      ))}
    
  </DndContext>
  )
}