import './index.css'

import React from 'react'

const FlipCard = ({ title, backDesc, imgUrl, icon, id }) => {
    return (
        <div className="flip-card-container md:w-[290px] w-full h-[555px] text-white" data-aos="flip-right" >
            <div className="flip-card">
                <div className="flip-card-front flex flex-col justify-center items-center gap-5 bg-[#1D1D20] rounded-[38px] border-2 border-[#6a466a]" id={id}>               
                    <img src={imgUrl} alt="icon" className="md:w-4/5 w-2/5 img-opacity" />
                    <h1 className="text-[24px] md:text-[24px] text-center text-white font-semibold">{title}</h1>
                </div>
                <div className="flip-card-back flex flex-col px-3 bg-[#6a466a] rounded-[38px]">
                    <div className="w-full flex justify-center -mb-4 icon-container mt-icon">
                        {icon}
                    </div>
                    <div className="text-center text-lg md:text-lg mb-auto">{backDesc}</div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard