import fundo03 from '../../assets/images/kineraStructureVersion2.png';
import creators01 from '../../assets/images/kinera6.png';
import curators01 from '../../assets/images/kinera5.png';
import moderators01 from '../../assets/images/kinera7.png';
//import ambassadors01 from '../../assets/images/ambassadors002.png';
import users01 from '../../assets/images/kinera8.png';
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
                <h1 className="-mt-8 sm:text-[75px] text-[#3c1e11] text-[38px] font-bold text-center mb-5" data-aos="">
                    HOW TO PARTICIPATE
                </h1>

                <div className="w-full flex justify-center mt-10">
                    <div className="w-[80%]" data-aos="">
                        <p className="text-[18px] text-center text-[#3c1e11]">
                            Inside Kinera, you can find the following roles: <strong>Creators</strong>, a <strong>Curators</strong>, a <strong>Moderators</strong> or a <strong>Users</strong>.
                        </p>
                    </div>
                </div>

                <div className="participation-container my-20 flex flex-col gap-20">
                    <div className="text-justify dropitem-container flex flex-col md:flex-row items-center gap-20" data-aos="">
                        <DropItem
                            question="Curators"
                            answer={<p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <b style={{ fontWeight: '600' }}>CURATORS</b> are responsible for discovering and organising constellations and feed rankings with the best videos. Their activities include searching the internet and decentralised networks for top-tier content, organising competitions, and voting for the best content, tools, and streaming channels. 
                            </p>}
                        />
                        <img src={curators01} alt="curators01" className="w-[50%] md:w-[230px]" />
                    </div>
                    <div className="text-justify dropitem-container flex flex-col md:flex-row-reverse items-center gap-20" data-aos="">
                        <DropItem
                            question="Creators"
                            answer={<p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <b style={{ fontWeight: '600' }}>CREATORS</b> is a two-fold term. It is used by the members who craft captivating content from our curated lists to launch streaming channels and to refer to the individual or entity that produces and shares original material - such as text, images, audio, or video - using our tools. In this case, they can develop engaging, informative, or entertaining content to reach and interact with their audience. Their roles can include bloggers, vloggers, influencers, podcasters, journalists, artists, and educators who leverage media tools to produce and share their creations.
                            </p>}
                        />
                        <img src={creators01} alt="creators01" className="w-[50%] md:w-[230px]" />
                    </div>
                    <div className="text-justify dropitem-container flex flex-col md:flex-row items-center gap-20" data-aos="">
                        <DropItem
                            question="Moderators"
                            answer={<p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <b style={{ fontWeight: '600' }}>MODERATORS</b> are volunteers who maintain the platform's high quality and safety standards. They report and resolve content disputes. Users can turn on their moderation flag if their reputation is in the top 80%. The Kinex token is used to vote on moderation decisions, and participants win tokens back from voting according to the rules. Kinex tokens reward the individual's expertise, commitment, and depth of knowledge that the function carried out in their role.
                            </p>}
                        />
                        <img src={moderators01} alt="moderators01" className="w-[50%] md:w-[230px]" />
                    </div>
                    <div className="text-justify dropitem-container flex flex-col md:flex-row-reverse items-center gap-20" data-aos="">
                        <DropItem
                            question="Users"
                            answer={<p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <b style={{ fontWeight: '600' }}>USERS</b> shape the culture and direction of the network. They can change roles and become creative at any time, gather the best information, create new communities, or be active members of the governance. Users have the power to influence and drive the platform into something that reflects their values and interests. The more active and engaged they are, the more vibrant and successful Kinera becomes.
                            </p>}
                        />
                        <img src={users01} alt="users01" className="w-[50%] md:w-[230px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participation;