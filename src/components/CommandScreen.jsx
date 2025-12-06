import React, { useEffect, useState } from "react";

const CommandScreen = ({ onClose }) => {
  const lines = [
  "Microsoft Windows XP [Version 5.1.2600]",
  "(C) Copyright 1985-2001 Microsoft Corp.",
  "",
  "C:\\Users\\Rounak> portfolio_diagnostics.exe",
  "",
  "Initializing diagnostic engine...",
  "[##########............] 40% Loading core modules...",
  "[######################] 100% Modules loaded.",
  "",
  "Performing system audit...",
  "✓ Frontend environment detected",
  "✓ React modules verified",
  "✓ UI rendering stable",
  "✓ No dependency conflicts found",
  "",
  "Analyzing portfolio structure...",
  "→ Scanning components...",
  "→ Checking CSS integrity...",
  "→ Validating layout consistency...",
  "[Loading.........................]",
  "✓ Structure validated successfully",
  "",
  "Running skill evaluation...",
  "→ JavaScript proficiency:      ████████████ 97%",
  "→ React expertise:             ███████████  93%",
  "→ UI/UX design sense:          ██████████   89%",
  "→ Problem solving ability:     ████████████ 98%",
  "",
  "Would you like to generate a recruiter-friendly summary? (Y/N):",
  "",
  "Generating summary...",
  "[############........] 60%",
  "[####################] 100%",
  "",
  "Summary generated successfully!",
  "",
  "Running code optimization routine...",
  "[███████████████████] 100% Complete.",
  "",
  "Finalizing system report...",
  "→ Portfolio readiness score: 95/100",
  "→ Interview confidence rating: STRONG",
  "",
  "All diagnostics completed successfully.",
  "",
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
