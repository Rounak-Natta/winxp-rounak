import React from "react";

const DesktopIcon = ({ icon, label }) => {
  return (
    <div className="xp-icon">
      <img src={icon} className="xp-icon-img" alt={label} />
      <p className="xp-icon-label">{label}</p>
    </div>
  );
};

export default DesktopIcon;
