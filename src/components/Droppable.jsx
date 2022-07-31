import { useDroppable } from "@dnd-kit/core";
import { horizontalListSortingStrategy, rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import {restrictToHorizontalAxis} from '@dnd-kit/modifiers';
import React from "react";

const Droppable = ({ id, items, style}) => {
  const { setNodeRef } = useDroppable({ id });



  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} style={style}>
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </div>
    </SortableContext>
  );
};

export default Droppable;
