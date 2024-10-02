import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    return (
        <header className="flex flex-col lg:flex-row items-center justify-center w-full px-10 py-2 border-b border-white bg-[#FFFFFF] text-[#3c1e11]">
            <div className="flex justify-between items-center w-full lg:w-auto min-h-[70px]">
                <GiHamburgerMenu
                    className="lg:hidden cursor-pointer w-10 h-10"
                    onClick={() => setShowDropDownMenu(!showDropDownMenu)}
                />
            </div>
            <nav className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-6 lg:mt-0 ${showDropDownMenu ? 'block' : 'lg:block hidden'} lg:flex`}>
                <a href="/#home" className="text-base hover:text-[#da6d9e]">Home</a>
                <div className="group relative z-10">
                    <button className="flex items-center gap-2 text-#3c1e11 group-hover:text-[#da6d9e] text-base">
                        Kinera
                        <IoIosArrowDown className="text-[#da6d9e] group-hover:text-[#3c1e11]" />
                    </button>
                    <div className="invisible group-hover:visible group-hover:opacity-100 rounded w-60 absolute left-0 top-full transition-all opacity-0 bg-[#3c1e11] shadow-xl py-1">
                        <ul>
                            <li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#da6d9e]" href="/#about">About</a></li>
                            {/*<li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#da6d9e]" href="/#mission">Mission</a></li>*/}
                            <li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#da6d9e]" href="/#kinex">Kinex Token</a></li>
                            <li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#da6d9e]" href="/#struct">Kinera Structure</a></li>
                            <li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#da6d9e]" href="/#participation">Types of Participation</a></li>
                            <li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#da6d9e]" href="https://drive.google.com/file/d/1zoowL-_N_BlzWLCeMEqmjDXY3JZ6HDQL/view?usp=share_link" target="_blank">Lightpaper</a></li>
                        </ul>
                    </div>
                </div>
                {/*<a href="/#foundation" className="text-base hover:text-[#da6d9e]">Foundation</a>*/}
                <a href="/#community" className="text-base hover:text-[#da6d9e]">Community</a>
                <a href="/#funding" className="text-base hover:text-[#da6d9e]">Funding</a>
                <a href="/#newsletter" className="text-base hover:text-[#da6d9e]">Newsletter</a>
                <a href="https://blog.kinera.network/blog" target="_blank" rel="noopener noreferrer" className="text-base hover:text-[#da6d9e]">Blog</a>
                <a href="/#social" className="text-base hover:text-[#da6d9e]">Social</a>
                {/* New Button Added */}
                <a href="https://alpha.kinera.network/" target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 bg-[#3c1e11] hover:bg-[#da6d9e]/80 transition duration-300 ease-in-out rounded text-white">Launch dAPP</a>
            </nav>
        </header>
    );
}

export default Header;