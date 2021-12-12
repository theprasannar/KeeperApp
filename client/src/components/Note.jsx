import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";


function Note(props) {
  function deleteNote(id) {
    axios.post("http://localhost:3001/delete",{id}).then(res => props.setNotes(res.data))
   
   }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>deleteNote(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
