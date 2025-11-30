import React, { useEffect, useState } from "react";

const TaskBar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            );
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="xp-taskbar">
            {/* Start Button */}
            <div className="xp-start-btn">
                <span className="start-text">Start</span>
            </div>

            {/* Middle (Empty Blue Zone) */}
            <div className="xp-middle" />

            {/* Right Icons + Clock */}
            <div className="xp-tray">
                <div className="tray-icons">
                    {/* You can later add icons here */}
                </div>
                <div className="tray-time">{time}</div>
            </div>
        </div>
    );
};

export default TaskBar;
