import React from "react";
import Avatar from "../assets/avatar.jpeg" 
import Shutdown from '../assets/shutdown.png'
import Logoff from '../assets/logoff.png'

const StartMenu = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="xp-startmenu">
      <div className="xp-start-top">
        <img src={Avatar} alt="" />
        <h2>Rounak Natta</h2>
      </div>

      <div className="xp-start-center">
        
      </div>

      <div className="xp-start-bottom">
        <div className="start-icon-box">
            <img src={Logoff} alt="" />
            <h2>Log Off</h2>
        </div>
        <div className="start-icon-box">
            <img src={Shutdown} alt="" />
            <h2>Shut Down</h2>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
