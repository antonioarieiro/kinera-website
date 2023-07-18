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
                    <h1 className="kinera-title">KINERA</h1>

                    <div className="logo-section">
                        <img src={Banner} alt='BigK02' className="logo-img pulse" /> 
                    </div>

                    <p className="description">A social network for moving pictures curation, a framework to kick-start</p>
                    <p className="description2">and manage online film and video competitions</p>
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
