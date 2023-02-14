import { AiOutlineCaretDown } from "react-icons/ai";

import Header from "../Header";

import './style.css';

import BigK from '../../assets/images/bigK.png';
import BigK02 from '../../assets/images/bigK02.png';
import BigK03 from '../../assets/images/bigK03.png';

// className="md:p-10 p-0 w-1/2 animate-[bounce_1.5s_infinite] md:mt-20 mt-32"
// <img src={BigK} alt='BigK' className="w-48 h-48 absolute bottom-1/2" />
/*
@keyframes bounce {
    0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
}
.animate-bounce {
    animation: bounce 1s infinite;
}
*/

const Welcome = () => {
    return (
        <div
            className="w-full mb-12 text-[#F3F6FB]"
            id="home"
        >
            <Header />

            <div className="w-full min-h-[90vh] flex flex-col items-center justify-center lg:px-10 px-2 gap-y-6 mt-10">
                <div className="w-full flex lg:flex-row flex-col items-center">
                    <div className="flex flex-col lg:w-1/2 w-full gap-10">
                        <h1 className="sm:text-[76px] text-[48px] font-bold text-center">KINERGY PLATFORM</h1>

                        <p className="sm:text-[19px] text-[16px] font-semibold w-full text-center">A social network for moving pictures curation, a framework to kick-start and manage online film and video competitions</p>
                    </div>

                    <div className="lg:w-[35rem] w-full h-[35rem] mt-10 relative sm:block hidden">
                        <img src={BigK02} alt='BigK02' className="w-[34.375rem] absolute bottom-[12%] left-[40%] pulse" />
                        <img src={BigK} alt='BigK' className="w-[12rem] absolute bottom-[25%] left-[75%] right-0 z-10 pulse" />
                        <img src={BigK03} alt='BigK03' className="w-[37.5rem] absolute bottom-[10%] left-[40%]" />
                    </div>

                    <img src={BigK} alt='BigK' className="block sm:hidden md:p-10 p-0 w-1/2 pulse md:mt-20 mt-32" />
                </div>

                <div className="w-full flex justify-center">
                    <a className="px-10 py-3 rounded-3xl flex items-center gap-4 bg-white text-black font-bold" href="/#about">
                        <AiOutlineCaretDown className="text-red-600 text-xl" />
                        <p>Know more</p>
                        <AiOutlineCaretDown className="text-red-600 text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
