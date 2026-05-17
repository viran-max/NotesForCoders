import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import AddNote from "./pages/AddNote/AddNote";
import AllNotes from "./pages/AllNotes/AllNotes";
import Favorites from "./pages/Favorites/Favorites";
import Categories from "./pages/Categories/Categories";
import EditNote from "./pages/EditNote/EditNote";

function App() {
  const [theme, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Global Search State
  const [globalSearch, setGlobalSearch] = useState("");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleTheme={toggleTheme}
              theme={theme}
              globalSearch={globalSearch}
              setGlobalSearch={setGlobalSearch}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />

        <Route
          path="/add-note"
          element={
            <AddNote
              toggleTheme={toggleTheme}
              theme={theme}
              globalSearch={globalSearch}
              setGlobalSearch={setGlobalSearch}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />

        <Route
          path="/all-notes"
          element={
            <AllNotes
              toggleTheme={toggleTheme}
              theme={theme}
              globalSearch={globalSearch}
              setGlobalSearch={setGlobalSearch}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              toggleTheme={toggleTheme}
              theme={theme}
              globalSearch={globalSearch}
              setGlobalSearch={setGlobalSearch}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />

        <Route
          path="/categories"
          element={
            <Categories
              toggleTheme={toggleTheme}
              theme={theme}
              globalSearch={globalSearch}
              setGlobalSearch={setGlobalSearch}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />

        <Route
          path="/edit-note/:id"
          element={
            <EditNote
              toggleTheme={toggleTheme}
              theme={theme}
              globalSearch={globalSearch}
              setGlobalSearch={setGlobalSearch}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
