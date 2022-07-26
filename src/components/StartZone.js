import { initialData } from "./initial-data";
import { useState } from "react";
import styled from "styled-components"
import Art from "./Art";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const ArtList = styled.div`
  padding: 8px;
`;

function StartZone(){
  const [start, setStart] = useState(initialData.startZone);

  return (
    <Container>
      <Droppable droppableId={start.id} >
      {(provided)=>(
            <ArtList 
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
              
              {this.props.arts.map((art, index) => <Art key={art.id} art={art} index={index}/>)}
              {provided.placeholder}
            </ArtList>
          )}
      </Droppable>
    </Container>
  )
}