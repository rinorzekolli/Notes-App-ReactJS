import { useState } from "react";
const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const filterCategories =
    categoryFilter !== "all"
      ? notes.filter((e) => e.category === categoryFilter)
      : notes;

  const sortedNotes =
    searchFilter.length > 2
      ? filterCategories.filter((e) => e.title.includes(searchFilter))
      : filterCategories;

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes App</h1>

        <button onClick={onAddNote}>Add New</button>
      </div>
      <input
        className="app-input-search"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <select
        name="category"
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="selecet category" selected disabled hidden>
          Find Notes
        </option>
        <option value="all">All Notes</option>
        <option value="daily">Daily Notes</option>
        <option value="personal">Personal Notes</option>
        <option value="work">Work Notes</option>
        <option value="business">Business Notes</option>
        <option value="family">Family Notes</option>
      </select>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Remove</button>
            </div>

            <p>{note.body && note.body.substr(0, 30) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(note.lastModified).toLocaleDateString("sq-AL", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
            <small>{note.category}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
