import React from 'react';
import { NavLink, Link } from "react-router";
const NotesList = ({ notes, onDeleteNote }) => {
    return (
        <div className="grid grid-flow-row  col-span-7 grid-cols-subgrid  gap-2  grid-rows-subgrid row-span-full row-start-4">
            
            {notes.map(note => (
                <div key={note._id} className="p-4 border rounded shadow  col-span-2 grid ">
                   
                    <h2 className="text-xl font-semibold row-span-1">{note.title}
                        {(note.title.length >30)?" ...":""}
                    </h2>
                    <p className='row-span-2'>{note.content.substring(0,30)}
                    {(note.content.length >30)?" ...":""}
                    </p>
                    <div className="text-sm text-gray-500 row-span-1">{note.tags.join(', ')}</div>
                     {/* <NavLink className="mt-2 text-red-500 row-span-1 col-span-1 justify-self-center w-30" to={`/edit/${note._id}`}>Edit</NavLink> */}
                    
                    <button className="mt-2 text-red-500 row-span-1 col-span-1 justify-self-center w-30"  onClick={() => onDeleteNote(note._id)}>Delete</button>
                    
                </div>
            ))}
        </div>
    );
};

export default NotesList;
