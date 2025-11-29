import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import xpLogo from "../assets/xplogo.png";

const LoaderScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000); // Redirect after 2 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
      {/* XP Logo */}
      <img src={xpLogo} alt="XP Logo" className="w-75 mb-4 select-none" />

      {/* XP Loader Bar */}
      <div className="relative w-[180px] h-[18px] bg-[#0a0a0a] border border-[#4e4e4e] rounded-sm overflow-hidden">
        {/* Inner Border */}
        <div className="absolute inset-[2px] bg-black rounded-sm overflow-hidden">
          {/* Sliding Blue Bars */}
          <div className="absolute top-0 left-[-60px] h-full flex items-center gap-[6px] animate-xp-bar">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="w-[16px] h-full shadow-[0_0_6px_#3c79ff] bg-gradient-to-b from-[#0a3ee2] via-[#3c8aff] to-[#0a3ee2]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;
