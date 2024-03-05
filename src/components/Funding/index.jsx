import { useState, useEffect } from 'react';
import fundBack from '../../assets/images/fundBack1.png';
import './funding.css';

const Funding = () => {
    return (
        <div
        className="background-overlay3 w-full flex flex-col pt-20 pb-10 bg-center bg-cover bg-no-repeat bg-fixed text-white" 
        style={{
            backgroundImage: `url(${fundBack})`
        }}
            id='funding'
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-[#FF0A78] mt-10" data-aos="zoom-in">FUNDING</h1>
           
            
            <div className="w-full flex justify-center mt-10" data-aos="fade-left">
            <div className="card-container w-[80%]">
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                            <span class="glitch">Blockchain technology </span>can potentially disrupt and overcome many challenges inherent in startup financing. The widespread adoption of cryptocurrencies can largely be credited to Ethereum's open-to-all financing model and Bitcoin's permissionless mining approach.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                        From a time when venture capital didn’t exist to the current funding landscape, we can see the diminishing role of individual investors and the comeback of centralised corporate models.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                        Before NFTs captured the world’s attention, crypto projects were mostly protocols and financial applications. NFTs represented a shift in blockchain technology as tokens began to be employed to serve practical purposes in people's lives. We anticipate this trend to persist.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                        <span class="glitch">The Kinex token </span>and curation markets create a gamified environment to classify information at scale. Because Kinera has no entry barriers and the token has practical purposes in social life, we expect it to emerge with the same capacity to capture people's imagination as NFTs.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                        To ensure that voting systems remain unbiased against users with initial advantages in voting power, seed funding investors, consultants or other contributors aren’t paid with Kinex tokens (or are subject to a limited amount). Our funding event will be open to everyone, and contributions will be capped.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                        A community of interested users committed to innovation using and advocating for the concepts outlined in the present Paper is taking its first steps. This text is an open invitation to collaboration. You can be a beta tester, join the technical team coding the application, or contribute with new ideas to shape the ecosystem. We pursue common goals, support common rules and take risks together.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-left">
                        <p className="text-center text-black hover:text-white text-[19px]">
                        <span class="glitch">Subscribe to our newsletter</span> if you wish to participate and receive regular information about the project or our funding rounds.
                        </p>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Funding;