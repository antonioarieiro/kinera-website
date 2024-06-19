import { useState } from 'react'

import DropInfo from '../DropInfo'

import comuBack from '../../assets/images/comuBack.png'

import ReactMarkdown from 'react-markdown'

import './community.css';

const Community = () => {
    const [showAnswer, setShowAnswer] = useState(1);

    return (
        <div
            className="background-overlay3 w-full flex flex-col pt-20 pb-10 bg-center bg-cover bg-no-repeat bg-scroll text-white" 
            style={{
                backgroundImage: `url(${comuBack})`
            }}
            id='community'
        >
            <h1 className="mt-6 sm:text-[70px] text-[38px] font-bold text-center -mb-10 text-[#351e2d]" data-aos="">COMMUNITY</h1>
            
            <div className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-10 lg:px-10 px-5 mt-32 pb-20" data-aos="">
                <div className="md:w-3/5 w-full gap-10">
                    <DropInfo
                        question={<ReactMarkdown>{"***1. Decentralisation is a core feature of Kinera.***"}</ReactMarkdown>}
                        answer={<ReactMarkdown>{"***Every action taken on the platform contributes to the network's growth***. Our goal is to bring together social and technological communities to create a better understanding of the complex world we live in. We aim to develop a platform that ***leverages the strength of decentralised networks*** as coordination systems to free the media from external influences, namely from the control of major corporations and institutional manipulation."}</ReactMarkdown>}
                        onClick={() => setShowAnswer(1)}
                        showAnswer={showAnswer === 1}
                    />
                    <DropInfo
                        question={<ReactMarkdown>{"***2. The community of participants is the backbone of Kinera.***"}</ReactMarkdown>}
                        answer={<ReactMarkdown>{"***Kinera is a decentralised platform aiming to revolutionise how we make, classify and consume media***. Its primary purpose is to categorise and rank the best videos from popular platforms, create subscription channels, and fund audio-visual projects proposed by the users. The platform ***incentivises participation through Kinex tokens***, rewarding participants for making video competitions, curating content, creating television channels, or simply watching and voting on their favourite videos. The strength of Kinera lies in its ***community-driven approach***, where every participant plays a role in its success."}</ReactMarkdown>}
                        onClick={() => setShowAnswer(2)}
                        showAnswer={showAnswer === 2}
                    />
                    <DropInfo
                        question={<ReactMarkdown>{"***3. Token airdrops***"}</ReactMarkdown>}
                        answer={<ReactMarkdown>{"***The Kinera platform*** uses blockchain technology to provide the conditions for media content that can enhance collective actions, create social value and align online communities. To facilitate this, we have various ***offers to the community, including token airdrops***."}</ReactMarkdown>}
                        onClick={() => setShowAnswer(3)}
                        showAnswer={showAnswer === 3}
                    />
                    <DropInfo
                        question={<ReactMarkdown>{"***4. Register as a curator and be creative.***"}</ReactMarkdown>}
                        answer={<ReactMarkdown>{"***To kickstart the platform*** and build a  strong and diverse community of curators, we will implement a series of incentives in the form of contests. These contests will ***reward participants submitting meaningful, high-quality content with Kinex tokens***. This initiative aims to encourage the creation of constellations aligned with the platform's goals. ***If you're interested in participating, you can register to receive our newsletter for updates on future contests that may lead to airdrops.***"}</ReactMarkdown>}
                        onClick={() => setShowAnswer(4)}
                        showAnswer={showAnswer === 4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Community