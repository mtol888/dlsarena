import React from "react";
import '../App.css';
import { 
    FaHome, FaShieldAlt, FaTrophy, FaShoppingCart, 
    FaQuestionCircle, FaCommentDots, FaSignInAlt, FaUserPlus 
} from "react-icons/fa";
import dlslogo from '../Images/dlslogo.png';
const SideBar = () => {
    return(
        <div className="sidebar">
            <img src={dlslogo} style=
            {
                {
                    padding: 20
                }
            }/>
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
}

export default SideBar