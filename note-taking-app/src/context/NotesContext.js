import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import NotesData from "../data/NotesData";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [todoText, setTodoText] = useState(NotesData);
  const [notesEdit, setNotesEdit] = useState({
    item: {},
    edit: false,
  });
  const [addText, setAddText] = useState("");

  const handleDelete = (id) => {
    setTodoText(todoText.filter((item) => item.id !== id));
  };

  const updateNotes = (id, updNote) => {
    setTodoText(
      console.log(id),
      console.log(updNote),
      todoText.map((item) => (item.id == id ? { ...item, ...updNote } : item))
    );
  };

  const handleAdd = (text) => {
    const newNote = {
      id: uuidv4(),
      text,
    };
    if (notesEdit.edit === false) {
      setTodoText([...todoText, newNote]);
      setAddText("");
      console.log("This is add");
    } else {
      updateNotes(notesEdit.item.id, text);
      console.log("This is update", notesEdit.item.id);
      //   setNotesEdit({
      //     item: {},
      //     edit: false,
      //   });
    }
    // console.log(notesEdit.item.id, text);
    console.log(notesEdit, text);
  };

  const editNotes = (item) => {
    setNotesEdit({
      item: { item },
      edit: true,
    });
    console.log(notesEdit);
    setAddText(item.text);
  };

  return (
    <NotesContext.Provider
      value={{
        todoText,
        addText,
        setAddText,
        handleDelete,
        handleAdd,
        editNotes,
        updateNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
