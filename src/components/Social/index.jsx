import { useState, useEffect } from 'react'

import { BsDiscord, BsYoutube, BsLinkedin, BsMedium } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'

import FundoSocial from '../../assets/images/FundoSocial.png'

const Social = () => {
    return (
        <div
            id='social'
            className="w-full bg-fixed bg-center py-16"
            style={{
                backgroundImage: `url(${FundoSocial})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                
            }}
        >
            <div className="min-h-[30vh] flex flex-col items-center md:px-20 px-2 gap-y-20">
                <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#F3F6FB] mt-10">SOCIAL</h1>

                <div className="w-full flex justify-center flex-wrap gap-10">
                    <a href='https://discord.gg/VxhMApAGMn' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <BsDiscord color='#CC3366' />
                        <span>Discord</span>
                    </a>
                    <a href='https://youtube.com' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <BsYoutube color='#CC3366' />
                        <span>Youtube</span>
                    </a>
                    <a href='https://medium.com/@kine.newsletter' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <BsMedium color='#CC3366' />
                        <span>Medium</span>
                    </a>
                    <a href='https://linkedin' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <BsLinkedin color='#CC3366' />
                        <span>Linkedin</span>
                    </a>
                    <a href='https://gmail.com' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <IoMail color='#CC3366' />
                        <span>Mail</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social
