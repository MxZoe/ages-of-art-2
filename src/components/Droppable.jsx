import { useDroppable } from "@dnd-kit/core";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import React from "react";

const Droppable = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });

  const droppableStyle = {
    padding: "20px 10px",
    margin: "0px 0px 20px 20px",
    border: "1px solid black",
    borderRadius: "5px",
    minWidth: 300,
    minHeight: 110,
    flexWrap: "wrap",
    
    
  };

  return (
    <SortableContext id={id} items={items} strategy={horizontalListSortingStrategy}>
      <div ref={setNodeRef} style={droppableStyle}>
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </div>
    </SortableContext>
  );
};

export default Droppable;
