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

import './structure.css'

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
                    <p className="text-[18px] text-center text-[#3c1e11]">Kinera's architecture comprises <strong>Rankings</strong>, <strong>Constellations</strong> for curation, <strong>Producers Tools</strong> for video creation and <b>SEE</b> for content organisation and distribution.</p>
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
                        backDesc={<ReactMarkdown>{"***Rankings*** are a combination of a staking mechanism and curated lists. Users can assign Kinex tokens to their preferred videos in a ranking list for a specified period and earn token rewards."}</ReactMarkdown>}
                    />
                    <FlipCard
                        id='post2_img'
                        title="Constellations"
                        imgUrl={asset02}
                        icon={<AiOutlineStar className="text-6xl my-[30px]" />}
                        backDesc={<ReactMarkdown>{"***Constellations*** are a second layer for curation.  In this competition arena, users vote for their favourite choices, competing directly with other users or AI. It allows professional curators to showcase their film festivals and different users to show their knowledge and preferences allowing lesser-known gems to shine and harness the power of their narratives in the real world. "}</ReactMarkdown>}
                    />
                    <FlipCard
                        id='post3_img'
                        title="Producers Tools"
                        imgUrl={asset03}
                        icon={<FiMonitor className="text-6xl my-[50px]" />}
                        backDesc={<ReactMarkdown>{"***Producers Tools*** This is Kinera's creation center. Users can access their public or private media and access various AI and video editing tools to create new content. They can also choose from different decentralised storage options to save their videos."}</ReactMarkdown>}
                    />
                    <FlipCard
                            id='post4_img'
                            title="SEE Chain"
                            imgUrl={asset04}
                            icon={<BsPlusLg className="text-6xl my-[50px]" />}
                            backDesc={<ReactMarkdown>{"***SEE Chain*** is the platform where users and communities can launch subscription-based channels. These channels can be open to all or require an access fee. When a fee is paid, the channel promoter can use copyrighted content from other creators, who receive automated payments in return."}</ReactMarkdown>}
                        />
                </div>
            </div>
        </div>
    )
}

export default Struct