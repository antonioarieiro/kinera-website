import { AiOutlineCaretDown } from "react-icons/ai";
import missionImg3 from '../../assets/images/estrelas7.png';
import Header from "../Header";

import './style.css';

import Banner from '../../assets/images/kinera-banner-ultimo.png';

const Welcome = () => {
    return (
        
        <div className=" w-full mb-10 text-[#F3F6FB]" id="home">
            <Header />
            <div className="mission-container">
            <div className="main-content">
            
            <div className="background-image" style={{backgroundImage: `url(${missionImg3})`}} />
            <div className='global-mobile'>
                <div className="content-wrapper mt-6">
                    <h1 className="kinera-title mt-9">KINERA</h1>

                    <div className="logo-section mt-20">
                        <img src={Banner} alt='BigK02' className="logo-img pulse" />
                    </div>

                    <p className="mt-6 text-[19px] text-center">
                        <span className="glitch">We are</span> a decentralised media platform where users and creators publish<br />
                        their content; help rank and curate videos and films<br />
                        from public repositories and from other media networks on the Internet.
                    </p>

                    <p className="text-[19px] text-center mt-6">
                        The process of rank and curation leads to a set of public lists with relevant content that,<br />
                        in a second interaction, will be used to create television channels.
                    </p>

                    <p className="text-[19px] text-center mt-6">
                        Kineras' mission is to harness the wisdom of the crowd to bring into focus new media narratives,<br />
                        pieces from creators that mirror the complexity and creativity of the world we live in.
                    </p>
                </div>


            </div>
        </div>
        </div>
        </div>
    );
}

export default Welcome;