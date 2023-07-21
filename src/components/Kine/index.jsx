import token from '../../assets/images/token.png';
import kinexBack from '../../assets/images/kinexBack.png';

const Kine = () => {
    return (
        <div
            className="w-full min-h-[60vh] bg-center bg-cover bg-no-repeat text-black py-20"
            id="kinex"
            style={{
                backgroundImage: `url(${kinexBack})`
            }}
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]" data-aos="zoom-in">THE KINEX</h1>
            
            <div className="container mx-auto flex flex-col md:flex-row mt-16 md:px-20 px-4 justify-center" style={{ gap: '5rem' }}>
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