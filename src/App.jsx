import React, { useState, useEffect } from 'react';
import Aos from "aos";

import 'aos/dist/aos.css';

import About from "./components/About";
import Community from "./components/Community";
//import Foundation from "./components/Foundation";
import Kine from "./components/Kine";
//import Mission from "./components/Mission";
import Newsletter from "./components/Newsletter";
import Participation from "./components/Participation";
import Struct from "./components/Struct";
import Welcome from "./components/Welcome";
import Subscribe from "./components/Subscribe";
import Social from "./components/Social/index.jsx";
import Funding from "./components/Funding/index.jsx";
import Blog from "./components/Blog";

const App = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });

        const updateProgress = () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollPosition / totalHeight) * 100;
            setProgressValue(progress);
        };

        window.addEventListener('scroll', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return(
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] font-medium">
            <progress value={progressValue} max="100" className="fixed bottom-0 w-full"></progress>
            <Welcome />
            <About />
            {/*<Mission />*/}
            <Struct />
            <Participation />
            <Community />
            <Kine />
            {/*<Foundation />*/}
            <Funding />
            <Blog />
            <div className="relative w-full flex items-center justify-center">
                <Newsletter openModal={openModal} setOpenModal={setOpenModal}/>
                {openModal && <Subscribe openModal={openModal} setOpenModal={setOpenModal}/>}
            </div>
            <Social />
        </div>
    )
}

export default App;