import React, { useEffect, useState } from 'react'
import WelcomeLoader from "../components/WelcomeLoader"
import TaskBar from '../components/TaskBar';
import DesktopIcon from "../components/DesktopIcon";


import myComp from "../assets/mycomputer.png";
import myDocs from "../assets/mydocs.png";
import recycle from "../assets/recycle.png";
import network from "../assets/network.png";
import wallpaper from "../assets/xpwallpaper.jpg";

const HomePage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (

        <>
            {loading ? (<WelcomeLoader />) : (
                <><div
                    className="xp-desktop"
                    style={{ backgroundImage: `url(${wallpaper})` }}
                >
                    <div className="xp-icons-container">
                        <DesktopIcon icon={myComp} label="My Computer" />
                        <DesktopIcon icon={myDocs} label="My Documents" />
                        <DesktopIcon icon={network} label="About Me" />
                        <DesktopIcon icon={recycle} label="Recycle Bin" />
                    </div>

                    <TaskBar />
                </div>
                </>
            )}
        </>
    )
}

export default HomePage