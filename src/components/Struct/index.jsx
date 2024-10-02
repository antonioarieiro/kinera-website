import { AiOutlineStar } from 'react-icons/ai'
import { FaTrophy } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'

import ReactMarkdown from 'react-markdown'

import FlipCard from '../FlipCard';

import kineraStructure03 from '../../assets/images/kineraStructureVersion2.png';
import asset01 from '../../assets/images/kinera1.png';
import asset02 from '../../assets/images/kinera3.png';
import asset03 from '../../assets/images/kinera2.png';
import asset04 from '../../assets/images/kinera4.png';
import asset09 from '../../assets/images/kinera9.png';
import asset10 from '../../assets/images/kinera10.png';

import './structure.css'

// Custom renderer for strong (bold) elements
const renderers = {
  strong: ({ children }) => <b style={{ fontWeight: '600' }}>{children}</b>,
};

const Struct = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat text-black"
            id='struct'
            style={{
                backgroundImage: `url(${kineraStructure03})`
            }}
        >
            <h1 className="sm:text-[70px] text-[38px] font-bold text-center text-[#3c1e11]" data-aos="zoom-in">THE STRUCTURE OF KINERA</h1>

            <div className="w-full flex justify-center mt-20">
                <div className="w-[85%]" data-aos="zoom-in">
                    <div className="card-structure" data-aos="fade-left">
                        <p className="text-justify text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            At the core of Kinera's architecture are several critical elements:<br></br>
                            <b style={{ fontWeight: '600' }}> Rankings</b> and <b style={{ fontWeight: '600' }}> Constellations</b> for content curation; 
                            <br></br><b style={{ fontWeight: '600' }}> Producers Tools</b> for audio and video creation; 
                            <br></br><b style={{ fontWeight: '600' }}> Communities </b> and <b style={{ fontWeight: '600' }}> DAOs </b> to enable collaborative work and fractionalised ownership; 
                            <br></br><b style={{ fontWeight: '600' }}> SEE Channels</b> for content distribution; 
                            <br></br><b style={{ fontWeight: '600' }}> Kine Makers</b> for crowdfunding.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-20 py-10">
                <div className="grid-cards-container">
                    <FlipCard
                        id='post1_img'
                        title="Rankings"
                        imgUrl={asset01}
                        icon={<FaTrophy className="text-6xl my-[50px]" />}
                        backDesc={
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <ReactMarkdown components={renderers}>{`**Rankings** combine a staking mechanism with curated lists. Users stake Kinex tokens on their preferred videos or creators within the ranking lists for a specified period, earning token rewards in return. When users propose new entries, they receive tokens from other users who vote on their proposals.`}</ReactMarkdown>
                            </p>
                        }
                    />
                    <FlipCard
                        id='post2_img'
                        title="Constellations"
                        imgUrl={asset02}
                        icon={<AiOutlineStar className="text-6xl my-[30px]" />}
                        backDesc={
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <ReactMarkdown components={renderers}>{`**Constellations** are the second layer of curation inside Kinera. In this competition arena, the community tests its cinematic knowledge and tastes, spotlighting hidden gems and allowing personal convictions to intersect with the collective truth. At the same time, they will be powerful instruments for crowdsourcing fact-checking and enabling artificial intelligence agents to play against themselves or leave half-played games for humans to finish.`}</ReactMarkdown>
                            </p>
                        }
                    />
                    <FlipCard
                        id='post3_img'
                        title="Producers Tools"
                        imgUrl={asset03}
                        icon={<FiMonitor className="text-6xl my-[50px]" />}
                        backDesc={
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <ReactMarkdown components={renderers}>{`**Producers Tools** is Kinera's creation centre, providing users free access to AI-powered creation and video editing tools. They can choose from various decentralised storage options or use their equipment to save their videos. These production tools can be used to create private content, collaborate within a community, or work inside a Decentralized Autonomous Organization (DAO).`}</ReactMarkdown>
                            </p>
                        }
                    />
                    <FlipCard
                        id='post4_img'
                        title="SEE Channels"
                        imgUrl={asset04}
                        icon={<BsPlusLg className="text-6xl my-[50px]" />}
                        backDesc={
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <ReactMarkdown components={renderers}>{`**SEE Channels** is the platform where users and communities can launch subscription-based channels. These channels can be open to everyone or require an access fee. When a fee is paid, the channel promoter can use copyrighted content from other creators, who receive automated payments in return. These creators can host recorded interviews and live events, providing a complete viewing experience using content that caters to different viewers' interests and preferences.`}</ReactMarkdown>
                            </p>
                        }
                    />
                    <FlipCard
                        id='post5_img'
                        title="Communities"
                        imgUrl={asset10}
                        icon={<FiMonitor className="text-6xl my-[50px]" />}
                        backDesc={
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <ReactMarkdown components={renderers}>{`**Communities** are organisations where members develop and distribute media content. They can encompass different sorts of groups with common goals, such as informal groups, associations and Decentralized Autonomous Organizations (DAOs). These entities can be public or private and produce content in the form of text, images, audio, video or GPTs.`}</ReactMarkdown>
                            </p>
                        }
                    />
                    <FlipCard
                        id='post6_img'
                        title="Kine Makers"
                        imgUrl={asset09}
                        icon={<FiMonitor className="text-6xl my-[50px]" />}
                        backDesc={
                            <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                                <ReactMarkdown components={renderers}>{`**Kine Makers** is the section on Kinera where creators, producers, and filmmakers can crowdfund financial support from the community for their media projects. This feature allows patrons (donors) to exchange Kinex tokens for tokens that generate revenue each time the supported content earns income.`}</ReactMarkdown>
                            </p>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Struct