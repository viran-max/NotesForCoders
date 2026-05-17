import { useEffect, useState } from "react";
import "./DashboardStats.css";
import { motion } from "framer-motion";

function DashboardStats() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const totalNotes = notes.length;
  const favorites = notes.filter((n) => n.favorite).length;
  const categories = [
    ...new Set(notes.map((n) => n.category))
  ].length;

  // ✅ DATA ARRAY (MAIN FIX)
  const stats = [
    {
      value: totalNotes,
      label: "Total Notes",
    },
    {
      value: favorites,
      label: "Favorites",
    },
    {
      value: categories,
      label: "Categories",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="stat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default DashboardStats;