import { AiOutlineCaretDown } from "react-icons/ai";

import Header from "../Header";

import './style.css';

import Banner from '../../assets/images/kinerabanner.png';

const Welcome = () => {
    return (
        <div className="w-full mb-12 text-[#F3F6FB]"
            id="home"
        >

            <Header />

            <div className="main-content">
                <div className="content-wrapper">
                    <h1 className="kinera-title">THE KINERA PLATFORM</h1>

                    <div className="logo-section">
                        <img src={Banner} alt='BigK02' className="logo-img pulse" />
                        
                    </div>
                    <p className="text-[19px] text-center mt-10" ><span class="glitch">Kinera</span> is a media platform where creators and viewers meet to view, curate and create  audiovisual content and films.</p>
                    <p className="text-[19px] text-center -mt-0" >Kineras' mission is to harness the wisdom of the crowd to bring into focus new narratives and interests that mirror</p>
                    <p className="text-[19px] " >the complexity and creativity of the world we live in.  </p>
                </div>

                <div className="button-wrapper">
                    <a className="info-button" href="/#about">
                        <AiOutlineCaretDown className="icon" />
                        <p>Know more</p>
                        <AiOutlineCaretDown className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;