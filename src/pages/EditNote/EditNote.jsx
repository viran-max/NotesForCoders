import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { motion } from "framer-motion";
import "./EditNote.css";

function EditNote({ toggleTheme, theme, globalSearch, setGlobalSearch ,sidebarOpen,
  setSidebarOpen}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const currentNote = savedNotes.find((note) => note.id === Number(id));

    if (currentNote) {
      setTitle(currentNote.title);
      setCategory(currentNote.category);
      setDescription(currentNote.description);
      setCodeSnippet(currentNote.codeSnippet);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = savedNotes.map((note) =>
      note.id === Number(id)
        ? {
            ...note,
            title,
            category,
            description,
            codeSnippet,
          }
        : note,
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    alert("Note Updated Successfully 🚀");

    navigate("/all-notes");
  };

  return (
    <div className="addnote-container">
      <Sidebar sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}/>

      <div className="main-content">
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          globalSearch={globalSearch}
          setGlobalSearch={setGlobalSearch}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <motion.div
          className="addnote-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <h1>Edit Note ✏️</h1>

          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <textarea
              placeholder="Code Snippet"
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
            />

            <button type="submit">Update Note</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default EditNote;
