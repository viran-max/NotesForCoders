import { motion } from "framer-motion";
import "./HomeSections.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const featuresData = [
  {
    title: "Smart Search",
    desc: "Quickly find any note with powerful search across title, category, and code.",
    icon: "🔍",
  },
  {
    title: "Code Snippets",
    desc: "Store and reuse your code with proper formatting and easy copy.",
    icon: "💻",
  },
  {
    title: "Category Filter",
    desc: "Organize notes by categories and access them instantly.",
    icon: "📂",
  },
  {
    title: "Favorites",
    desc: "Mark important notes and access them faster anytime.",
    icon: "⭐",
  },
  {
    title: "Clean UI",
    desc: "Distraction-free design to focus only on your learning.",
    icon: "✨",
  },
  {
    title: "Local Storage",
    desc: "Your notes are saved safely in your browser without backend.",
    icon: "💾",
  },
];

function Features() {
  return (
    <section className="section features">
      
      {/* Heading */}
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1>Powerful Features ⚡</h1>
        <p>
          Everything you need to organize your coding knowledge efficiently.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="features-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={item}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}

export default Features;