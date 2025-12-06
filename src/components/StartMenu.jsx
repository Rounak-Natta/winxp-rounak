import React from "react";
import Avatar from "../assets/avatar.jpeg" 
import Shutdown from '../assets/shutdown.png'
import Logoff from '../assets/logoff.png'
import Network from '../assets/network.png'
import Paint from '../assets/paint.png'
import Mail from '../assets/mail.png'
import Docs from '../assets/mydocs.png'
import Notepad from '../assets/notepad.png'
import Player from '../assets/player.png'
import AllPrg from '../assets/allprg.png'
import Insta from '../assets/insta.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import AdobePDF from '../assets/adobepdf.png'
import ControlPanel from '../assets/controlpanel.png'
import CMD from '../assets/cmd.png'
import Run from '../assets/run.png'

const StartMenu = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="xp-startmenu">
      <div className="xp-start-top">
        <img src={Avatar} alt="" />
        <h2>Rounak Natta</h2>
      </div>

      <div className="xp-start-center">
        <div className="xp-center-left">
          <div className="center-left-box">
            <img src={Network} alt="" />
            <h3>My Projects </h3>
          </div>
          <div className="center-left-box">
            <img src={Mail} alt="" />
            <h3>Contact Me </h3>
          </div>
          <div className="center-left-box">
            <img src={Docs} alt="" />
            <h4>About Me </h4>
          </div>
          <div className="center-left-box">
            <img src={Notepad} alt="" />
            <h4>Notepad</h4>
          </div>
          <div className="center-left-box">
            <img src={Player} alt="" />
            <h4>Media Player </h4>
          </div>
          <div className="center-left-box nmb">
            <img src={Paint} alt="" />
            <h4>Ms Paint </h4>
          </div>
          <div className="all-programs-box">
            <h2>All Programs</h2>
            <img src={AllPrg} alt="" />
          </div>
        </div>
        <div className="xp-center-right">
          <div className="start-right-social">
            <div className="social-box">
              <img src={Insta} alt="" />
              <h3>Instagram</h3>
            </div>
            <div className="social-box">
              <img src={Linkedin} alt="" />
              <h3>LinkedIn</h3>
            </div>
            <div className="social-box">
              <img src={Github} alt="" />
              <h3>Github</h3>
            </div>
            <div className="social-box">
              <img src={AdobePDF} alt="" />
              <h3>My Resume</h3>
            </div>
            <div className="social-box">
              <img src={ControlPanel} alt="" />
              <h4>Control Panel</h4>
            </div>
            <div className="social-box">
              <img src={CMD} alt="" />
              <h4>Command Prompt</h4>
            </div>
            <div className="social-box">
              <img src={Run} alt="" />
              <h4>Run</h4>
            </div>
          </div>
        </div>
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
