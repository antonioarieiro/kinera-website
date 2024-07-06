import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    return (
      <header className="flex flex-col lg:flex-row items-center justify-center w-full px-10 py-2 border-b border-white bg-[#FFFFFF] text-[#351e2d]">
        <div className="flex justify-between items-center w-full lg:w-auto min-h-[70px]">
          <GiHamburgerMenu
            className="lg:hidden cursor-pointer w-10 h-10"
            onClick={() => setShowDropDownMenu(!showDropDownMenu)}
          />
        </div>
        <nav
          className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-6 lg:mt-0 ${
            showDropDownMenu ? "block" : "lg:block hidden"
          } lg:flex`}
        >
          <a href="/#home" className="text-base hover:text-[#6a466a]">
            Home
          </a>
          <div className="group relative z-10">
            <button className="flex items-center gap-2 text-#351e2d group-hover:text-[#6a466a] text-base">
              Kinera
              <IoIosArrowDown className="text-[#6a466a] group-hover:text-[#351e2d]" />
            </button>
            <div className="invisible group-hover:visible group-hover:opacity-100 rounded w-60 absolute left-0 top-full transition-all opacity-0 bg-[#351e2d] shadow-xl py-1">
              <ul>
                <li>
                  <a
                    className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#6a466a]"
                    href="/#about"
                  >
                    About
                  </a>
                </li>
                {/*<li><a className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#6a466a]" href="/#mission">Mission</a></li>*/}
                <li>
                  <a
                    className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#6a466a]"
                    href="/#kinex"
                  >
                    Kinex Token
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#6a466a]"
                    href="/#struct"
                  >
                    Kinera Structure
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#6a466a]"
                    href="/#participation"
                  >
                    Types of Participation
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#FFFFFF] block px-4 py-2 hover:bg-[#6a466a]"
                    href="https://drive.google.com/file/d/1zoowL-_N_BlzWLCeMEqmjDXY3JZ6HDQL/view?usp=share_link"
                    target="_blank"
                  >
                    Lightpaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*<a href="/#foundation" className="text-base hover:text-[#6a466a]">Foundation</a>*/}
          <a href="/#community" className="text-base hover:text-[#6a466a]">
            Community
          </a>
          <a href="/#funding" className="text-base hover:text-[#6a466a]">
            Funding
          </a>
          <a
            href="/newsletter"
            className="text-base hover:text-[#F6a466aF0A78]"
          >
            Newsletter
          </a>
          <a
            href="https://blog.kinera.network/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-[#6a466a]"
          >
            Blog
          </a>
          <a href="/#social" className="text-base hover:text-[#6a466a]">
            Social
          </a>
          {/* New Button Added */}
          <a
            href="https://d-app.kinera.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-[#351e2d] hover:bg-[#6a466a]/80 transition duration-300 ease-in-out rounded text-white"
          >
            Launch dAPP
          </a>
        </nav>
      </header>
    );
}

export default Header;