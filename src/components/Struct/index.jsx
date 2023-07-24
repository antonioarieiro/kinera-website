import { AiOutlineStar } from 'react-icons/ai'
import { FaTrophy } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'

import ReactMarkdown from 'react-markdown'

import FlipCard from '../FlipCard';

import kineraStructure02 from '../../assets/images/kineraStructure02.png';
import asset01 from '../../assets/images/asset01.png';
import asset02 from '../../assets/images/asset02.png';
import asset03 from '../../assets/images/asset03.png';
import asset04 from '../../assets/images/asset04.png';

const Struct = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-fixed bg-no-repeat text-black"
            id='struct'
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${kineraStructure02})`
            }}
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]" data-aos="zoom-in">THE STRUCTURE OF KINERA</h1>

            <div className="w-full flex justify-center mt-20">
                <div className="w-[80%]" data-aos="zoom-in">
                    <p className="text-[25px] text-center">Kinera's architecture is composed of <strong>Rankings</strong>, <strong>Constellations</strong>, <strong>SEE TVChain</strong> and <b>Kine Makers</b><strong>.</strong></p>
                </div>
            </div>

            <div className="w-full flex md:flex-row flex-col flex-nowrap justify-center gap-5 px-5 mt-20">
                <FlipCard
                    id='post1_img'
                    title="Rankings"
                    imgUrl={asset01}
                    icon={<FaTrophy className="text-6xl my-[50px]" />}
                    backDesc={<ReactMarkdown>{"***Rankings***  are a combination of a staking system and curated lists. Users can assign Kinex tokens to their preferred ranking lists for a specified period and have the opportunity to earn rewards."}</ReactMarkdown>}
                />
                <FlipCard
                    id='post2_img'
                    title="Constellations"
                    imgUrl={asset02}
                    icon={<AiOutlineStar className="text-6xl my-[30px]" />}
                    backDesc={<ReactMarkdown>{"***Constellations*** act as the second layer for curation within Kinera. In this competition arena, curators can vote for their favorite choices, competing directly with other users. This platform allows curators to showcase their knowledge and preferences in cinema, giving lesser-known gems an opportunity to shine while aligning with the collective judgment of the community."}</ReactMarkdown>}
                />
                <FlipCard
                    id='post3_img'
                    title="TVChain SEE"
                    imgUrl={asset03}
                    icon={<FiMonitor className="text-6xl my-[50px]" />}
                    backDesc={<ReactMarkdown>{"***SEE TVChain*** is a protocol that enables the creation of curated film channels, showcasing diverse content sourced from Rankings and Constellations. These channels can be freely accessible or require a subscription fee to protect copyrights."}</ReactMarkdown>}
                />
                <FlipCard
                    id='post4_img'
                    title="Kine Makers"
                    imgUrl={asset04}
                    icon={<BsPlusLg className="text-6xl my-[50px]" />}
                    backDesc={<ReactMarkdown>{"***Kine Makers*** is a crowdfunding platform for moving picture projects where patrons purchase tokens representing film rights and receive rewards whenever their films generate revenue. Implementation of this feature will comply with securities laws."}</ReactMarkdown>}
                />
            </div>
        </div>
    )
}

export default Struct
