import React from "react";
import Xplogo from "../assets/xplogo.png";
import Avatar from "../assets/avatar.jpeg";
import Shutdown from "../assets/Shutdown.png";

const LoginScreeen = () => {
  return (
    <div className="login-container">
      <div className="login-top" />

      <div className="login-card">
        {/* LEFT SIDE */}
        <div className="login-card-left">
          <div className="div-content-logo">
            <img src={Xplogo} alt="XP Logo" className="xp-logo" />
          </div>
          <p className="login-text">To Begin, Click Your User Name</p>
        </div>
        {/* RIGHT SIDE */}
        <div className="login-card-right">
          <div className="user-box">
            <img src={Avatar} alt="User Avatar" className="avatar" />
            <div className="username-text-box">
              <h5 className="username">Rounak Natta</h5>
              <p className="username-text">4 Programs are running</p>
            </div>
          </div>
        </div>
      </div>

     <div className="login-down">
      <div className="bottom-tab-left">
        <img src={Shutdown} alt="" />
        <h4>Turn Off Computer</h4>
      </div>
      <div className="bottom-tab-right">
        <p>After you log on, you can add or change account <br />
        Just Go to Control Panel and Click User accounts</p>
      </div>
     </div>
    </div>
  );
};

export default LoginScreeen;
