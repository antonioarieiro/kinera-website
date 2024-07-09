import Header from "../Header";
import './style.css';
import Banner from '../../assets/images/kinera-banner2.png';

const Welcome = () => {
    return (
        <div className="w-full mb-20 text-[#F3F6FB]" id="home">
            <Header />
            <div className="mission-container">
                <div className="main-content">
                    <div className="background-image2"  />
                    <div className='global-mobile'>
                        <div className="content-wrapper mt-0">
                            
                            <div className="logo-section">
                                <img src={Banner} alt='BigK02' className="logo-img pulse" />
                            </div>
                            <h1 className="kinera-title " style={{ zIndex: 1, color: "#351e2d" }}>KINERA</h1>
                            <div className="card-home mt-6" data-aos="">
                            <p className="mt-0 text-base text-justify" style={{ zIndex: 1, fontSize: '16px', color: "#351e2d"  }}>
                                <span className="glitch">Kinera</span> is a media portal for transformative ideas and social progress, an open and resilient curation ecosystem uniting a diverse community of viewers and nonconformist media creators.
                            </p>
                            </div>
                            <div className="card-home" data-aos="">
                            <p className="text-base text-justify -mt-0" style={{ zIndex: 1, fontSize: '16px', color: "#351e2d" }}>
                            We aim to stimulate the dialogue in media communities between those groups that are capable of addressing complex challenges and communicating them to vast audiences. Kinera promotes innovative methodologies and practices and it’s committed to continuous improvement and real-world problem-solving.   
                            </p>
                            </div>
                            <div className="card-home" data-aos="">
                            <p className="text-base text-justify -mt-0" style={{ zIndex: 1, fontSize: '16px', color: "#351e2d"  }}>
                            Kinera has a visionary approach and the concepts of innovation and community at its core. We support a holistic vision of prosperity that serves both man and nature.   
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;