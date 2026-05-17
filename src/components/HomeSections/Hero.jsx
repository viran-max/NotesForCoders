import "./HomeSections.css";
import {motion} from "framer-motion";

function Hero() {
  const scrollToDashboard = () => {
    const section = document.getElementById("dashboard");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="section hero"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Organize Your Coding Notes Like a Pro 🚀</h1>

      <p>
        Save, search, and manage your coding knowledge in one place.
      </p>

      <div className="hero-buttons">
        <button onClick={scrollToDashboard}>
          Go to Workspace ⚡
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;