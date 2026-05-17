import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { motion } from "framer-motion";
import "./Favorites.css";

function Favorites({ toggleTheme, theme, globalSearch, setGlobalSearch ,sidebarOpen,
  setSidebarOpen}) {
  const [favoriteNotes, setFavoriteNotes] = useState([]);

  const loadFavorites = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const onlyFavorites = savedNotes.filter((note) => note.favorite === true);

    setFavoriteNotes(onlyFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="favorites-container">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
          className="favorites-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <h1>⭐ Favorite Notes</h1>

          {favoriteNotes.length === 0 ? (
            <p>No favorite notes yet.</p>
          ) : (
            <div className="favorites-grid">
              {favoriteNotes.map((note) => (
                <div key={note.id} className="favorite-card">
                  <h2>{note.title}</h2>
                  <h4>{note.category}</h4>
                  <p>{note.description}</p>

                  <pre>{note.codeSnippet}</pre>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Favorites;
