import React, { useState, useEffect } from "react";
import Xplogo from "../assets/logowhite.png";
import Avatar from "../assets/avatar.jpeg";
import Shutdown from "../assets/Shutdown.png";

const LoginScreeen = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const endTimer = setTimeout(() => setLoading(false), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, []);

  const handleClick = () => {
    window.location.href = "/home";
  };

  return (
    <>
      {/* ---------------- LOADER SCREEN ---------------- */}
      {loading && (
        <div
          className={`h-screen w-full bg-black flex flex-col items-center justify-center
          transition-opacity duration-700 ease-out ${
            fadeOut ? "opacity-100" : "opacity-100"
          }`}
        >
          {/* XP Logo */}
          <img src={Xplogo} alt="XP Logo" className="w-75 mb-4 select-none" />

          {/* XP Loader Bar */}
          <div className="relative w-[180px] h-[18px] bg-[#0a0a0a] border border-[#4e4e4e] rounded-sm overflow-hidden">
            <div className="absolute inset-0.5 bg-black rounded-sm overflow-hidden">
              <div className="absolute top-0 left-[-60px] h-full flex items-center gap-1.5 animate-xp-bar">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-4 h-full shadow-[0_0_6px_#3c79ff] bg-gradient-to-b from-[#0a3ee2] via-[#3c8aff] to-[#0a3ee2]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- LOGIN SCREEN ---------------- */}
      {!loading && (
        <div className="login-container">
          <div className="login-top" />

          <div className="login-card">
            {/* LEFT */}
            <div className="login-card-left">
              <div className="div-content-logo">
                <img src={Xplogo} alt="XP Logo" className="xp-logo" />
              </div>
              <p className="login-text">To Begin, Click Your User Name</p>
            </div>

            {/* RIGHT */}
            <div className="login-card-right">
              <div className="user-box" onClick={handleClick}>
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
              <p>
                After you log on, you can add or change account <br />
                Just Go to Control Panel and Click User accounts
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginScreeen;
