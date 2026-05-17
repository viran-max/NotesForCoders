import "./NoteCard.css";
import { useNavigate } from "react-router-dom";

function NoteCard({
  note,
  onDelete,
  onToggleFavorite,
  onOpen
}) {
  const navigate = useNavigate();

  return (
    <div className="note-card">

      {/* TOP HEADER */}
      <div className="note-top">
        <h2 onClick={() => onOpen(note)}>
          {note.title}
        </h2>

        <button
          className="fav-btn"
          onClick={() => onToggleFavorite(note.id)}
        >
          {note.favorite ? "⭐" : "☆"}
        </button>
      </div>

      {/* CATEGORY */}
      <p className="category">{note.category}</p>

      {/* DESCRIPTION */}
      <p className="description">
        {note.description}
      </p>

      {/* CODE BLOCK */}
      <div className="code-box">
        <pre>{note.codeSnippet}</pre>

        <button
          className="copy-btn"
          onClick={() =>
            navigator.clipboard.writeText(note.codeSnippet)
          }
        >
          Copy
        </button>
      </div>

      {/* ACTIONS */}
      <div className="actions">

        <button
          className="delete-btn"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>

        <button
          className="edit-btn"
          onClick={() =>
            navigate(`/edit-note/${note.id}`)
          }
        >
          Edit
        </button>

      </div>

    </div>
  );
}

export default NoteCard;