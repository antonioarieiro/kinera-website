import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

import LOGO from '../../assets/images/logo.png';

const Header = () => {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    return(
        <header className="flex lg:flex-row flex-col items-center lg:justify-start gap-x-52 justify-between min-h-[10vh] w-full px-10 py-2 border-b border-white text-[#F3F6FB]">
            <div className="lg:w-auto w-full flex justify-between items-center">
                <img src={LOGO} alt="logo" className="h-[60px] w-[175px]" />
                <GiHamburgerMenu
                    className="lg:hidden flex sm:w-10 w-6 sm:h-10 h-6 cursor-pointer"
                    onClick={() => setShowDropDownMenu(!showDropDownMenu)}
                />
            </div>
            <ul className="lg:flex hidden gap-x-8">
                <li className="text-base hover:text-[#FF0A78]"><a href="/#home">Home</a></li>
                <li className="group relative">
                    <div className="flex items-center gap-2">
                        <a href="/#about" className="text-white group-hover:text-[#FF0A78] text-base">Kinergy</a>
                        <IoIosArrowDown className="group-hover:text-white text-[#FF0A78]" />
                    </div>

                    <nav
                        className="bg-[#1D1D20] invisible rounded w-60 absolute left-0 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 shadow-xl"
                    >
                        <ul className="py-1">
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#about">About</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#mission">Mission</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#kine">Kine Token</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#struct">Kinergy Structure</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="/#participation">Types of Participation</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="https://drive.google.com/file/d/1zoowL-_N_BlzWLCeMEqmjDXY3JZ6HDQL/view?usp=share_link">Lightpaper</a></li>
                        </ul>
                    </nav>
                </li>
                <li className="text-base hover:text-[#FF0A78]"><a href="/#foundation">Foundation</a></li>
                <li className="text-base hover:text-[#FF0A78]"><a href="/#community">Community</a></li>
                <li className="text-base hover:text-[#FF0A78]"><a href="/#funding">Funding</a></li>
                <li className="text-base hover:text-[#FF0A78]"><a href="/#newsletter">Newsletter</a></li>
                <li className="text-base hover:text-[#FF0A78]"><a href="/#blog">Blog</a></li>
                <li className="text-base hover:text-[#FF0A78]"><a href="/#social">Social</a></li>
            </ul>

            <ul className={`w-full flex-col justify-center items-center gap-x-8 pt-10 ${showDropDownMenu ? 'flex' : 'hidden'}`}>
                <li className="text-base hover:text-[#DDD]"><a href="/#home">Home</a></li>
                <li className="group">
                    <div className="flex items-center gap-2">
                        <span className="text-white group-hover:text-[#FF0A78] text-base">Kinergy</span>
                        <IoIosArrowDown className="group-hover:text-white text-[#FF0A78]" />
                    </div>

                    <ul className="absolute group-hover:flex flex-col gap-0 mt-0 lg:w-[220px] w-full bg-black hidden">
                        <li className="bg-transparent pl-4 py-3 hover:bg-[#FF0A78] duration-500"><a href="/#about">About</a></li>
                        <li className="bg-transparent pl-4 py-3 hover:bg-[#FF0A78] duration-500"><a href="/#mission">Mission</a></li>
                        <li className="bg-transparent pl-4 py-3 hover:bg-[#FF0A78] duration-500"><a href="/#kine">Kine Token</a></li>
                        <li className="bg-transparent pl-4 py-3 hover:bg-[#FF0A78] duration-500"><a href="/#struct">Kinergy Structure</a></li>
                        <li className="bg-transparent pl-4 py-3 hover:bg-[#FF0A78] duration-500"><a href="/#participation">Types of Participation</a></li>
                        <li className="bg-transparent pl-4 py-3 hover:bg-[#FF0A78] duration-500"><a href="/">Social</a></li>
                    </ul>
                </li>
                <li className="text-base hover:text-[#DDD]"><a href="/#foundation">Foundation</a></li>
                <li className="text-base hover:text-[#DDD]"><a href="/#community">Community</a></li>
                <li className="text-base hover:text-[#DDD]"><a href="/#funding">Funding</a></li>
                <li className="text-base hover:text-[#DDD]"><a href="/#newsletter">Newsletter</a></li>
                <li className="text-base hover:text-[#DDD]"><a href="/">Blog</a></li>
                <li className="text-base hover:text-[#DDD]"><a href="/#social">Social</a></li>
            </ul>
        </header>
    );
}

export default Header;
