import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    minWidth: 70,
    maxWidth: 70,
    minHeight: 110,
    maxHeight: 110
  } : {minWidth: 70,
    maxWidth: 70,
    minHeight: 110,
    maxHeight: 110};

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}