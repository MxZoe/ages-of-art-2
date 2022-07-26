import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { initialData } from './initial-data';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default function Art() {

    return (
      <Draggable draggableId={art.id} index={art.index}>
        {(provided)=>(   
          <Container 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            
            >
            {this.props.art.year}
          </Container>
        )}
      </Draggable>
    )
  }
