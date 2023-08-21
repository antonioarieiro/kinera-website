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
                <h1 className="sm:text-[75px] text-[38px] font-bold text-center mb-5">
                    TYPES OF PARTICIPATION
                </h1>

                <p className="text-[28px] text-center font-bold mt-20" data-aos="zoom-in">
                    Join the Kinera platform  and become an active  member  of the ecosystem taking on one or more of  of the following  roles:
                </p>
                <p></p>

                <div className="my-20 flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <DropItem
                          question="Curators"
                          answer={<p style={{ fontSize: '20px' }}><strong>CURATORS</strong> are organized within a social network, engaging in various activities such as discovering films and videos from the internet or decentralized platforms, creating competitions, and voting for the best channels.</p>}
                        />
                        <img src={curators01} alt="creators01" className="w-full md:w-[360px]" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-4">
                        <DropItem
                          question="Creators"
                          answer={<p style={{ fontSize: '20px' }}><strong>CREATORS</strong> select films and videos from curated lists and rankings to create television channels, which can be enhanced with interviews and live feed events.</p>}
                        />
                        <img src={creators01} alt="curators01" className="w-full md:w-[360px]" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <DropItem
                          question="Moderators"
                          answer={<p style={{ fontSize: '20px' }}><strong>MODERATORS</strong> play an important role in the governance of the platform,  resolving content disputes and ensuring adherence to guidelines on the platform. This is a voluntary role. Moderators need to apply for this role and deposit a number of tokens yet to be determined as collateral.</p>}
                        />
                        <img src={moderators01} alt="moderators01" className="w-full md:w-[360px]" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-4">
                        <DropItem
                          question="Ambassadors"
                          answer={<p style={{ fontSize: '20px' }}><strong>AMBASSADORS</strong> are vital members, they  play an important  role in promoting the project and bringing meaningful content  from all corners of the world to our platform. Interested individuals must apply to participate in and complete the Tokens Ambassadors Program to become ambassadors.</p>}
                        />
                        <img src={ambassadors01} alt="ambassadors01" className="w-full md:w-[360px]" />
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Participation;