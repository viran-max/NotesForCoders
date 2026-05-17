import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { motion } from "framer-motion";
import "./Categories.css";

function Categories({ toggleTheme, theme , globalSearch,setGlobalSearch,sidebarOpen,
  setSidebarOpen}) {
  const [notes, setNotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    setNotes(savedNotes);
  }, []);

  const categories = [
    "All",
    "React",
    "JavaScript",
    "Git",
    "MongoDB",
    "CSS",
    "HTML",
  ];

  const filteredNotes =
    selectedCategory === "All"
      ? notes
      : notes.filter(
          (note) =>
            note.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div className="categories-container">
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
          className="categories-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <h1>📂 Categories</h1>

          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "active" : ""}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="category-grid">
            {filteredNotes.map((note) => (
              <div key={note.id} className="category-card">
                <h2>{note.title}</h2>
                <h4>{note.category}</h4>
                <p>{note.description}</p>

                <pre>{note.codeSnippet}</pre>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Categories;
