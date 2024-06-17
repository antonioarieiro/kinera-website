import Header from "../Header";
import './style.css';
import Banner from '../../assets/images/kinera-banner2.png';

const Welcome = () => {
    return (
        <div className="w-full mb-10 text-[#F3F6FB]" id="home">
            <Header />
            <div className="mission-container">
                <div className="main-content">
                    <div className="background-image2"  />
                    <div className='global-mobile'>
                        <div className="content-wrapper mt-0">
                            
                            <div className="logo-section">
                                <img src={Banner} alt='BigK02' className="logo-img pulse" />
                            </div>
                            <h1 className="kinera-title" style={{ zIndex: 1, color: "#351e2d" }}>KINERA</h1>
                            <p className="mt-6 text-base text-center" style={{ zIndex: 1, fontSize: '19px', color: "#351e2d"  }}>
                                <span className="glitch">We are</span> a decentralised media platform where users and creators publish their content; help rank and curate videos and films from public repositories and other media networks on the Internet.
                            </p>
                            <p className="text-base text-center mt-6" style={{ zIndex: 1, fontSize: '19px', color: "#351e2d" }}>
                            The process of rank and curation produces publicly accessible lists filled with relevant content that participants can remix to create Streaming Channels.
                            </p>
                            <p className="text-base text-center mt-6" style={{ zIndex: 1, fontSize: '19px', color: "#351e2d"  }}>
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