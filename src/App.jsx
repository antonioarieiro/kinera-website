import { useEffect } from "react";
import Aos from "aos";

import 'aos/dist/aos.css';

import About from "./components/About";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Foundation from "./components/Foundation";
import Kine from "./components/Kine";
import Mission from "./components/Mission";
import Newsletter from "./components/Newsletter";
import Participation from "./components/Participation";
import Partners from "./components/Partners";
import Struct from "./components/Struct";
import Team from "./components/Team";
import Welcome from "./components/Welcome";
import Roadmap from "./components/Rodmap";

const App = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])

    return(
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#1D1D20] font-medium">
            <Welcome />
            <About />
            <Mission />
            <Kine />
            <Struct />
            <Participation />
            <Foundation />
            <Community />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default App;
