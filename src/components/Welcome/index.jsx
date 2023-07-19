import { AiOutlineCaretDown } from "react-icons/ai";

import Header from "../Header";

import './style.css';

import Banner from '../../assets/images/kinerabanner.png';

const Welcome = () => {
    return (
        <div id="home">
            <Header />

            <div className="main-content">
                <div className="content-wrapper">
                    <h1 className="kinera-title">THE KINERA PLATFORM</h1>

                    <div className="logo-section">
                        <img src={Banner} alt='BigK02' className="logo-img pulse" /> 
                    </div>

                    <p className="description">The <span class="glitch">Kinera Platform</span> is a social network dedicated to moving picture curation, </p>
                    <p className="description2">providing a framework to kick start and manage online rankings and video competitions.</p>
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
