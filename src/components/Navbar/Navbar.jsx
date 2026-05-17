import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef} from "react";

function Navbar({
  toggleTheme,
  theme,
  globalSearch,
  setGlobalSearch,
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
  const scrollContainer = document.querySelector(".main-content");

  if (!scrollContainer) return;

  let lastScrollY = scrollContainer.scrollTop;

  const handleScroll = () => {
    const currentScrollY = scrollContainer.scrollTop;
    const diff = currentScrollY - lastScrollY;

    if (diff > 5) {
      setShowNavbar(false); // down
    } else if (diff < -5) {
      setShowNavbar(true); // up
    }

    lastScrollY = currentScrollY;
  };

  scrollContainer.addEventListener("scroll", handleScroll);

  return () =>
    scrollContainer.removeEventListener("scroll", handleScroll);
}, []);

  const handleSearch = (e) => {
    const value = e.target.value;

    setGlobalSearch(value);

    navigate("/all-notes");
  };

  return (
    <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <h2 className={theme === "light" ? "light-text" : ""}>NotesForCoders</h2>

      <div className="nav-right">
        {/* Sidebar Open Button */}
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>

        {/* Global Search */}
        <input
          type="text"
          placeholder="Search your notes..."
          value={globalSearch}
          onChange={handleSearch}
        />

        {/* Theme Toggle */}
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "light"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
