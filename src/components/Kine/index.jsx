import token from '../../assets/images/token.png';

const Kine = () => {
    return (
        <div className="w-full min-h-[90vh] py-20 bg-[linear-gradient(180deg,#FFBAE7_0%,#FF6EC7_100%)]" id='kine'>
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]" data-aos="zoom-in">THE KINEX</h1>
            
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:px-40 px-10 mt-20 space-y-10 md:space-y-0">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={token} alt="claquete" className="w-3/4 animate-pulse" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                    <p className="text-[24px] md:text-left text-center my-10 text-[#35012B]">The <span class="glitch">Kinex Token</span> is developed using a substrate-based infrastructure build in the Kusama and Polkadot networks and using their interoperability.</p>
                    <p className="text-[24px] md:text-left text-center my-10 text-[#35012B]">Kinex serves <strong> multiple purposes </strong> within the platform, including <strong>ranking</strong> cinema and video content, <strong>curating</strong> Constellations categories, <strong>supporting</strong> SEE TV channels and film/video proposals in the Producers Network, and <strong>participating</strong> in governance decisions through voting and proposal submissions.</p>
                </div>
            </div>
        </div>
    )
}

export default Kine;