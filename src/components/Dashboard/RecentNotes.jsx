import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecentNotes.css";
import {motion} from "framer-motion";

function RecentNotes() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];

    // latest first
    setNotes(savedNotes.reverse());
  }, []);

  return (
    <motion.div className="recent-notes"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}>
      <h3>Recent Notes</h3>

      {notes.slice(0, 3).map((note) => (
        <div key={note.id} className="recent-card">
          <h4>{note.title}</h4>
          <p>{note.category}</p>
        </div>
      ))}

      <span
        className="view-all"
        onClick={() => navigate("/all-notes")}
      >
        View All →
      </span>
    </motion.div>
  );
}

export default RecentNotes;