import { useState, useEffect } from 'react'

import DropInfo from '../DropInfo'

import comuBack from '../../assets/images/comuBack.png'
import fundBack from '../../assets/images/fundBack.png'
import asset06 from '../../assets/images/asset06.png'
import asset07 from '../../assets/images/asset07.png?v=1' // Add query parameter for Cache Bustin
import asset08 from '../../assets/images/asset08.png?v=1' // Add query parameter
import asset09 from '../../assets/images/asset09.png?v=1' // Add query parameter

const Community = () => {
    const [selectedImage, setSelectedImage] = useState(asset07);
    const [showAnswer1, setShowAnswer1] = useState(true);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);

    useEffect(() => {
        const closeOthers = () => {
            if(showAnswer1) {
                setShowAnswer2(false);
                setShowAnswer3(false);
                setShowAnswer4(false);
                setSelectedImage(asset07);
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
                setSelectedImage(asset06);
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
    className="w-full flex flex-col pt-20 pb-10 bg-center bg-cover bg-no-repeat bg-fixed text-white" 
    style={{
        backgroundImage: `url(${comuBack})`
    }}
    id='community'
>
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center -mb-20 text-[#FF0A78]" data-aos="fade-left">COMMUNITY</h1>
            
            <div className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-10 lg:px-10 px-5 mt-32 pb-20" data-aos="fade-right">
                <div className="md:w-3/5 w-full gap-10">
                    <DropInfo
                        question="1. Decentralization is a core feature of Kinera "
                        answer="Every action taken on the platform contributes to the network's growth. Our goal is to bring together social and technological communities to create a better understanding of the complex world we live in. We aim to develop a platform that leverages the strength of decentralised networks as coordination systems to free the media from external influences, namely from the control of major corporations and  institutional manipulation."
                        onClick={() => { setShowAnswer1(!showAnswer1) }}
                        showAnswer={showAnswer1}
                    />
                    <DropInfo
                        question="2. The community of participants is the backbone of Kinera."
                        answer="Kinera is a decentralised platform aiming to revolutionise the way we make, classify and consume media. Its primary purpose is to classify and curate public videos from popular platforms, create television channels, and fund audio-visual projects of all sizes. The platform incentivizes participation through Kinex token rewards for actions such as creating video contests, curating content, creating television channels, or simply watching and voting on favourite videos. The strength of Kinera lies in its community-driven approach, where every participant plays an important role in its success."
                        onClick={() => { setShowAnswer2(!showAnswer2) }}
                        showAnswer={showAnswer2}
                    />
                    <DropInfo
                        question="3. Token airdrops."
                        answer="The Kinera platform uses blockchain technology to provide the conditions for media content that can  enhance  collective actions, create social value and align  online communities. To facilitate this, we have various offers to the community, including token airdrops."
                        onClick={() => { setShowAnswer3(!showAnswer3) }}
                        showAnswer={showAnswer3}
                    />
                    <DropInfo
                        question="4. Register as a curator and be creative."
                        answer="To kickstart the platform and build a  strong and diverse community of curators, we will implement a series of incentives in the form of contests. These contests will reward participants who submit meaningful and high-quality content with Kinex tokens. This initiative aims to encourage the creation of constellations aligned with the platform's objectives. If you're interested in participating, you can register to receive our newsletter for updates on future contests that may lead to airdrops."
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

           
        </div>
    )
}

export default Community