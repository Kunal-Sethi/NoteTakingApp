import { useState } from 'react';
import React from 'react'
import { useContext } from 'react';
import NotesContext from '../context/NotesContext';

function AddNotes() {

    const {handleAdd, addText, setAddText, id} = useContext(NotesContext);
    // const [addText, setAddText] = useState('');

  return (
    <div className='add-notes'>
        <input onChange={e => setAddText(e.target.value)} type="text" value={addText} />
        {/* <button onClick={() => hanldeAdd(addText)}>Add</button> */}
        <button onClick={() => handleAdd(addText)}>Add</button>
    </div>
  )
}

export default AddNotes