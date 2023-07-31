import missionImg from '../../assets/images/missionImg.png';
import missionImg3 from '../../assets/images/missionImg3.png';
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
            <h1 className="sm:text-[75px] text-[38px] font-bold text-center text-[#FF0A78]">MISSION</h1>

            <div className="w-full mt-20 px-2" data-aos="fade-right">
                <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-50">
                    <p className="text-[21px] sm:text-left text-center font-medium"> Our <span class="glitch"> mission </span> is to build a fast, scalable and decentralized audiovisual network built on top of curation layers that encompass moving images creation and exhibition.</p>
                    <p className="text-[21px] sm:text-left text-center mt-28 font-medium">  We want to assemble a <span class="glitch"> curation ecosystem open and decentralized </span>, composed of all sorts of nonconformist media creators and professionals, that want to use and manage subscription models to distribute audiovisual content.</p>
                    <p className="text-[21px] sm:text-left text-center mt-20 font-medium">  Our <span class="glitch"> objective </span> is to challenge existing ecosystems by reframing important questions about information accessibility, funding, and content distribution control. We aim to heighten awareness and actively explore new solutions in an environment where active participation from curators, producers, and consumers is fully rewarded.</p>
                </div>
            </div>
        </div>
        <div
        className="is-mobile-version w-full min-h-screen flex flex-col py-20 sm:bg-[length:100vh_100vh] bg-[length:50vh_50vh] bg-no-repeat bg-right-bottom text-[#F3F6FB]"
        
        
    >
        <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]">MISSION</h1>

        <div className="w-full mt-20 px-2" data-aos="fade-right">
            <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-50">
                <p className="text-[21px] sm:text-left text-center font-medium"> Our <span class="glitch"> mission </span> is to construct a swift, scalable, and decentralized audiovisual network that operates with curation layers encompassing the creation and presentation of moving images.</p>
                <p className="text-[21px] sm:text-left text-center mt-20 font-medium">  We envision forging an <span class="glitch"> open and decentralized curation ecosystem </span> that unites a diverse community of nonconformist media creators and professionals seeking to utilize and oversee subscription models for distributing audiovisual content.</p>
                <p className="text-[21px] sm:text-left text-center mt-20 font-medium">  Our <span class="glitch"> objective </span> is to challenge existing ecosystems by reframing important questions about information accessibility, funding, and content distribution control. We aim to heighten awareness and actively explore new solutions in an environment where active participation from curators, producers, and consumers is fully rewarded.</p>
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
