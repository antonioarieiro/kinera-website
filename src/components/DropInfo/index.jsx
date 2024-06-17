import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const DropInfo = ({ answer, question, onClick, showAnswer }) => {
    
    return (
        <div className='w-full flex flex-col'>
            <div
                onClick={onClick}
                className={`w-full h-[48px] px-10 flex items-center rounded-lg text-white duration-500 cursor-pointer ${showAnswer ? 'bg-[#351e2d]' : 'bg-[#6a466a]'}`}
            >
                <span className="w-full flex text-[18px]">
                    {question}
                </span>
                { showAnswer ? ( <AiFillEyeInvisible size={26} /> ) : ( <AiFillEye size={26} /> ) }
            </div>

            <div className={`w-full bg-[rgba(106,70,106,0.18)] text-[#351e2d] text-[20px] mt-5 px-5 py-4 origin-bottom duration-500 ease-in-out ${showAnswer ? 'opacity-100 min-h-56 mb-5' : 'opacity-0 pointer-events-none h-0'}`}>
                {answer}
            </div>
        </div>
    );
}

export default DropInfo;