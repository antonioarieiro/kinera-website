import { useState, useEffect } from 'react';

import { BsDiscord, BsYoutube, BsTwitter, BsTelegram } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';

import socialBack from "../../assets/images/socialBack2.webp";

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
            <div className="w-full p-10 flex flex-col items-center justify-center gap-20" data-aos="">
                <h1 className="sm:text-[75px] text-[38px] font-bold text-center text-[#F3F6FB] -mt-4">SOCIAL</h1>

                <div className="w-full flex justify-center flex-wrap gap-10">
                    <a href='https://discord.gg/VxhMApAGMn' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsDiscord color='#333333' />
                        <span>Discord</span>
                    </a>
                    <a href='https://www.youtube.com/@kineranetwork' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsYoutube color='#333333' />
                        <span>Youtube</span>
                    </a>
                    <a href='https://t.me/+VtO6KM3aNgNjYmRh' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <BsTelegram color='#333333' />
                        <span>Telegram - Winners</span>
                    </a>
                    <a href='https://twitter.com/kinera_winners' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white hover:bg-[#FF0A78] hover:scale-105 duration-500 text-[#101111] hover:text-white px-4 py-1 rounded-2xl">
                        <IoMail color='#333333' />
                        <span>X - Winners</span>
                    </a>
                </div>
                <div className="w-full mt-0 flex sm:flex-row flex-col sm:justify-between justify-center items-center" style={{ marginBottom: '-70px' }}>
                    <p className="text-center">Kinera© 2024.</p>
                    <p className="text-center">Developed by: <a href="https://www.invisiblehandlab.org" target="_blank" rel="noopener noreferrer">Invisible Hand Lab</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Social;