import kineraFund03 from '../../assets/images/kineraFund03.png'
import fundation01 from '../../assets/images/fundation01.png'

const Foundation = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat bg-fixed text-white"
            style={{
                backgroundImage: `url(${kineraFund03})`
            }}
            id='foundation'
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-white mb-10">THE KINE FOUNDATION</h1>
            
            <div className="container mx-auto flex flex-col md:flex-row mt-16 md:px-20 px-4 justify-center" style={{ gap: '5rem' }}>
                <div className="md:w-1/2 w-full flex justify-center items-center">
                    <img src={fundation01} alt="foundation" className="w-full md:w-[100%] mx-auto my-auto animate-bounce" />
                </div>
                <div className="md:w-1/2 w-full" data-aos="fade-left">
                    <p className="text-[24px] md:text-left text-center my-10"><span class="glitch"> The Kine Foundation</span> is a non-profit organization in the process of establishment. Its mission is to transform traditional approaches to film curation, exhibition, production, and audience engagement by embracing a new paradigm.</p>
                    <p className="text-[24px] md:text-left text-center my-10"><strong> Kinera,</strong>  the platform developed by the Kine Foundation, operates as a <strong>community-governed ecosystem</strong> where the community's vision and decisions will, in the last development stage, be implemented through futarchy and other processes that combine reputation, token value and curation markets. This ensures that the platform remains aligned with its mission, and its users have a voice in its ongoing development and evolution.</p>
                </div>
            </div>
        </div>
    )
}

export default Foundation