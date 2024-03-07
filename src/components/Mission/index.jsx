import missionImg from '../../assets/images/missionKinera.png';
import missionImg3 from '../../assets/images/missionImg4.png';
import './mission.css'

const Mission = () => {
    return (
        <div className="mission-container">
            <div className="background-image" style={{backgroundImage: `url(${missionImg3})`}} />
                <div className='global-mobile'>
                <div
            className="background w-full min-h-[60vh] bg-center bg-contain bg-right bg-no-repeat text-black  py-20"
            id="kinex"
            style={{
                backgroundImage: `url(${missionImg})`
            }}
        >
                    <div className="w-full mt-10 mt-20">
                        <div className="w-full -mt-40">
                                <h1 className="-mt-8 py-10 sm:text-[75px] text-[38px] font-bold text-center text-white" data-aos="fade-left">MISSION</h1>
                                <div className="card-mission-container w-[100%]">
                                    <div className="card-mission" data-aos="fade-left">
                                        <p className="text-[19px] text-white sm:text-left text-center mt-0 "data-aos="fade-right"> <span className="glitch">We propose </span>  to create an open and resilient curation ecosystem that unites a diverse community of viewers and nonconformist media creators.</p>
                                    </div>
                                    <div className="card-mission" data-aos="fade-left">
                                        <p className="text-[19px] text-white sm:text-left text-center mt-0 "data-aos="fade-right">  <span className="glitch"> We aim </span> to challenge existing social media and streaming platforms by realigning important questions about accessibility, funding, and content distribution while giving a wider audience the films, videos, and ideas that aren't yet in mainstream media.</p>
                                    </div>
                                    <div className="card-mission" data-aos="fade-left">
                                        <p className="text-[19px] text-white sm:text-left text-center mt-0 "data-aos="fade-right">  <span className="glitch"> We aim </span> to deliver a solution that puts the relation creator/curator/viewer at the centre of a process where their active participation in the ecosystem aligns with a set of predictable token rewards.</p>
                                    </div>
                                </div>
                                <div className='is-mobile-version'>
                                    <img src={missionImg}/>
                                </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Mission;