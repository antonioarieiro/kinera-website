import { AiOutlineStar } from 'react-icons/ai'
import { FaTrophy } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'

import FlipCard from '../FlipCard';

import fundo01 from '../../assets/images/fundo01.png';
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
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${fundo01})`
            }}
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]" data-aos="zoom-in">KINERGY STRUCTURE</h1>

            <div className="w-full flex justify-center mt-20">
                <div className="w-[80%]" data-aos="zoom-in">
                    <p className="text-[25px] text-center"><strong>Kinergy’s architecture</strong> is composed of <strong>Rankings</strong>, <strong>Constellations</strong>, <strong>SEE TVChain</strong> and <b>Kine Makers</b><strong>.</strong></p>
                </div>
            </div>

            <div className="w-full flex md:flex-row flex-col flex-nowrap justify-center gap-5 px-5 mt-20">
                <FlipCard
                    id='post1_img'
                    title="Rankings"
                    imgUrl={asset01}
                    icon={<FaTrophy className="text-6xl my-[50px]" />}
                    backDesc="Ranking is both a staking mechanism and a collection of curated lists. Stakers may earn rewards by assigning tokens to their favorite ranking lists for a set period of time"
                />
                <FlipCard
                    id='post2_img'
                    title="Constellations"
                    imgUrl={asset02}
                    icon={<AiOutlineStar className="text-6xl my-[30px]" />}
                    backDesc="Constellation is the second layer for curation inside Kinergy. In this competition arena, curators may vote on their best personal choices, in direct competition with other users. This is where curators test their cinema tastes, hidden gems take the spotlight and conviction intersects with the community's truth"
                />
                <FlipCard
                    id='post3_img'
                    title="TVChain SEE"
                    imgUrl={asset03}
                    icon={<FiMonitor className="text-6xl my-[50px]" />}
                    backDesc="TVChain SEE is a protocol for human and automated film channel creation, with a wide range of content originating from Constellations. These channels may include a subscription fee to ensure copyright respect, or be free to access by everyone"
                />
                <FlipCard
                    id='post4_img'
                    title="Kine Makers"
                    imgUrl={asset04}
                    icon={<BsPlusLg className="text-6xl my-[50px]" />}
                    backDesc="Kine Makers is a crowdfunding platform for moving pictures, where patrons buy tokens that represent film rights and are rewarded each time their films generate revenue"
                />
            </div>
        </div>
    )
}

export default Struct
