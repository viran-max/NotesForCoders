import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={sidebarOpen ? "sidebar active" : "sidebar"}>
      <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
        ✕
      </button>
      <h2>Discover 🧭</h2>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/add-note">Add Note</NavLink>
        <NavLink to="/all-notes">All Notes</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
