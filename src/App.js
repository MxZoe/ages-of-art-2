
import GamePage from "./components/GamePage";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  return (
    <DragDropContext>
      <GamePage/>
    </DragDropContext>
  );
}

export default App;
