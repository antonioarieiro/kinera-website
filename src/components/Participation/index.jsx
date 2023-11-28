import fundo03 from '../../assets/images/fundo03.png'
import creators01 from '../../assets/images/creators01.png'
import curators01 from '../../assets/images/curators01.png'
import moderators01 from '../../assets/images/moderators01.png'
import ambassadors01 from '../../assets/images/ambassadors01.png'
import DropItem from '../DropItem'

const Participation = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${fundo03})`
            }}
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-fixed bg-cover bg-no-repeat text-white"
            id='participation'
        >
            <div className="container mx-auto px-4">
                <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center mb-5" data-aos="fade-left">
                    TYPES OF PARTICIPATION
                </h1>

                <div className="w-full flex justify-center mt-10">
                <div className="w-[80%]" data-aos="zoom-in">
                    <p className="text-[25px] text-center">Join the Kinera platform and become an active member of the ecosystem as a Curator, Creator, Moderator and Ambassador:</p>
                </div>
                </div>

                <div className="my-20 flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-4" data-aos="fade-left">
                        <DropItem
                          question="Curators"
                          answer={<p style={{ fontSize: '20px' }}><strong>CURATORS</strong> are organised within a social network, engaging in activities such as discovering films and videos from the internet or decentralised platforms, creating competitions, and voting for the best channels. They are key to the platform's content curation.</p>}
                        />
                        <img src={curators01} alt="curators01" className="w-1/3 md:w-[120px]" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-4" data-aos="fade-right">
                        <DropItem
                          question="Creators"
                          answer={<p style={{ fontSize: '20px' }}><strong>CREATORS</strong> submit their own original work or select films and videos from curated lists and rankings to create television channels, which can be enhanced with interviews and live feed events. Their creativity drives the platform's content diversity.</p>}
                        />
                        <img src={creators01} alt="creators01" className="w-1/3 md:w-[120px]" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4" data-aos="fade-left">
                        <DropItem
                          question="Moderators"
                          answer={<p style={{ fontSize: '20px' }}><strong>MODERATORS</strong> play an important role in the governance of the platform, resolving content disputes and ensuring adherence to guidelines on the platform. This is a voluntary role. Moderators need to apply for this role and deposit tokens as collateral. They ensure a safe and respectful environment.</p>}
                        />
                        <img src={moderators01} alt="moderators01" className="w-1/3 md:w-[120px]" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-4" data-aos="fade-right">
                        <DropItem
                          question="Ambassadors"
                          answer={<p style={{ fontSize: '20px' }}><strong>AMBASSADORS</strong> are vital members of the community and play an important role in promoting the project and bringing meaningful content from all corners of the world to our platform. Interested individuals must apply to participate in and complete the <strong>Tokens Ambassadors Program</strong> to become ambassadors. They bridge the platform with diverse communities.</p>}
                        />
                        <img src={ambassadors01} alt="ambassadors01" className="w-1/3 md:w-[120px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participation;