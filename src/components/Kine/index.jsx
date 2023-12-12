import token from '../../assets/images/token4.png';
import kinexBack from '../../assets/images/kinexBack.png';

const Kine = () => {
    return (
        <div
            className="w-full min-h-[60vh] bg-center bg-cover bg-no-repeat text-black bg-fixed py-20"
            id="kinex"
            style={{
                backgroundImage: `url(${kinexBack})`
            }}
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-[#FF0A78]" data-aos="zoom-in">THE KINEX</h1>
            
            <div className="-mt-2 container mx-auto flex flex-col md:flex-row mt-0 md:px-20 px-4 justify-center" style={{ gap: '5rem' }}>
                <div className="w-full md:w-1/2 flex justify-center">
                <img src={token} alt="claquete" className="w-[50%] object-contain animate-pulse" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                    <p className="text-[19px] md:text-left text-center my-10 text-[#35012B]"><span class="glitch">Kinex, </span> our token, is developed using a Substrate-based infrastructure built in the Kusama and Polkadot networks. This way, we gain the power of network interoperability and the ability to outsource task resolution and achieve top security levels. </p>
                    <p className="text-[19px] md:text-left text-center my-5 text-[#35012B]"><span class="glitch">Kinera </span> is a substrate-based infrastructure built in the Kusama and Polkadot networks, with its shared security, interoperability, and ability to outsource task resolution. </p>
                    <p className="text-[19px] md:text-left text-center my-5 text-[#35012B]">Our token has multiple purposes within the platform: stake while signalling the best content in <span class="glitch"> ranking lists </span>, curate <span class="glitch"> constellations </span>, support and moderate <span class="glitch"> SEE TV channels </span> , and propose and vote <span class="glitch"> governance proposals </span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Kine;