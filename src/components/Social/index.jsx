import { useState, useEffect } from 'react'

import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'
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
            <div className="min-h-[40vh] flex flex-col items-center md:px-20 px-2 gap-y-16">
                <h1 className="sm:text-[60px] p-20 text-3xl font-semibold text-center">KINERGY SOCIAL</h1>

                <div className="w-full flex justify-center flex-wrap gap-10">
                    <a href='https://discord.com' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <BsDiscord color='#CC3366' />
                        <span>Discord</span>
                    </a>
                    <a href='https://github.com' className="flex items-center gap-2 bg-[#333333] hover:bg-[#8a00c2] hover:scale-105 duration-500 px-4 py-1 rounded-2xl">
                        <BsGithub color='#CC3366' />
                        <span>Github</span>
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
