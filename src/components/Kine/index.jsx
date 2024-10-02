import React from 'react';
import kinexBack from '../../assets/images/kineraFund_kinex_.png';
import tokenDistributionChart from '../../assets/images/kinex_token_distribution.png'; // Import the chart image
import './kine.css';

const Kine = () => {
    return (
        <div
            className="background-overlay4 w-full min-h-[60vh] bg-center bg-no-repeat text-black bg-scroll md:bg-fixed py-20"
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
                            The <b style={{ fontWeight: '600' }}>Kinex token </b> and <b style={{ fontWeight: '600' }}> curation markets </b> create a gamified environment for classifying information at scale, with practical implications for our social lives. This mechanism highlights the value of trusted information. As technology advances, the demand for reliable information continues to grow.
                        </p>
                    </div>
                    <div className="card-kine" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            <b style={{ fontWeight: '600' }}>Kinex</b> is the driving force behind the Kinera ecosystem. It was developed using the Substrate framework - the foundation that powers Kusama and Polkadot. This approach provides Kinex with robust network interoperability, which enables outsourced task resolution in a shared security environment
                        </p>
                    </div>
                    <div className="card-kine" data-aos="">
                        <p className="text-justify text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            <strong><b style={{ fontWeight: '600' }}>In our platform has multiple purposes, such as:</b></strong>
                            <ul className="list-disc list-inside text-justify ">
                                <li>Create and enter in a new Community;</li>
                                <li>Propose and curate Rankings;</li>
                                <li>Create and curate Constellations.;</li>
                                <li>Propose and curate SEE Streaming channels;</li>
                                <li>Be allocated as collateral deposit within the moderation system;</li>
                                <li>Be allocated as a security deposit to prevent Spam;</li>
                                <li>To vote for new media productions in Kine Makers;</li>
                                <li>To Govern the Kinera Network;</li>
                                <li>To Govern the Kinera Network.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kine;