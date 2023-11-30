import { useState, useEffect } from 'react'

import DropInfo from '../DropInfo'

import comuBack from '../../assets/images/comuBack.png'
import fundBack from '../../assets/images/fundBack.png'
import asset06 from '../../assets/images/asset06.png'
import asset07 from '../../assets/images/asset07.png?v=1' // Add query parameter for Cache Busting
import asset08 from '../../assets/images/asset08.png?v=1' // Add query parameter
import asset09 from '../../assets/images/asset09.png?v=1' // Add query parameter

const Community = () => {
    const [selectedImage, setSelectedImage] = useState(asset07);
    const [showAnswer, setShowAnswer] = useState(1);

    useEffect(() => {
        switch(showAnswer) {
            case 1:
                setSelectedImage(asset07);
                break;
            case 2:
                setSelectedImage(asset06);
                break;
            case 3:
                setSelectedImage(asset08);
                break;
            case 4:
                setSelectedImage(asset09);
                break;
            default:
                setSelectedImage(asset07);
        }
    }, [showAnswer]);

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
                        question="1. Decentralization is a core feature of Kinera."
                        answer="Every action taken on the platform contributes to the network's growth. Our goal is to bring together social and technological communities to create a better understanding of the complex world we live in. We aim to develop a platform that leverages the strength of decentralised networks as coordination systems to free the media from external influences, namely from the control of major corporations and  institutional manipulation."
                        onClick={() => setShowAnswer(1)}
                        showAnswer={showAnswer === 1}
                    />
                    <DropInfo
                        question="2. The community of participants is the backbone of Kinera."
                        answer="Kinera is a decentralised platform aiming to revolutionise the way we make, classify and consume media. Its primary purpose is to classify and curate public videos from popular platforms, create television channels, and fund audio-visual projects of all sizes. The platform incentivizes participation through Kinex token rewards for actions such as creating video contests, curating content, creating television channels, or simply watching and voting on favourite videos. The strength of Kinera lies in its community-driven approach, where every participant plays an important role in its success."
                        onClick={() => setShowAnswer(2)}
                        showAnswer={showAnswer === 2}
                    />
                    <DropInfo
                        question="3. Token airdrops to reward engagement."
                        answer="The Kinera platform uses blockchain technology to provide the conditions for media content that can  enhance  collective actions, create social value and align  online communities. To facilitate this, we have various offers to the community, including token airdrops."
                        onClick={() => setShowAnswer(3)}
                        showAnswer={showAnswer === 3}
                    />
                    <DropInfo
                        question="4. Register as a curator and be creative."
                        answer="To kickstart the platform and build a  strong and diverse community of curators, we will implement a series of incentives in the form of contests. These contests will reward participants who submit meaningful and high-quality content with Kinex tokens. This initiative aims to encourage the creation of constellations aligned with the platform's objectives. If you're interested in participating, you can register to receive our newsletter for updates on future contests that may lead to airdrops."
                        onClick={() => setShowAnswer(4)}
                        showAnswer={showAnswer === 4}
                    />
                </div>

                <div className="md:w-1/5 w-full flex flex-col items-center justify-center">
                    <img src={selectedImage} alt="asset00" className="duration-500 origin-top md:w-auto w-1/3" />

                    <div className="flex flex-col items-center justify-center mt-4">
                        {[1, 2, 3, 4].map(num => (
                            <button
                                key={num}
                                className={`mb-2 rounded-full w-5 h-5 ${showAnswer === num ? 'bg-[#FF0083]': 'bg-black'}`}
                                onClick={() => setShowAnswer(num)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community