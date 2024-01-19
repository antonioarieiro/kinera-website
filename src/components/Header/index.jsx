import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    return (
        <header className="flex flex-col items-center justify-center w-full px-10 py-2 border-b border-white bg-[#0b0d17] text-[#F3F6FB]">
            <div className="flex justify-between items-center w-full">
                <GiHamburgerMenu
                    className="cursor-pointer w-10 h-10 lg:hidden"
                    onClick={() => setShowDropDownMenu(!showDropDownMenu)}
                />
            </div>
            <nav className={`flex flex-col items-center gap-4 mt-2 ${showDropDownMenu ? 'block' : 'hidden'} lg:flex lg:flex-row lg:gap-8 lg:mt-0 lg:justify-center lg:w-full`}>
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
                            <li><a className="block px-4 py-2 hover:bg-[#FF0A78]" href="https://drive.google.com/file/d/1zoowL-_N_BlzWLCeMEqmjDXY3JZ6HDQL/view?usp=share_link" target="_blank">Lightpaper</a></li>
                        </ul>
                    </div>
                </div>
                <a href="/#foundation" className="text-base hover:text-[#FF0A78]">Foundation</a>
                <a href="/#community" className="text-base hover:text-[#FF0A78]">Community</a>
                <a href="/#funding" className="text-base hover:text-[#FF0A78]">Funding</a>
                <a href="/#newsletter" className="text-base hover:text-[#FF0A78]">Newsletter</a>
                <a href="https://main--incredible-wisp-737646.netlify.app/blog" target="_blank" rel="noopener noreferrer" className="text-base hover:text-[#FF0A78]">Blog</a>
                <a href="/#social" className="text-base hover:text-[#FF0A78]">Social</a>
                <a href="https://d-app.kinera.network/" target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 bg-[#FF0A78] hover:bg-[#FF0A78]/80 transition duration-300 ease-in-out rounded text-white">Launch dAPP</a>
            </nav>
            {/* New Text Added Under Menu Items */}
            <div className="text-center mt-3 w-full">
                <span className="text-base">
                    16CkbzjYiDyDouGZn1y5diYLueqqNQHScFEA7XkK4Mmcj2Mx
                </span>
            </div>
        </header>
    );
}

export default Header;