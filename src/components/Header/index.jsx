import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

import LOGO from '../../assets/images/logo.png';

const Header = () => {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    return (
        <header className="flex flex-col lg:flex-row items-center justify-center w-full px-10 py-2 border-b border-white bg-[#1D1D20] text-[#F3F6FB]">
    <div className="flex justify-between items-center w-full lg:w-auto min-h-[70px]">
        
        <GiHamburgerMenu
            className="lg:hidden cursor-pointer w-10 h-10"
            onClick={() => setShowDropDownMenu(!showDropDownMenu)}
        />
    </div>
            <nav className={`flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6 lg:mt-0 ${showDropDownMenu ? 'block' : 'lg:block hidden'} lg:flex`}>
                <a href="/#home" className="text-base hover:text-[#FF0A78]">Home</a>
                <div className="group relative z-10">
                    <button className="flex items-center gap-2 text-white group-hover:text-[#FF0A78] text-base">
                        Kinera
                        <IoIosArrowDown className="text-[#FF0A78] group-hover:text-white" />
                    </button>
                    <div className="invisible group-hover:visible group-hover:opacity-100 rounded w-60 absolute left-0 top-full transition-all opacity-0 bg-[#1D1D20] shadow-xl py-1">
                        <ul>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#about">About</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#mission">Mission</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#kine">Kine Token</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#struct">Kinera Structure</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#participation">Types of Participation</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="https://drive.google.com/file/d/1zoowL-_N_BlzWLCeMEqmjDXY3JZ6HDQL/view?usp=share_link">Lightpaper</a></li>
                        </ul>
                    </div>
                </div>
                <a href="/#foundation" className="text-base hover:text-[#FF0A78]">Foundation</a>
                <a href="/#community" className="text-base hover:text-[#FF0A78]">Community</a>
                <a href="/#funding" className="text-base hover:text-[#FF0A78]">Funding</a>
                <a href="/#newsletter" className="text-base hover:text-[#FF0A78]">Newsletter</a>
                <a href="https://main--incredible-wisp-737646.netlify.app/blog" target="_blank" rel="noopener noreferrer" className="text-base hover:text-[#FF0A78]">Blog</a>
                <a href="/#social" className="text-base hover:text-[#FF0A78]">Social</a>
            </nav>
        </header>
    );
}

export default Header;