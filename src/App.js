import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./pages/Main";
import Sidebar from "./pages/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Note Title",
      body: "",
      categoy: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatetNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatetNote;
      }

      return note;
    });
    setNotes(updatedNotesArray);
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
