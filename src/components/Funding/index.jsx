import { useState, useEffect } from 'react';
import fundBack from '../../assets/images/fundBack.png';

const Funding = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col pt-5 pb-20 md:px-20 px-5 bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${fundBack})`, backgroundSize: 'auto' }}
            id='funding'
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-[#FF0A78] mt-10" data-aos="zoom-in">FUNDING</h1>
           
            
            <div className="w-full flex flex-col gap-10 mt-10" data-aos="fade-left">
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                <span class="glitch">Blockchain technology </span>can potentially disrupt and overcome many challenges inherent in startup financing. The widespread adoption of cryptocurrencies can largely be credited to Ethereum's open-to-all financing model and Bitcoin's permissionless mining approach.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                From a time when venture capital didn’t exist to the current funding landscape, we can see the diminishing role of individual investors and the comeback of centralised corporate models.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                Before NFTs captured the world’s attention, crypto projects were mostly protocols and financial applications. NFTs represented a shift in blockchain technology as tokens began to be employed to serve practical purposes in people's lives. We anticipate this trend to persist.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                <span class="glitch">The Kinex token </span>and curation markets create a gamified environment to classify information at scale. Because Kinera has no entry barriers and the token has practical purposes in social life, we expect it to emerge with the same capacity to capture people's imagination as NFTs.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                To ensure that voting systems remain unbiased against users with initial advantages in voting power, seed funding investors, consultants or other contributors aren’t paid with Kinex tokens (or are subject to a limited amount). Our funding event will be open to everyone, and contributions will be capped.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                A community of interested users committed to innovation using and advocating for the concepts outlined in the present Paper is taking its first steps. This text is an open invitation to collaboration. You can be a beta tester, join the technical team coding the application, or contribute with new ideas to shape the ecosystem. We pursue common goals, support common rules and take risks together.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                <span class="glitch">Subscribe to our newsletter</span> if you wish to participate and receive regular information about the project or our funding rounds.
                </p>
            </div>
        </div>
    );
}

export default Funding;