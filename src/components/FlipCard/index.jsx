import './index.css'

import React from 'react'

const FlipCard = ({ title, backDesc, imgUrl, id }) => {
    return (
        <div className="flip-card-container md:w-[290px] w-full h-[555px] text-[#3c1e11]" data-aos="flip-right" >
            <div className="flip-card">
                <div className="flip-card-front flex flex-col justify-center items-center gap-5 bg-[#1D1D20] rounded-[38px] border-2 border-[#6a466a]" id={id}>               
                    <img src={imgUrl} alt="icon" className="md:w-4/5 w-2/5" />
                    <h1 className="text-[24px] md:text-[24px] text-center text-[#3c1e11] font-semibold">{title}</h1>
                </div>
                <div className="flip-card-back flex flex-col px-3 bg-[#f6b7d4] rounded-[38px] justify-center items-center">
                    <div className="text-center text-lg md:text-lg mb-auto">{backDesc}</div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard