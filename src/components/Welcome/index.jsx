import { AiOutlineCaretDown } from "react-icons/ai";
import missionImg3 from '../../assets/images/cosmos8.png';
import Header from "../Header";
import './style.css';
import Banner from '../../assets/images/kinera-banner2.png';

const Welcome = () => {
    return (
        <div className="w-full mb-10 text-[#F3F6FB]" id="home">
            <Header />
            <div className="mission-container">
                <div className="main-content">
                    <div className="background-image2" style={{backgroundImage: `url(${missionImg3})`}} />
                    <div className='global-mobile'>
                        <div className="content-wrapper mt-6">
                            <h1 className="kinera-title" style={{ zIndex: 1 }}>KINERA</h1>
                            <div className="logo-section">
                                <img src={Banner} alt='BigK02' className="logo-img pulse" />
                            </div>
                            <p className="mt-6 text-base text-center" style={{ zIndex: 1, fontSize: '19px'  }}>
                                <span className="glitch">We are</span> a decentralised media platform where users and creators publish their content; help rank and curate videos and films from public repositories and other media networks on the Internet.
                            </p>
                            <p className="text-base text-center mt-6" style={{ zIndex: 1, fontSize: '19px' }}>
                                The process of rank and curation leads to a set of public lists with relevant content that participants will use to create television channels. 
                            </p>
                            <p className="text-base text-center mt-6" style={{ zIndex: 1, fontSize: '19px'  }}>
                                <b> Kineras' mission is to harness the wisdom of the crowd to</b> bring focus into new media narratives, where creators can mirror the complexity and creativity of people's interactions in the world we live in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;