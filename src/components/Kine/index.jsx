import kinexBack from '../../assets/images/kineraFund_kinex.png';

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
            
            <h1 className="-mt-12 sm:text-[75px] text-[38px] font-bold text-center text-[#351e2d] py-10" data-aos="zoom-in">THE KINEX</h1>
            
            <div className="w-full flex justify-center mt-10">
            <div className="card-funding-container w-[100vk]">
                    
                    <div className="card-kine" data-aos="fade-left">
                        <p className="text-[19px] md:text-left text-center my-0 text-[#FFFFFF]"><span className="glitch">Kinex, </span> our token, is developed using a Substrate-based infrastructure built in the Kusama and Polkadot networks. This way, we gain the power of network interoperability and the ability to outsource task resolution and achieve top security levels. </p>
                    </div>
                    <div className="card-kine" data-aos="fade-left">
                        <p className="text-[19px] md:text-left text-center my-0 text-[#FFFFFF]"><span className="glitch">Kinera </span> is a substrate-based infrastructure built in the Kusama and Polkadot networks, with its shared security, interoperability, and ability to outsource task resolution. </p>
                    </div>
                    <div className="card-kine" data-aos="fade-left">
                        <p className="text-[19px] md:text-left text-center my-0 text-[#FFFFFF]">Our token has multiple purposes within the platform: stake while signalling the best content in <b> ranking lists </b>, curate <b> constellations </b>, support and moderate <b> SEE TV channels </b> , and propose and vote <b> governance proposals </b>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kine;