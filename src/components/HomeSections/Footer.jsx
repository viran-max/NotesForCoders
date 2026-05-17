import "./HomeSections.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <h2>NotesForCoders</h2>

          <p>
            Organize coding knowledge beautifully. Save notes, snippets, and
            ideas in one place.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <button onClick={() => navigate("/add-note")}>Add Note</button>
          <button onClick={() => navigate("/all-notes")}>View Notes</button>
          <button onClick={() => navigate("/favorites")}>Favorites</button>
          <button onClick={() => navigate("/categories")}>Categories</button>
        </div>

        {/* FEATURES */}
        <div className="footer-column">
          <h4>Features</h4>

          <span>Smart Search</span>
          <span>Code Snippets</span>
          <span>Dark Mode</span>
          <span>Responsive UI</span>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact</h4>

          <a
            className="Footer-a"
            href="https://github.com/viran-max"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            className="Footer-a"
            href="https://www.linkedin.com/in/viran-404b13358/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a className="Footer-a" href="mailto:verain.k1801@gmail.com">Email</a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 NotesForCoders. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
