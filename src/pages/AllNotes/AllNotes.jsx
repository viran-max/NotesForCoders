import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NoteCard from "../../components/NoteCard/NoteCard";
import NoteModal from "../../components/NoteModal/NoteModal";
import { motion } from "framer-motion";
import "./AllNotes.css";

function AllNotes({
  toggleTheme,
  theme,
  globalSearch,
  setGlobalSearch,
  sidebarOpen,
  setSidebarOpen
}) {
  const [notes, setNotes] = useState([]);

  // MODAL STATE
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  // DELETE
  const handleDelete = (id) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  // FAVORITE
  const toggleFavorite = (id) => {
    const updated = notes.map(n =>
      n.id === id ? { ...n, favorite: !n.favorite } : n
    );

    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  // OPEN MODAL
  const openNote = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  // SEARCH (global + local)
  const finalSearch = globalSearch || searchTerm;

  const filteredNotes = notes.filter(note =>
    `${note.title} ${note.category} ${note.description} ${note.codeSnippet}`
      .toLowerCase()
      .includes(finalSearch.toLowerCase())
  );

  return (
    <div className="allnotes-container">

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-content">

        {/* NAVBAR */}
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          globalSearch={globalSearch}
          setGlobalSearch={setGlobalSearch}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* PAGE CONTENT */}
        <motion.div
          className="notes-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1>All Notes 📘</h1>

          {/* LOCAL SEARCH */}
          <input
            className="search-input"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          {/* NOTES GRID */}
          <div className="notes-grid">

            {filteredNotes.length === 0 ? (
              <p>No notes found</p>
            ) : (
              filteredNotes.map(note => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={handleDelete}
                  onToggleFavorite={toggleFavorite}
                  onOpen={openNote}
                />
              ))
            )}

          </div>

        </motion.div>
      </div>

      {/* MODAL (GLOBAL OVERLAY) */}
      {isModalOpen && selectedNote &&(
        <NoteModal
          note={selectedNote}
          onClose={closeModal}
        />
      )}

    </div>
  );
}

export default AllNotes;