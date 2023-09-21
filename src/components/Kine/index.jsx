import token from '../../assets/images/token3.png';
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
            
            <div className="-mt-2 container mx-auto flex flex-col md:flex-row mt-16 md:px-20 px-4 justify-center" style={{ gap: '5rem' }}>
                <div className="w-full md:w-1/2 flex justify-center">
                <img src={token} alt="claquete" className="w-[100%] object-contain animate-pulse" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                    <p className="text-[19px] md:text-left text-center my-10 text-[#35012B]"><span class="glitch">Kinex, </span> our token, is developed using a Substrate-based infrastructure built in the Kusama and Polkadot networks, leveraging the networks' interoperability features and ability to outsource task resolution to other parachains.</p>
                    <p className="text-[19px] md:text-left text-center my-10 text-[#35012B]"><strong> The Kinex token </strong> serves multiple purposes within the platform. The token can be used to <strong> stake in ranking lists with film and video content as well as the curation of constellation games and the support and moderation of SEE TV channels. </strong> The tokens can also be used in voting on platform <strong> governance proposals. </strong></p>
                </div>
            </div>
        </div>
    )
}

export default Kine;