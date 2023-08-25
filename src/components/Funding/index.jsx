import { useState, useEffect } from 'react';
import fundBack from '../../assets/images/fundBack.png';

const Funding = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 md:px-20 px-5 bg-center bg-no-repeat bg-fixed text-white"
            style={{ backgroundImage: `url(${fundBack})`, backgroundSize: 'auto' }}
            id='funding'
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-[#FF0A78] mt-10" data-aos="zoom-in">FUNDING</h1>
           
            
            <div className="w-full flex flex-col gap-10 mt-10" data-aos="zoom-in">
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                    Blockchain technology disrupts and overcomes many challenges inherent in startup financing. The widespread adoption of crypto can be attributed to Ethereum's financing model with no venture capital and to Bitcoin's permissionless mining. From a time when venture capital didn’t exist to the current funding landscape, we can see the diminishing role of individual investors and the comeback of centralized corporate models.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                    Before NFTs captured the world’s attention, crypto projects were mostly protocols and financial applications. NFTs represented a shift in blockchain technology, as tokens started to serve practical purposes in people's lives. We anticipate this trend to persist.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                    Our proposal is to utilize the Kinex token for content curation on the Kinera platform. We anticipate the emergence of curation tokens and curation markets in the next few years, as they are the most effective tools for categorizing information and are likely to capture people's imagination, similar to the way NFTs did.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                    When developing tokens for curation, it is crucial to cap participants' contributions in the founding round to ensure that voting systems remain unbiased against users with initial advantages in voting power. This primary goal of curation tokens is to foster a community of interested users within the token's domain, and we will dedicate significant effort to nurturing our community.
                </p>
                <p className="text-center hover:text-[#FF0A78] text-[19px] font-extralight">
                    If you wish to participate or just receive information about our funding process subscribe to our newsletter. See instructions below.
                </p>
            </div>
        </div>
    );
}

export default Funding;