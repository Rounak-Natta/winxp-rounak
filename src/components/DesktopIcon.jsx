import React from "react";

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <div className="xp-icon" onClick={onClick}>
      <img src={icon} className="xp-icon-img" alt={label} />
      <p className="xp-icon-label">{label}</p>
    </div>
  );
};

export default DesktopIcon;
