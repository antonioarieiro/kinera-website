import token from '../../assets/images/token4.png';
import kinexBack from '../../assets/images/kinexBack2.png';

import './kine.css';

const Kine = () => {
    return (
        <div
            className="background-overlay4 w-full min-h-[60vh] bg-center bg-cover bg-no-repeat text-black bg-fixed py-20"
            id="kinex"
            style={{
                backgroundImage: `url(${kinexBack})`
            }}
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-[#000000] py-10" data-aos="zoom-in">THE KINEX</h1>
            
            <div className="-mt-2 container mx-auto flex flex-col md:flex-row mt-0 md:px-0 px-4 justify-center" style={{ gap: '5rem' }}>
                <div className="w-full md:w-1/2 flex justify-center">
                <img src={token} alt="claquete" className="w-[50%] object-contain animate-pulse" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                    <div className="card-kine" data-aos="fade-left">
                        <p className="text-[19px] md:text-left text-center my-0 text-[#000000]"><span class="glitch">Kinex, </span> our token, is developed using a Substrate-based infrastructure built in the Kusama and Polkadot networks. This way, we gain the power of network interoperability and the ability to outsource task resolution and achieve top security levels. </p>
                    </div>
                    <div className="card-kine" data-aos="fade-left">
                        <p className="text-[19px] md:text-left text-center my-0 text-[#000000]"><span class="glitch">Kinera </span> is a substrate-based infrastructure built in the Kusama and Polkadot networks, with its shared security, interoperability, and ability to outsource task resolution. </p>
                    </div>
                    <div className="card-kine" data-aos="fade-left">
                        <p className="text-[19px] md:text-left text-center my-0 text-[#000000]">Our token has multiple purposes within the platform: stake while signalling the best content in <b> ranking lists </b>, curate <b> constellations </b>, support and moderate <b> SEE TV channels </b> , and propose and vote <b> governance proposals </b>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kine;