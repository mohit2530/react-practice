import React from 'react';
import moment from 'moment';
export default function NotesList( {allNotes, addNoteContent, handleClick} ) {

    if (allNotes.length === 0) {
        return (
            <React.Fragment>
                <div className="default-center-lst" >
                    {addNoteContent.noteHeader}
                </div>
            </React.Fragment>
        )
    }
    else {  
        return (
            <React.Fragment>
                <div className="default-center-lst" >
                    {allNotes.map( ({id, note, modifiedDate}) => (
    
                        <div 
                            key={id}
                            className="note-lst"
                            >
                            <p
                                onClick={handleClick}
                                >
                                {note}
                            </p>
                            <p>
                                {moment(modifiedDate).fromNow() || "" }
                            </p>
                        </div>
    
                    ))}
                </div>
    
            </React.Fragment>
        )
    }
}
