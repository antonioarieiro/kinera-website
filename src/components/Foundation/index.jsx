import kineraFund03 from '../../assets/images/kineraFund03.png'
import fundation01 from '../../assets/images/fundation02.png'
import './foundation.css'; // Assuming you have a CSS file for this component

const Foundation = () => {
    return (
        <div
            className="background-overlay w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat text-white"
            style={{
                backgroundImage: `url(${kineraFund03})`
            }}
            id='foundation'
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-white mb-10" data-aos="fade-left"></h1>
            
            <div className="container mx-auto flex flex-col md:flex-row -mt-10 md:px-20 px-4 justify-center" data-aos="fade-left" style={{ gap: '5rem' }}>
                <div className="md:w-1/2 w-full flex justify-center items-center">
                    <img src={fundation01} alt="foundation" className="w-full md:w-[100%] mx-auto my-auto" data-aos="fade-right"/>
                </div>
                <div className="md:w-1/2 w-full" data-aos="fade-left">
                    <p className="text-[19px] md:text-left text-center my-10"><span class="glitch"> The Kine Foundation</span> is a non-profit organisation in the process of being established. The foundation is responsible for implementing the specifications in the Kinera White Paper. The foundation is responsible for implementing the specifications in the <b> Kinera White Paper </b>.</p>
                    <p className="text-[19px] md:text-left text-center my-10">It aims to transform traditional approaches to video and film curation, exhibition, production, and audience engagement by embracing a new paradigm.</p>
                    <p className="text-[19px] md:text-left text-center my-10">With Kinera, the Kine Foundation is committed to promoting  active audience engagement by embracing a new paradigm. </p>
                    <p className="text-[19px] md:text-left text-center my-10"><span class="glitch"> Kinera,</span> the platform developed by the Kine Foundation, operates as a community-governed ecosystem where the community's vision and decisions will evolve from representative democracy to futarchy and other processes that combine reputation, token value and curation markets. This ensures that the platform remains aligned with its mission and its users have a voice in its ongoing development and evolution.</p>
                </div>
            </div>
        </div>
    )
}

export default Foundation