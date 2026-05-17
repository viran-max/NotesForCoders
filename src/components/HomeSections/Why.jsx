import "./HomeSections.css";
import { motion } from "framer-motion";
function Why() {
  return (
    <motion.section
      className="section why"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Why NotesForCoders? 🤔</h1>

      <p>
        Developers often struggle with scattered notes across notebooks, files,
        and apps. NotesForCoders helps you keep everything in one organized
        system — so you focus more on coding and less on searching.
      </p>
    </motion.section>
  );
}

export default Why;
