import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const DropInfo = ({ answer, question, onClick, showAnswer }) => {
    
    return (
        <div className='w-full flex flex-col'>
            <div
                onClick={onClick}
                className={`w-full h-[48px] px-10 flex items-center rounded-lg text-white duration-500 cursor-pointer ${showAnswer ? 'bg-[#321E29]' : 'bg-[#FF0A78]'}`}
            >
                <span className="w-full flex text-sm">
                    {question}
                </span>
                { showAnswer ? ( <AiFillEyeInvisible size={26} /> ) : ( <AiFillEye size={26} /> ) }
            </div>

            <div className={`w-full text-black mt-5 px-5 py-4 origin-bottom duration-500 ease-in-out ${showAnswer ? 'opacity-100 min-h-56 mb-5' : 'opacity-0 pointer-events-none h-0'}`}>
                {answer}
            </div>
        </div>
    );
}

export default DropInfo;