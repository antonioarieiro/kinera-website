import fundo03 from '../../assets/images/kineraStructureVersion2.png';
import creators01 from '../../assets/images/creators002.png';
import curators01 from '../../assets/images/curators002.png';
import moderators01 from '../../assets/images/moderators002.png';
import ambassadors01 from '../../assets/images/ambassadors002.png';
import DropItem from '../DropItem';
import './participation.css';

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
                <h1 className="-mt-8 sm:text-[75px] text-[#351e2d] text-[38px] font-bold text-center mb-5" data-aos="fade-left">
                    HOW TO PARTICIPATE
                </h1>

                <div className="w-full flex justify-center mt-10">
                    <div className="w-[80%]" data-aos="">
                        <p className="text-[18px] text-center text-[#351e2d]">Join the Kinera platform and become an active member of the ecosystem as a <strong>Curator</strong>, <strong>Moderator</strong>, <strong>Ambassador</strong> and or <strong> Creator</strong>:</p>
                    </div>
                </div>

                <div className="participation-container my-20 flex flex-col gap-20">
                    <div className="text-justify dropitem-container flex flex-col md:flex-row items-center gap-4" data-aos="">
                        <DropItem
                          question="Curators"
                          answer={<p style={{ fontSize: '20px', color: '#351e2d' }}><strong>CURATORS</strong> have a central role; they are responsible for discovering and organising our constellations. Their activities include searching the internet and decentralised networks for top-tier content, organising competitions, and voting for the best channels. </p>}
                        />
                        <img src={curators01} alt="curators01" className="w-[50%] md:w-[230px]" />
                    </div>
                    <div className="text-justify dropitem-container flex flex-col md:flex-row-reverse items-center gap-4" data-aos="">
                        <DropItem
                          question="Creators"
                          answer={<p style={{ fontSize: '20px', color: '#351e2d' }}><strong>CREATORS</strong> are the members who craft distinctive and captivating content from our curated lists to create streaming channels. These channels may be further enhanced with interviews and live events, providing a comprehensive viewing experience.</p>}
                        />
                        <img src={creators01} alt="creators01" className="w-[50%] md:w-[230px]" />
                    </div>
                    <div className="text-justify dropitem-container flex flex-col md:flex-row items-center gap-4" data-aos="">
                        <DropItem
                          question="Moderators"
                          answer={<p style={{ fontSize: '20px', color: '#351e2d' }}><strong>MODERATORS</strong> are the volunteers who maintain the platform's high quality and safety standards. They report and resolve content disputes and ensure that all users follow guidelines.  You can set your moderation flag on if your reputation is in the top 80%. If so, report content, use your tokens to vote the decisions, and win tokens back from voting according to the rules. Kinex token rewards the individual's expertise and commitment to carry out the role with knowledge and depth.</p>}
                        />
                        <img src={moderators01} alt="moderators01" className="w-[50%] md:w-[230px]" />
                    </div>
                    <div className="text-justify dropitem-container flex flex-col md:flex-row-reverse items-center gap-4" data-aos="">
                        <DropItem
                          question="Ambassadors"
                          answer={<p style={{ fontSize: '20px', color: '#351e2d' }}><strong>AMBASSADORS</strong> are volunteers who wish to see the growth and success of the community. They play a crucial role as mediators, advocates, and guardians of the ecosystem, fostering its expansion and protection and organising or promoting initiatives that strengthen the ecosystem. </p>}
                        />
                        <img src={ambassadors01} alt="ambassadors01" className="w-[50%] md:w-[230px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participation;