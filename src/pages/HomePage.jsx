import React, { useEffect, useState } from 'react'
import "../assets/css/windowcss.css"
import WelcomeLoader from "../components/WelcomeLoader"
import TaskBar from '../components/TaskBar';
import DesktopIcon from "../components/DesktopIcon";
import CommandScreen from "../components/CommandScreen";

import myComp from "../assets/mycomputer.png";
import myDocs from "../assets/mydocs.png";
import recycle from "../assets/recycle.png";
import network from "../assets/network.png";
import CMD from "../assets/cmd.png";
import wallpaper from "../assets/xpwallpaper.jpg";

const HomePage = () => {

    const [loading, setLoading] = useState(true);
    const [openCMD, setOpenCMD] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (<WelcomeLoader />) : (
                <div
                    className="xp-desktop"
                    style={{ backgroundImage: `url(${wallpaper})` }}
                >
                    <div className="xp-icons-container">
                        <DesktopIcon icon={myComp} label="My Computer" />
                        <DesktopIcon icon={myDocs} label="About Me" />
                        <DesktopIcon icon={network} label="My Projects" />
                        
                        <DesktopIcon 
                            icon={CMD} 
                            label="Command Prompt" 
                            onClick={() => setOpenCMD(true)} 
                        />

                        <DesktopIcon icon={recycle} label="Recycle Bin" />
                    </div>

                    <TaskBar />

                    {openCMD && (
                        <CommandScreen onClose={() => setOpenCMD(false)} />
                    )}
                </div>
            )}
        </>
    )
}

export default HomePage
