const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No Notes Selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <div className="app-main-note-title">
          <input
            type="text"
            id="title"
            placeholder="Note Title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          />
          <select
            value={
              activeNote.category === "uncategorized"
                ? "selecet category"
                : activeNote.category
            }
            name="category"
            onChange={(e) => onEditField("category", e.target.value)}
          >
            <option value="selecet category" selected disabled hidden>
              Select category
            </option>
            <option value="personal">Personal</option>
            <option value="daily">Daily</option>
            <option value="work">Work</option>
            <option value="business">Business</option>
            <option value="family">Family</option>
          </select>
        </div>
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Main;
