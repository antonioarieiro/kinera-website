import Header from "../Header";
import './style.css';
import Banner from '../../assets/images/kinera_logo_dapp_.png';

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
                            <h1 className="kinera-title mt-12" style={{ zIndex: 1, color: "#3c1e11" }}>KINERA</h1>
                            <div className="card-home mt-12" data-aos="">
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <span className="glitch">Kinera</span> is a media portal for transformative ideas and social progress - an open and resilient curation ecosystem that unites consumers with communities of innovative media creators.
                            </p>
                            </div>
                            <div className="card-home" data-aos="">
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            We aim to stimulate dialogue among participants and offer a space for collaborative work between media builders capable of addressing complex challenges and communicating them to vast audiences. Kinera promotes innovative methodologies and practices and is committed to continuously improving its tools and problem-solving capabilities.   
                            </p>
                            </div>
                            <div className="card-home" data-aos="">
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            At our core, we embrace a visionary approach prioritising innovation and community engagement. This approach underpins a holistic vision of prosperity, which aims to serve both man and nature.  
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