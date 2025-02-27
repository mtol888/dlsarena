import React from "react";
import { motion } from "framer-motion";
import { 
  FaHome, FaShieldAlt, FaTrophy, FaShoppingCart, 
  FaQuestionCircle, FaCommentDots, FaSignInAlt, FaUserPlus 
} from "react-icons/fa";
import "./App.css";
import hpbg from "./backgrounds/hpbg2.png"; // ✅ Import the image

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">DLS Arena</h2>
      <ul className="sidebar-menu">
        <li><FaHome className="icon" /><a href="#home">Home</a></li>
        <li><FaShieldAlt className="icon" /><a href="#arena">Arena</a></li>
        <li><FaTrophy className="icon" /><a href="#leaderboard">Leaderboard</a></li>
        <li><FaShoppingCart className="icon" /><a href="#marketplace">Marketplace</a></li>
        <li><FaQuestionCircle className="icon" /><a href="#help">Help Center</a></li>
        <li><FaCommentDots className="icon" /><a href="#feedback">Feedback</a></li>
        <li className="sidebar-footer">
          <FaSignInAlt className="icon" /><a href="#login">Login</a>
        </li>
        <li className="sidebar-footer">
          <FaUserPlus className="icon" /><a href="#signup">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="main-content">
      {/* Top Section with Background */}
      <div 
        className="top-section"
        style={{
          backgroundImage: `url(${hpbg})`,  
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          width: "100%",
        }}
      ></div>

      {/* Dropdown Section Below */}
      <div className="dropdown-container">
        <div className="dropdown">
          <img src="apex-legends.png" alt="Apex Legends" className="game-icon" />
          <select>
            <option>Apex Legends</option>
            <option>Call of Duty</option>
            <option>Valorant</option>
          </select>
        </div>

        <div className="dropdown">
          <select>
            <option>Any Region</option>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia</option>
          </select>
        </div>

        <div className="dropdown">
          <select>
            <option>Any Platform</option>
            <option>PC</option>
            <option>PlayStation</option>
            <option>Xbox</option>
          </select>
        </div>
      </div>

      {/* Hero Section Below */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mt-10 p-6"
      >
        <h2 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">Welcome to DLS Arena</h2>
        <p className="text-lg text-gray-300 mt-4">Battle, strategize, and dominate the competition.</p>
        <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-full text-lg shadow-lg">
          Enter the Arena
        </button>
      </motion.div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <HomePage />
    </div>
  );
};

export default App;
