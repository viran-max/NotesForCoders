import { useNavigate } from "react-router-dom";
import "./QuickActions.css";
import { motion } from "framer-motion";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="quick-actions"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <button onClick={() => navigate("/add-note")}>➕ Add Note</button>

      <button onClick={() => navigate("/all-notes")}>📘 View Notes</button>

      <button onClick={() => navigate("/categories")}>📂 Categories</button>
    </motion.div>
  );
}

export default QuickActions;
