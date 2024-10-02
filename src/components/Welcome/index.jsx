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
                                <span className="glitch">Kinera</span> is a new kind of social animal. We aim to redefine social platforms as media spaces and build new forms of sustainable economies by leveraging the cooperative potential of our members. 
                            </p>
                            </div>
                            <div className="card-home" data-aos="">
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            In our co-created decentralised environments, users can rank, create, and distribute media content as well as manage copyrights, archiving, and storage. Through technology-enforced business models and the formation of collectives and DAOs, we democratise access to cutting-edge media tools for content creation.
                            </p>
                            </div>
                            <div className="card-home" data-aos="">
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            Kinera's tokenomics encourages active participation in the decision-making processes that govern our network. We embrace a visionary approach that prioritises innovation and community engagement, underpinning a holistic vision of prosperity aimed at serving both humans and nature.
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