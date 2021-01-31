import React, { useState } from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';
import {titleContent, addNoteContent} from '../util/content';
import uuid from 'uuid';

export default function NotesMain() {

    const [note, setNote] = useState({}),
        [allNotes, setAllNotes] = useState([]),

    handleChange = ({ target }) => {

        let {name, value} = target;
        setNote( (previousNote) => ({
            ...previousNote, 
            id: uuid(),
            [name]: value,
            createdDate: new Date().toTimeString(),
            modifiedDate: new Date().toISOString()
        }));
    },

    handleSubmit = (event) => {
        event.preventDefault();
        setAllNotes( (previousAllNotes) => ([...previousAllNotes, note]))
        setNote({});
        console.log(note.id)
    },

    // marking as completed
    handleClick = ( {target} ) => {
        target.classList.toggle("completed");
    };


    return (
        <React.Fragment>

            <h2> {titleContent.title} </h2>

            <NotesList 
                allNotes={allNotes}
                addNoteContent={addNoteContent}
                handleClick={handleClick}

            />

            <AddNote 
                note={note}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />

        </React.Fragment>
    )

}
