import React, { useEffect, useState } from "react";
import StartIcon from "../assets/starticon.png";
import StartMenu from "./StartMenu";

const TaskBar = () => {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="xp-taskbar">

        {/* START BUTTON */}
        <div
          className="xp-start-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src={StartIcon} alt="start" />
          <span className="start-text">Start</span>
        </div>

        {/* MID EMPTY SPACE */}
        <div className="xp-middle" />

        {/* SYSTEM TRAY */}
        <div className="xp-tray">
          <div className="tray-icons"></div>
          <div className="tray-time">{time}</div>
        </div>
      </div>

      {/* START MENU */}
      <StartMenu visible={menuOpen} />
    </>
  );
};

export default TaskBar;
