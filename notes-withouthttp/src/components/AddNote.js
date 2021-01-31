import React from 'react';

export default function AddNote( {note, handleChange, handleSubmit}) {

    return (
        <React.Fragment>
            <form 
                onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="note"
                        onChange={ (event) => handleChange(event)}
                        value={note.note || ""}
                        placeholder="Enter a note..."
                        
                        />



                </form>
        </React.Fragment>
    )
}
