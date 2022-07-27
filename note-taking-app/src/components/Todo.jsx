import React from 'react'
import TodoList from './TodoList'
import { useContext } from 'react'
import NotesContext from '../context/NotesContext';

function Todo({ }) {

    const {todoText} = useContext(NotesContext);

    if(!todoText || todoText.length == 0 ){
        return (
            <div style={{
                display:'flex',
                justifyContent:'center',
            }}>
                <p style={{
                    color:'#ffffff',
                }}>No tasks yet..!!</p>
            </div>
        )
    }

  return (
    <div>
        <div className='notes-container'>
            <ul className='list'>
            {todoText.map((item) => (
                // <TodoList key={item.id} id={item.id} text={item.text} deleteNotes={deleteNotes} />
                <TodoList key={item.id} id={item.id} text={item.text} item={item}  />
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Todo