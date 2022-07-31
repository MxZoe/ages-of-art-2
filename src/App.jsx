import React, { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import RandomRange from "./components/RandomRange";
import Droppable from "./components/Droppable";
import { arrayMove, insertAtIndex, removeAtIndex } from "./utils/array";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";


function App() {

  const [items, setItems] = useState({
    group1: [RandomRange(1,1000),RandomRange(1,1000), RandomRange(1,1000), RandomRange(1,1000), RandomRange(1,1000),RandomRange(1,1000)],  
  })


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragOver = ({ over, active }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId;

    if (!overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex = over.data.current?.sortable.index || 0;

        return moveBetweenContainers(
          items,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

 
  const handleDragEnd = ({ active, over, sorted }) => {
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex = over.data.current?.sortable.index || 0;
      
      setItems((items) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...items,
            [overContainer]: arrayMove(
              items[overContainer],
              activeIndex,
              overIndex
            )
          };
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
          
        }
        if(items.group1.sort() === items.group1){
          sorted = {display:"block"}
          return newItems;
        } else{
          return newItems;
        }
        
      });      
    }
  };

  const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
  };


  const containerStyle = { display: "flex"};
  const seperateStyle ={margin: "5% 40% 5% 40%"}
  const droppableStyle0 = {
    padding: "20px 10px",
    border: "1px solid black",
    borderRadius: "5px",
    maxHeight: 1000,
    maxWidth: 70,
    margin: "5% 40% 5% 40%",
  };
 
  let sortDisplay={display: "none"}
  return (
    
    <DndContext
    
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <div className="sorted" style={sortDisplay}>
      <h1>Paintings Sorted!!!</h1>
      </div>

        {Object.keys(items).map((group) => (
          <Droppable id={group} items={items[group]} key={group} style={droppableStyle0}/>
        ))}
      
        

      
    </DndContext>
    
  );
}

export default App;
