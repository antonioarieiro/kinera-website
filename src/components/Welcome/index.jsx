import { AiOutlineCaretDown } from "react-icons/ai";

import Header from "../Header";

import './style.css';

import Banner from '../../assets/images/kinera-banner.png';

const Welcome = () => {
    return (
        <div className="w-full mb-25 text-[#F3F6FB]" id="home">
            <Header />
            <div className="main-content">
                <div className="content-wrapper">
                    <h1 className="kinera-title">THE KINERA PLATFORM</h1>

                    <div className="logo-section mt-10">
                        <img src={Banner} alt='BigK02' className="logo-img pulse" />
                    </div>

                    <p className="text-[19px] text-center">
                        <span className="glitch">We are</span> a decentralised media platform where users and creators publish<br />
                        their content; help rank and curate videos and films<br />
                        from public repositories and from other media networks on the Internet.
                    </p>

                    <p className="text-[19px] text-center mt-5">
                        The process of rank and curation leads to a set of public lists with relevant content that,<br />
                        in a second interaction, will be used to create television channels.
                    </p>

                    <p className="text-[19px] text-center mt-5">
                        Kineras' mission is to harness the wisdom of the crowd to bring into focus new media narratives,<br />
                        pieces from creators that mirror the complexity and creativity of the world we live in.
                    </p>
                </div>

                <div className="button-wrapper ">
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