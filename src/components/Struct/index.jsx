import { AiOutlineStar } from 'react-icons/ai'
import { FaTrophy } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'

import ReactMarkdown from 'react-markdown'

import FlipCard from '../FlipCard';

import kineraStructure03 from '../../assets/images/kineraStructureVersion2.png';
import asset01 from '../../assets/images/asset001.png';
import asset02 from '../../assets/images/asset002.png';
import asset03 from '../../assets/images/asset003.png';
import asset04 from '../../assets/images/asset004.png';

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
            <h1 className="sm:text-[70px] text-[38px] font-bold text-center text-[#2c0d2b]" data-aos="zoom-in">THE STRUCTURE OF KINERA</h1>

            <div className="w-full flex justify-center mt-20">
                <div className="w-[85%]" data-aos="zoom-in">
                    <div className="card-structure" data-aos="fade-left">
                    <p className="text-[18px] text-center text-[#2c0d2b]">Kinera's architecture comprises <strong>Rankings</strong>, <strong>Constellations</strong>, <strong>SEE TVChain</strong> and <b>Kine Makers</b><strong>.</strong></p>
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
                        backDesc={<ReactMarkdown>{"***Rankings*** are a combination of a staking system and curated lists. Users can assign Kinex tokens to their preferred film in a ranking list for a specified period and earn token rewards."}</ReactMarkdown>}
                    />
                    <FlipCard
                        id='post2_img'
                        title="Constellations"
                        imgUrl={asset02}
                        icon={<AiOutlineStar className="text-6xl my-[30px]" />}
                        backDesc={<ReactMarkdown>{"***Constellations*** within Kinera act as the second layer for curation. Curators can vote for their favourite choices in this competition arena, competing directly with other users. This platform allows curators to showcase their knowledge and preferences in cinema, allowing lesser-known gems to shine while aligning with the community's collective judgement."}</ReactMarkdown>}
                    />
                    <FlipCard
                        id='post3_img'
                        title="TVChain SEE"
                        imgUrl={asset03}
                        icon={<FiMonitor className="text-6xl my-[50px]" />}
                        backDesc={<ReactMarkdown>{"***SEE TVChain*** is a protocol that enables the creation of television channels from curated materials sourced from Rankings and Constellations. These channels can be freely accessible or require a subscription fee to protect copyrights."}</ReactMarkdown>}
                    />
                    <FlipCard
                            id='post4_img'
                            title="Kine Makers"
                            imgUrl={asset04}
                            icon={<BsPlusLg className="text-6xl my-[50px]" />}
                            backDesc={<ReactMarkdown>{"***Kine Makers*** is a crowdfunding platform for audio-visual projects where patrons purchase tokens representing film rights and receive rewards whenever their projects generate revenue. Implementation of this feature will comply with International Securities Laws."}</ReactMarkdown>}
                        />
                </div>
            </div>
        </div>
    )
}

export default Struct