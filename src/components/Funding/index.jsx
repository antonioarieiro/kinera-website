import { useState, useEffect } from 'react'

import fundBack from '../../assets/images/fundBack.png'


const Funding = () => {
    return (
        <div
    className="w-full min-h-screen flex flex-col py-20 md:px-44 px-5 bg-center bg-no-repeat bg-fixed text-white"
    style={{
        backgroundImage: `url(${fundBack})`,
        backgroundSize: 'auto'
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

)
}

export default Funding