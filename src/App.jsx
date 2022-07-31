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


function App() {

  const [items, setItems] = useState({
    group1: [],  
  })
  
  const [hasChanged, setChange] = useState(false);
  //const [value, setValue] =useState(4);
  let newItems = {...items}
  let value = 0;
  const handleChange = (event) => {
    value = event.target.value;
    
    for(let i=0;i<value; i++){
      newItems.group1.push(RandomRange(1,1000));
    }
    setChange(true);
    setItems(newItems);
  }

  const handleRandom = () =>{
    value=RandomRange(1,10);
    for(let i=0;i<value; i++){
      newItems.group1.push(RandomRange(1,1000));
    }
    setChange(true);
    setItems(newItems);
  }

  let isSorted = false;
  let sortedGroup = items.group1.map((i)=>{return i})
  sortedGroup = sortedGroup.sort();
 
  function checkSorted(items, sorted){
    if(JSON.stringify(items)===JSON.stringify(sorted)){
      return true;
    } else{
      return false;
    }
  }

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

        
      });
    }
  };

  const handleOnDragEnd= ({ active, over }) => {
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
        } 
          return newItems;
 
      });   
    }
  };

 


  const droppableStyle0 = {
    padding: "20px 10px",
    border: "2px solid gray",
    borderRadius: "5px",
    maxHeight: 1000,
    maxWidth: 70,
    margin: "5% 40% 5% 40%",
  };
 
  const sortDisplay = checkSorted(items.group1, sortedGroup) ? {display: "inline"} : {display:"none"}
  const correctStyle = {margin: "5%  35% 5% 35%"}
  const dropdownStyle = hasChanged ? {display: "none"}:{display: "inline",margin: "5%  35% 5% 35%"}
  const labelStyle = {margin: "0% 1% 0% 0%"}
  const uiStyle = {margin: "0%  35% 0% 35%"}
  return (
    
    <DndContext
      
      sensors={sensors}
      onDragEnd={handleOnDragEnd}
      onDragOver={handleDragOver}
    >
      
      <div style={dropdownStyle}>
      <label>
       <span style={labelStyle}>Choose how many numbers: </span>   
       <button onClick={handleRandom} style={uiStyle}>Random</button>
        <select value={value} onChange={handleChange} style={uiStyle}>
        <option value={0}></option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
      </label>
      
      </div>
      <div className="sorted" style={sortDisplay}>
      <h1 style={correctStyle}>✨Correct✨</h1>
      </div>

        {Object.keys(items).map((group) => (
          <Droppable id={group} items={items[group]} key={group} style={droppableStyle0}/>
        ))}
      
        

      
    </DndContext>
    
    );
  }


export default App;
