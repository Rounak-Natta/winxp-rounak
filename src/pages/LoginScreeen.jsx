import React from "react";
import Xplogo from "../assets/xplogo.png";
import Avatar from "../assets/avatar.jpeg";

const LoginScreeen = () => {
  return (
    <div className="login-container">
      <div className="login-top" />

      <div className="login-card">
        {/* LEFT SIDE */}
        <div className="login-card-left">
          <img src={Xplogo} alt="XP Logo" className="xp-logo" />
          <p className="login-text">To begin, click your user name</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-card-right">
          <div className="user-box">
            <img src={Avatar} alt="User Avatar" className="avatar" />
            <h5 className="username">Rounak Natta</h5>
          </div>
        </div>
      </div>

      <div className="login-down" />
    </div>
  );
};

export default LoginScreeen;
