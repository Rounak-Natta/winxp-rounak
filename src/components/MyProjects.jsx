import React from "react";
import "../assets/css/windowcss.css";

const projects = [
  "Portfolio Website",
  "React Dashboard",
  "XP Clone UI",
  "Chat App",
  "Game Project",
  "Machine Learning Demo",
];

const MyProjects = ({ onClose }) => {
  return (
    <div className="portfolio-window">
        <div className="cmd-title-bar">
        <span>My Projects </span>
        <button className="cmd-close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default MyProjects;

