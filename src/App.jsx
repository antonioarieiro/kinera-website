import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import About from "./components/About";
import Community from "./components/Community";
import Kine from "./components/Kine";
import Newsletter from "./components/Newsletter";
import Participation from "./components/Participation";
import Struct from "./components/Struct";
import Welcome from "./components/Welcome";
import Social from "./components/Social/index.jsx";
import Funding from "./components/Funding/index.jsx";
import Blog from "./components/Blog";
import NewsletterPage from './components/Newsletter/NewsletterPage';

const App = () => {
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
        <Router>
            <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] font-medium">
                <progress value={progressValue} max="100" className="fixed bottom-0 w-full"></progress>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Welcome />
                            <About />
                            <Struct />
                            <Participation />
                            <Community />
                            <Kine />
                            <Funding />
                            <Blog />
                            <div className="relative w-full flex items-center justify-center">
                                <Newsletter />
                            </div>
                            <Social />
                        </>
                    } />
                    <Route path="/newsletter" element={<NewsletterPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;