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
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]">COMMUNITY</h1>
            
            <div className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-10 lg:px-10 px-5 mt-40 pb-20">
                <div className="md:w-3/5 w-full gap-10">
                    <DropInfo
                        question="1. The community is the key to making all this possible"
                        answer="Kinergy was devised as a tool to classify public videos from the most widely-used platforms, to be a protocol for the creation of television channels and to raise money for both small and large scale film productions. Its architecture is designed to reward participants' actions such as: creating video contests, curating content or new television channels, or simply watching videos and betting on their personal favorites. The community is the key to making all this possible."
                        onClick={() => { setShowAnswer1(!showAnswer1) }}
                        showAnswer={showAnswer1}
                    />
                    <DropInfo
                        question="2. Decentralization is fundamental"
                        answer="Every action taken inside Kinergy promotes both user and platform growth. We believe that everyone can contribute to the understanding of the bigger picture the world asks us to make sense of. This implies creating solutions that enable synergies between social and technological communities. Therefore, we are building a platform that envisions open decentralized networks as the future of human coordination."
                        onClick={() => { setShowAnswer2(!showAnswer2) }}
                        showAnswer={showAnswer2}
                    />
                    <DropInfo
                        question="3. Kine Foundation's first founding act"
                        answer="We want to use blockchain technology to give media content a platform for the creation of meaningful interoperability, to enhance collective actions that create new social value, align online communities and build on top of this infrastructure. To make this possible, many forms of community funding are included in the protocol and in Kine Foundation's first founding act - open competitions that generate token airdrops for the participants."
                        onClick={() => { setShowAnswer3(!showAnswer3) }}
                        showAnswer={showAnswer3}
                    />
                    <DropInfo
                        question="4. Register as a curator and be creative"
                        answer="To ensure a sufficient number of curators at the platform's launch, we are creating a series of contests that reward participants with tokens. This is done as a means of jump-starting the network through meaningful content, enabling a dynamic for the construction of television channels. Subscribe to our newsletter in case you are interested in receiving information."
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
                <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78] mt-10" data-aos="zoom-in">FUNDING AND SEED FUNDING</h1>

                <h2 className="font-semibold text-center text-[28px] mt-5 mb-10 text-[#FF0A78]">What has been done. how can we do it</h2>

                <h2 className="font-semibold text-center text-[28px] mt-20" data-aos="zoom-in">Blockchain technology disrupts and overcomes many problems inherent to startup financing.</h2>
                
                <div className="w-full flex flex-col gap-10 mt-20" data-aos="zoom-in">
                    <p className="text-center text-[19px] font-extralight">The wide adoption of crypto is mainly due to Ethereum’s financing model and Bitcoin’s permissionless mining access since its inception. Until 2015, there was no venture capital or angel investments helping projects to grow. Today, single investors are being left out of funding opportunities, making this ecosystem more centralized.</p>
                    <p className="text-center text-[19px] font-extralight">Until 2020 protocols and financial applications dominated the landscape. When NFTs entered the space capturing everybody's imagination, blockchain technology matured beyond its financial roots, and tokens started to have a practical utility in people's lives.</p>
                    <p className="text-center text-[19px] font-extralight">Our proposal is to use the Kine token to curate content in the Kinergy platform. We believe that curation tokens will emerge in the next few years and have the same capacity to capture people's imagination that NFTs had. </p>
                    <p className="text-center text-[19px] font-extralight">When we talk about curation, to maintain voting systems exemption from users that have an initial advantage of having more voting power, participants’ contributions in the different funding opportunities must be capped. This makes curation tokens' first goal the creation of a community of interested users and will be dedicating a substantial amount of creativity to this task.</p>
                    <p className="text-center text-[19px] font-extralight">Seed funders will have a small advantage in the token price but not in the number of tokens received. This practice is designed to multiply community members and this will strengthen and add credibility to the information curated in the Kinergy platform.</p>
                    <p className="text-center text-[19px] font-extralight">Be the first to be informed about the funding opportunities by subscribing to our newletter.</p>
                </div>
            </div>
        </div>
    )
}

export default Community