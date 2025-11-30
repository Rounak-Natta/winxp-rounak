import React from "react";

const StartMenu = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="xp-startmenu">

      {/* LEFT BLUE BAR */}
      <div className="xp-startmenu-left">
        <div className="xp-user-box">
          <img
            src="https://i.imgur.com/4ZQZ4Zy.png"
            alt="User"
            className="xp-user-avatar"
          />
          <p className="xp-username">Rounak</p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="xp-startmenu-right">

        {/* PROGRAMS */}
        <div className="xp-section">
          <h4 className="xp-section-title">Programs</h4>

          <ul className="xp-menu-list">
            <li>Accessories</li>
            <li>Notepad</li>
            <li>Paint</li>
            <li>Internet Explorer</li>
            <li>Windows Media Player</li>
          </ul>
        </div>

        <div className="xp-divider"></div>

        {/* SYSTEM SHORTCUTS */}
        <div className="xp-section">
          <ul className="xp-menu-list">
            <li>My Documents</li>
            <li>My Pictures</li>
            <li>My Computer</li>
            <li>Control Panel</li>
            <li>Run...</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default StartMenu;
