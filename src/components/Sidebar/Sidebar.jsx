import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* BACKDROP */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className={sidebarOpen ? "sidebar active" : "sidebar"}>
        
        {/* CLOSE BUTTON */}
        <button
          className="close-sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <h2>Discover 🧭</h2>

        <nav>
          <NavLink to="/" onClick={() => setSidebarOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/add-note" onClick={() => setSidebarOpen(false)}>
            Add Note
          </NavLink>

          <NavLink to="/all-notes" onClick={() => setSidebarOpen(false)}>
            All Notes
          </NavLink>

          <NavLink to="/favorites" onClick={() => setSidebarOpen(false)}>
            Favorites
          </NavLink>

          <NavLink to="/categories" onClick={() => setSidebarOpen(false)}>
            Categories
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;