import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:3001/display")
    .then(res => setNotes(res.data))
  },[notes]);

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            setNotes={setNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
