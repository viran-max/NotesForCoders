import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { motion } from "framer-motion";
import "./AddNote.css";

function AddNote({ toggleTheme, theme, globalSearch,setGlobalSearch,sidebarOpen,
  setSidebarOpen}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      category,
      description,
      codeSnippet,
      favorite: false,
    };

    // Get old notes
    const oldNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add new note
    const updatedNotes = [...oldNotes, newNote];

    // Save again
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    alert("Note Saved Successfully ✅");

    // Clear form
    setTitle("");
    setCategory("");
    setDescription("");
    setCodeSnippet("");
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
          transition={{ duration: 0.5 }}
        >
          <h1>Add New Note 🚀</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <textarea
              placeholder="Write description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <textarea
              placeholder="Paste code snippet here..."
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
            />

            <button type="submit">Save Note</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default AddNote;
