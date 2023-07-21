import { useState, useEffect } from 'react'

import { BsDiscord, BsYoutube, BsLinkedin, BsMedium } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'

import socialBack from "../../assets/images/socialBack.png";

const Social = () => {
    return (
        <div
            id='social'
            className="w-full bg-fixed bg-center py-16"
            style={{
                backgroundImage: `url(${socialBack})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                
            }}
        >
            <div className="min-h-[30vh] flex flex-col items-center md:px-20 px-2 gap-y-20">
                <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#F3F6FB] mt-10">SOCIAL</h1>

                <div className="w-full flex justify-center flex-wrap gap-10">
                    <a href='https://discord.gg/VxhMApAGMn' className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsDiscord color='#333333' />
                        <span>Discord</span>
                    </a>
                    <a href='https://youtube.com' className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsYoutube color='#333333' />
                        <span>Youtube</span>
                    </a>
                    <a href='https://medium.com/@kine.newsletter' className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsMedium color='#333333' />
                        <span>Medium</span>
                    </a>
                    <a href='https://linkedin' className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsLinkedin color='#333333' />
                        <span>Linkedin</span>
                    </a>
                    <a href='newsletter@kinera.network' className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <IoMail color='#333333' />
                        <span>Mail</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social
