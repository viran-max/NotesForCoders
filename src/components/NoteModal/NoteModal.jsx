import "./NoteModal.css";

function NoteModal({ note, onClose }) {
  if (!note) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      {/* stop closing when clicking inside */}
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="modal-header">
          <h2>{note.title}</h2>

          <button onClick={onClose} className="close-btn">
            ✖
          </button>
        </div>

        {/* CATEGORY */}
        <p className="modal-category">
          {note.category}
        </p>

        {/* DESCRIPTION */}
        <p className="modal-description">
          {note.description}
        </p>

        {/* CODE */}
        <div className="modal-code">
          <pre>{note.codeSnippet}</pre>

          <button
            className="copy-btn"
            onClick={() =>
              navigator.clipboard.writeText(note.codeSnippet)
            }
          >
            Copy Code
          </button>
        </div>

      </div>

    </div>
  );
}

export default NoteModal;