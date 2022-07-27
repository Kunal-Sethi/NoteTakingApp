import "./App.css";
import { useState, useContext } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import NotesData from "./data/NotesData";
import AddNotes from "./components/AddNotes";
import NotesContext, { NotesProvider } from "./context/NotesContext";

function App() {
  const [todoText, setTodoText] = useState(NotesData);

  // const handleAdd = (text) => {
  //   // e.preventDefault();
  //   alert(text);
  //   const newNote = {
  //     text,
  //   };
  //   setTodoText([...todoText, newNote]);
  // };

  // const handleDelete = (id) => {
  //   alert(id);
  //   console.log(id);
  //   setTodoText(todoText.filter((item) => item.id !== id));
  // };

  return (
    <NotesProvider>
      <div className="container">
        <header className="App-header">
          <Header />
          {/* <Todo text={todoText} deleteNotes={handleDelete} /> */}
          <Todo />
          {/* <AddNotes hanldeAdd={handleAdd} /> */}
          <AddNotes />
        </header>
      </div>
    </NotesProvider>
  );
}

export default App;
