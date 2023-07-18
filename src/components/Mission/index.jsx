import mission from '../../assets/images/mission.png';
import './mission.css'


const Mission = () => {
    return (
        <>
        <div className='global-mobile'>
        <div
            className="is-md-w w-full min-h-screen flex flex-col py-20 sm:bg-[length:100vh_100vh] bg-[length:50vh_50vh] bg-no-repeat bg-right-bottom text-[#F3F6FB]"
            style={{
                backgroundImage: `url(${mission})`
            }}
            id="mission"
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]">MISSION</h1>

            <div className="w-full mt-20 px-2" data-aos="fade-right">
                <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-50">
                    <p className="text-[21px] sm:text-left text-center font-medium"> Our <span class="glitch"> mission </span> is to build a fast, scalable and decentralized audiovisual network built on top of curation layers that encompass moving images creation and exhibition.</p>
                    <p className="text-[21px] sm:text-left text-center mt-28 font-medium">  We want to assemble a <span class="glitch"> curation ecosystem open and decentralized </span>, composed of all sorts of nonconformist media creators and professionals, that want to use and manage subscription models to distribute audiovisual content.</p>
                </div>
            </div>
        </div>
        <div
        className="is-mobile-version w-full min-h-screen flex flex-col py-20 sm:bg-[length:100vh_100vh] bg-[length:50vh_50vh] bg-no-repeat bg-right-bottom text-[#F3F6FB]"
        
        
    >
        <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]">MISSION</h1>

        <div className="w-full mt-20 px-2" data-aos="fade-right">
            <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-50">
                <p className="text-[21px] sm:text-left text-center font-medium"> Our <span class="glitch"> mission </span> is to build a fast, scalable and decentralized audiovisual network built on top of curation layers that encompass moving images creation and exhibition.</p>
                <p className="text-[21px] sm:text-left text-center mt-28 font-medium">  We want to assemble a <span class="glitch"> curation ecosystem open and decentralized </span>, composed of all sorts of nonconformist media creators and professionals, that want to use and manage subscription models to distribute audiovisual content.</p>
            </div>
        </div>
        <div className='is-mobile-version'>
            <img src={mission}/>
        </div>
    </div>
        </div>
        </>
    )
}

export default Mission;
