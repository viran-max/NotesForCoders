import { useNavigate } from "react-router-dom";
import "./HomeSections.css";
import { motion } from "framer-motion";

function CTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="section cta"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Start Organizing Your Notes Today 🚀</h1>

      <p>
        Stop wasting time searching. Keep everything structured, searchable, and
        accessible in one place.
      </p>

      <button onClick={() => navigate("/add-note")}>Get Started</button>
    </motion.section>
  );
}

export default CTA;
