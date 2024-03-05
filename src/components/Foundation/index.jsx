import kineraFund03 from '../../assets/images/kineraFund03.png'
import fundation01 from '../../assets/images/fundation02.png'
import './foundation.css';

const Foundation = () => {
    return (
        <div
            className="background-overlay w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat text-white"
            style={{
                backgroundImage: `url(${kineraFund03})`
            }}
            id='foundation'
        >
            {/* Image as a title with bottom margin */}
            <div className="flex justify-center mb-10"> {/* Added mb-10 for margin-bottom */}
                <img src={fundation01} alt="foundation" className="w-full md:w-[30%] mx-auto my-auto" data-aos="fade-right"/>
            </div>

            {/* Text content in a single column */}
            <div className="container mx-auto px-4 md:px-20" data-aos="fade-left"> {/* Removed -mt-10 */}
                <div className="card-foundation" data-aos="fade-left">
                    <p className="text-[19px] text-center my-0"><span class="glitch"> The Kine Foundation</span> is the legal structure committed to building and supporting <b>Kinera-related technologies</b> and the <b>Kinex token</b>. </p>
                </div>
                <div className="card-foundation" data-aos="fade-left">
                    <p className="text-[19px] text-center my-0">By embracing a new paradigm, we aim to transform traditional approaches to video and film curation, exhibition, production, and audience engagement.</p>
                </div>
                <div className="card-foundation" data-aos="fade-left">
                    <p className="text-[19px] text-center my-0">Kinera operates as a community-governed ecosystem where the community's vision and decisions will evolve from representative democracy to futarchy and other processes that combine reputation, token value and curation markets. These technologies ensure that the platform remains aligned with its mission and its users have a voice in its ongoing development and evolution. </p>
                </div>
            </div>
        </div>
    )
}

export default Foundation