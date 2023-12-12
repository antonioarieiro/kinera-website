import missionImg from '../../assets/images/missionImg.png';
import missionImg3 from '../../assets/images/missionImg4.png';
import './mission.css'

const Mission = () => {
    return (
        <div className="mission-container">
            <div className="background-image" style={{backgroundImage: `url(${missionImg3})`}} />
            <div className='global-mobile'>
                <div
                    className="foreground-image is-md-w w-full min-h-screen flex flex-col py-20 sm:bg-[length:100vh_100vh] bg-[length:50vh_50vh] bg-no-repeat bg-right-bottom text-[#F3F6FB]"
                    style={{
                        backgroundImage: `url(${missionImg})`
                    }}
                    id="mission"
                >
                    <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-white" data-aos="fade-left">MISSION</h1>

                    <div className="w-full mt-10 px-2" >
                        <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-50">
                            <p className="text-[19px] sm:text-left text-center -mt-2 "data-aos="fade-right"> We propose <span className="glitch"> to create an open and resilient curation ecosystem </span> that unites a diverse community of viewers and nonconformist media creators.</p>
                            <p className="text-[19px] sm:text-left text-center mt-10 "data-aos="fade-right">  We aim <span className="glitch"> to challenge existing social media and streaming platforms </span> by realigning important questions about accessibility, funding, and content distribution while giving a wider audience the films, videos, and ideas that aren't yet in mainstream media.</p>
                            <p className="text-[19px] sm:text-left text-center mt-10 "data-aos="fade-right">  We aim <span className="glitch"> to deliver a solution </span> that puts the relation creator/curator/viewer at the centre of a process where their active participation in the ecosystem aligns with a set of predictable token rewards.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="is-mobile-version w-full min-h-screen flex flex-col py-20 sm:bg-[length:100vh_100vh] bg-[length:50vh_50vh] bg-no-repeat bg-right-bottom text-[#F3F6FB]"
                >
                    <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]">MISSION</h1>

                    <div className="w-full mt-20 px-2" data-aos="fade-right">
                        <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-50">
                            <p className="text-[21px] sm:text-left text-center mt-28 font-medium"> We propose <span className="glitch"> to create an open and resilient curation ecosystem </span> that unites a diverse community of viewers and nonconformist media creators.</p>
                            <p className="text-[21px] sm:text-left text-center mt-28 font-medium">  We aim <span className="glitch"> to challenge existing social media and streaming platforms </span> by realigning important questions about accessibility, funding, and content distribution while giving a wider audience the films, videos, and ideas that aren't yet in mainstream media.</p>
                            <p className="text-[21px] sm:text-left text-center mt-20 font-medium">  We aim <span className="glitch"> to deliver a solution </span> that puts the relation creator/curator/viewer at the centre of a process where their active participation in the ecosystem aligns with a set of predictable token rewards.</p>
                        </div>
                    </div>
                    <div className='is-mobile-version'>
                        <img src={missionImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;