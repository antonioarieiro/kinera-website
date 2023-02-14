import fundo04 from '../../assets/images/fundo04.png'
import asset05 from '../../assets/images/asset05.png'

const Foundation = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat bg-fixed text-white"
            style={{
                backgroundImage: `url(${fundo04})`
            }}
            id='foundation'
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-white">KINE FOUNDATION</h1>
            
            <div className="w-full flex md:flex-row flex-col mt-40 md:px-20 px-10">
                <div className="md:w-1/2 w-full md:px-20 px-2">
                    <img src={asset05} alt="asset05" className="animate-bounce" />
                </div>
                <div className="md:w-1/2 w-full" data-aos="fade-left">
                    <p className="text-[24px] md:text-left text-center my-10">The <strong>Kine Foundation</strong> is a non-profit organization that is in the process of establishment. Its mission is to transform the traditional approaches to film curation, exhibition, production, and audience engagement by embracing a new paradigm.</p>
                    <p className="text-[24px] md:text-left text-center my-10">Kinergy, the platform developed by the Foundation, operates as a <strong>community-governed ecosystem</strong> where the community's vision and decisions will be implemented through <strong>futarchy and other processes</strong> that allied reputation and token value. This will ensure that the platform remains aligned with its mission and that its <strong>users</strong> have a voice in its ongoing development and evolution.</p>
                    <p className="text-[24px] md:text-left text-center my-10">The foundation will have <strong>two founding rounds</strong>. Because of the nature of the token and its network uses for curation we will not be accepting venture capital in our rounds. If you want to participate and get information about this process subscribe to our newsletter <strong>HERE</strong>.</p>
                </div>
            </div>
        </div>
    )
}

export default Foundation
