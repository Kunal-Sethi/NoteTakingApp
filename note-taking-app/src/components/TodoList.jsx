import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useContext } from 'react'
import NotesContext from '../context/NotesContext';

function TodoList({ text, id, deleteNotes, item }) {

    const {todoText, handleDelete, editNotes} = useContext(NotesContext);

  return (
    <div>
        <li className='notes-list'>
            {item.text}
            {/* <MdDelete size={25} onClick={() => deleteNotes(id)} /> */}
            <div>
                <MdEdit size={23} onClick={() => editNotes(item)} />
                <MdDelete size={25} onClick={() => handleDelete(item.id)} />
            </div>
        </li>
    </div>
  )
}

export default TodoList
