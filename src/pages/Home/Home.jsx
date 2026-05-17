import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import Hero from "../../components/HomeSections/Hero";
import Features from "../../components/HomeSections/Features";
import Why from "../../components/HomeSections/Why";
import CTA from "../../components/HomeSections/CTA";
import Footer from "../../components/HomeSections/Footer";

import DashboardStats from "../../components/Dashboard/DashboardStats";
import QuickActions from "../../components/Dashboard/QuickActions";
import RecentNotes from "../../components/Dashboard/RecentNotes";

import "./Home.css";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <div className="home-container">
      <Sidebar {...props} />

      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar {...props} />

        {/* LANDING SECTIONS */}
        <div className="landing">
          <Hero />
          <Features />
          <Why />
          <CTA />
        </div>

        {/* DASHBOARD */}
        <section id="dashboard" className="user-dashboard">
          <h2 className="dashboard-title">Your Workspace ⚡</h2>

          <div className="dashboard-grid">
            <DashboardStats />
            <QuickActions />
          </div>

          <RecentNotes />
        </section>

        {/* FOOTER */}
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
