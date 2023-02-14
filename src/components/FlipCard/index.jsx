import './index.css'

import React from 'react'

const FlipCard = ({ title, backDesc, imgUrl, icon, id }) => {
    return (
        <div className="flip-card-container md:w-[265px] w-full h-[555px] text-white" data-aos="flip-right" >
            <div className="flip-card">
                <div className="flip-card-front flex flex-col justify-center items-center gap-5 bg-[#1D1D20] rounded-[38px] border-2 border-[#FF0A78]" id={id}>               
                    <img src={imgUrl} alt="icon" className="md:w-4/5 w-2/5" />
                    <h1 className="text-[24px] text-center text-[#FF43A2] font-bold">{title}</h1>
                </div>
                <div className="flip-card-back flex flex-col px-3 bg-[#FF0A78] rounded-[38px]">
                    <div className="w-full flex justify-center">
                        {icon}
                    </div>
                    <p className="text-center text-lg font-bold mb-auto">{backDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
