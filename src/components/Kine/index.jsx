import React from 'react';
import kinexBack from '../../assets/images/kineraFund_kinex_.png';
import tokenDistributionChart from '../../assets/images/kinex_token_distribution.png'; // Import the chart image
import './kine.css';

const Kine = () => {
    return (
        <div
            className="background-overlay4 w-full min-h-[60vh] bg-center bg-cover bg-no-repeat text-black bg-scroll md:bg-fixed py-20"
            id="kinex"
            style={{
                backgroundImage: `url(${kinexBack})`
            }}
        >
            <h1 className="-mt-12 sm:text-[70px] text-[38px] font-bold text-center text-[#3c1e11] py-10" data-aos="">KINEX</h1>
            
            <div className="w-full flex justify-center mt-10 pb-20">
                <div className="card-funding-container w-[100vk]">
                    <div className="card-kine" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            <b style={{ fontWeight: '600' }}>Kinex</b>, the platform token, was developed using the Substrate language, from which Kusama and Polkadot were built. This way, we gain the power of network interoperability and the ability to outsource task resolution in a shared security environment.
                        </p>
                    </div>
                    <div className="card-kine" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            <b style={{ fontWeight: '600' }}>Kinex</b> has multiple purposes: stake while signalling the best content in ranking lists, curate constellations, support and moderate streaming channels, and propose and vote governance proposals.
                        </p>
                    </div>
                    <div className="card-kine" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            <strong><b style={{ fontWeight: '600' }}>Kinex - Functions of the token:</b></strong>
                            <ul className="list-disc list-inside text-justify ">
                                <li>Stake while signalling the best content in ranking lists.</li>
                                <li>Create and curate content games to find the best videos in a list of categories.</li>
                                <li>Vote on the new SEE channels staking.</li>
                                <li>Propose and vote on governance proposals.</li>
                                <li>Be used as a collateral deposit within the moderation system.</li>
                                <li>Be a security deposit to ensure published content adheres to community norms and guidelines.</li>
                                <li>Validate the transactions in the network.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kine;