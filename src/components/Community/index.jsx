import { useState, useEffect } from 'react'

import DropInfo from '../DropInfo'

import fundo05 from '../../assets/images/fundo05.png'
import fundo06 from '../../assets/images/fundo06.png'
import asset06 from '../../assets/images/asset06.png'
import asset07 from '../../assets/images/asset07.png'
import asset08 from '../../assets/images/asset08.png'
import asset09 from '../../assets/images/asset09.png'

const Community = () => {
    const [selectedImage, setSelectedImage] = useState(asset06);
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);

    useEffect(() => {
        const closeOthers = () => {
            if(showAnswer1) {
                setShowAnswer2(false);
                setShowAnswer3(false);
                setShowAnswer4(false);
                setSelectedImage(asset06);
            }
        }

        closeOthers();
    }, [showAnswer1]);

    useEffect(() => {
        const closeOthers = () => {
            if(showAnswer2) {
                setShowAnswer1(false);
                setShowAnswer3(false);
                setShowAnswer4(false);
                setSelectedImage(asset07);
            }
        }

        closeOthers();
    }, [showAnswer2]);

    useEffect(() => {
        const closeOthers = () => {
            if(showAnswer3) {
                setShowAnswer2(false);
                setShowAnswer1(false);
                setShowAnswer4(false);
                setSelectedImage(asset08);
            }
        }

        closeOthers();
    }, [showAnswer3]);

    useEffect(() => {
        const closeOthers = () => {
            if(showAnswer4) {
                setShowAnswer2(false);
                setShowAnswer3(false);
                setShowAnswer1(false);
                setSelectedImage(asset09);
            }
        }

        closeOthers();
    }, [showAnswer4]);

    return (
        <div
            className="w-full min-h-screen flex flex-col pt-20 bg-center bg-cover bg-no-repeat bg-fixed text-white"
            style={{
                backgroundImage: `url(${fundo05})`
            }}
            id='community'
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center -mb-20 text-[#FF0A78]">COMMUNITY</h1>
            
            <div className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-10 lg:px-10 px-5 mt-40 pb-20">
                <div className="md:w-3/5 w-full gap-10">
                    <DropInfo
                        question="1. The community is the key to making all this possible"
                        answer="Kinera is a decentralized platform aiming to revolutionize the film industry. Its primary purpose is to classify and curate public videos from popular platforms, create television channels, and fund film productions of all sizes. The platform incentivizes participation through Kinex token rewards for actions such as creating video contests, curating content, creating television channels, or simply watching and voting on favorite videos. The strength of Kinera lies in its community-driven approach, where every participant plays an important role in its success."
                        onClick={() => { setShowAnswer1(!showAnswer1) }}
                        showAnswer={showAnswer1}
                    />
                    <DropInfo
                        question="2. Decentrlization is the key"
                        answer="Every action taken on the platform contributes to its growth and the growth of its users. Our goal is to bring together social and technological communities to create solutions that make sense of the complex world we live in. That's why we're building a platform that leverages the power of decentralized networks to drive human coordination into the future."
                        onClick={() => { setShowAnswer2(!showAnswer2) }}
                        showAnswer={showAnswer2}
                    />
                    <DropInfo
                        question="3. Token airdrops."
                        answer="We aim to use blockchain technology to provide media content with a platform for meaningful interoperability, enhancing collective actions that create new social value, aligning online communities, and building upon this infrastructure. To facilitate this, we have included various forms of offers to the community, including token airdrops."
                        onClick={() => { setShowAnswer3(!showAnswer3) }}
                        showAnswer={showAnswer3}
                    />
                    <DropInfo
                        question="4. Register as a curator and be creative."
                        answer="To ensure a robust and diverse community of curators and to kickstart the platform, we will be initiating a series of incentivized contests to reward participants who submit meaningful and high-quality content with Kinex tokens. This initiative fosters the creation of constellations aligned with the platform's objectives. If you're interested in participating, you can register for our newsletter to receive updates on future contests that lead to airdrops."
                        onClick={() => { setShowAnswer4(!showAnswer4) }}
                        showAnswer={showAnswer4}
                    />
                </div>

                <div className="md:w-1/5 w-full flex flex-col items-center justify-center">
                    <img src={selectedImage} alt="asset00" className="duration-500 origin-top md:w-auto w-1/3" />

                    <ul className="flex">
                        <li
                            className="w-10 h-5 mx-1"
                        >
                            <button
                                className={`w-full h-[3px] ${showAnswer1 ? 'bg-[#FF0083]': 'bg-black'}`}
                                onClick={() => { setShowAnswer1(true) }}
                            />
                        </li>
                        <li
                            className="w-10 h-5 mx-1"
                        >
                            <button
                                className={`w-full h-[3px] ${showAnswer2 ? 'bg-[#FF0083]': 'bg-black'}`}
                                onClick={() => { setShowAnswer2(true) }}
                            />
                        </li>
                        <li
                            className="w-10 h-5 mx-1"
                        >
                            <button
                                className={`w-full h-[3px] ${showAnswer3 ? 'bg-[#FF0083]': 'bg-black'}`}
                                onClick={() => { setShowAnswer3(true) }}
                            />
                        </li>
                        <li
                            className="w-10 h-5 mx-1"
                        >
                            <button
                                className={`w-full h-[3px] ${showAnswer4 ? 'bg-[#FF0083]': 'bg-black'}`}
                                onClick={() => { setShowAnswer4(true) }}
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="w-full min-h-screen flex flex-col py-20 md:px-44 px-5 bg-center bg-cover bg-no-repeat bg-fixed text-white"
                style={{
                    backgroundImage: `url(${fundo06})`
                }}
                id='funding'
            >
                <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78] mt-10" data-aos="zoom-in">FUNDING</h1>

                <h2 className="font-semibold text-center text-[28px] mt-20" data-aos="zoom-in">Blockchain technology disrupts and overcomes many challenges inherent in startup financing.</h2>
                
                <div className="w-full flex flex-col gap-10 mt-20" data-aos="zoom-in">
                    <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">The widespread adoption of crypto can be attributed to Ethereum's financing model and Bitcoin's permissionless mining. From a time when venture capital didn’t exist to the current funding landscape, we can see the diminishing role of individual investors and the comeback of centralized models.</p>
                    <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">Before 2020, when NFTs captured the world’s attention, crypto projects were mostly protocols and financial applications. NFTs marked a shift for blockchain technology, as tokens began to find practical utility in people's lives, and this tendency will remain.</p>
                    <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">Our proposal is to leverage the Kinex token for content curation on the Kinera platform. We anticipate that curation tokens will emerge in the next few years, possessing the same capacity to capture people's imagination as NFTs did.</p>
                    <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">When discussing tokens with the features of curation and funding, it is crucial to cap participants' contributions to ensure voting systems remain unbiased against users with initial advantages in voting power. This approach focuses curation tokens on their primary goal of fostering a community of interested users, and we will dedicate significant effort to achieve this goal.</p>
                    <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">If you wish to participate and receive information about the funding process subscribe to our newsletter bellow.</p>
                </div>
            </div>
        </div>
    )
}

export default Community