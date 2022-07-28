import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import NotesData from "../data/NotesData";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  //   const [todoText, setTodoText] = useState(NotesData);
  const [todoText, setTodoText] = useState([]);
  const [notesEdit, setNotesEdit] = useState({
    item: {},
    edit: false,
  });
  const [addText, setAddText] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const result = await fetch("http://localhost:15000/notes?_sort=id");
    const data = await result.json();

    setTodoText(data);
  };

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

  //   const handleAdd = async (text) => {
  const handleAdd = (text) => {
    const newNote = {
      id: uuidv4(),
      text,
    };

    // const result = await fetch("http://localhost:15000/notes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body(newNote)
    // });

    // const data = await result.json();

    // setTodoText([...todoText, data]);
    setTodoText([...todoText, newNote]);
    setAddText("");
    // console.log("This is add");
    // console.log(notesEdit, text);
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
