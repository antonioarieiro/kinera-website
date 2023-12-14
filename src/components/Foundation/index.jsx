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
                    <p className="text-[19px] md:text-left text-center my-10"><span class="glitch"> The Kine Foundation</span> is the legal structure committed to building and supporting <b>Kinera-related technologies</b> and the <b>Kinex token</b>. </p>
                    <p className="text-[19px] md:text-left text-center my-10">By embracing a new paradigm, we aim to transform traditional approaches to video and film curation, exhibition, production, and audience engagement.</p>
                    <p className="text-[19px] md:text-left text-center my-10">Kinera operates as a community-governed ecosystem where the community's vision and decisions will evolve from representative democracy to futarchy and other processes that combine reputation, token value and curation markets. These technologies ensure that the platform remains aligned with its mission and its users have a voice in its ongoing development and evolution. </p>
                </div>
            </div>
        </div>
    )
}

export default Foundation