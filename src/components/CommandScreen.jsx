import React, { useEffect, useState } from "react";

const CommandScreen = ({ onClose }) => {
  const lines = [
    "Microsoft Windows XP [Version 5.1.2600]",
    "(C) Copyright 1985-2001 Microsoft Corp.",
    "",
    "C:\\Users\\Rounak> system_check.exe",
    "Initializing system diagnostic...",
    "[##########........] 45% Loading modules...",
    "[##################] 100% Complete.",
    "Performing environment scan...",
    "✓ CPU check passed",
    "✓ Memory check passed",
    "✓ Network check passed",
    "✓ UI components verified",
    "",
    "Would you like to generate a project summary? (Y/N):",
    "",
    "Generating summary...",
    "[Loading.........................]",
    "Summary generated successfully!",
    "",
    "Would you like to run interface optimization? (Y/N):",
    "",
    "Optimizing UI performance...",
    "[██████████████████] 100%",
    "",
    "All tasks completed successfully.",
    "C:\\Users\\Rounak>"
  ];

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, lines[index]]);
      index++;

      if (index === lines.length) clearInterval(interval);
    }, 580); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cmd-window">
      <div className="cmd-title-bar">
        <span>C:\\Users\\Rounak\\SYSTEM32\cmd.exe </span>
        <button className="cmd-close-btn" onClick={onClose}>X</button>
      </div>

      <div className="cmd-body">
        <pre>
{displayed.join("\n")}
        </pre>
      </div>
    </div>
  );
};

export default CommandScreen;
