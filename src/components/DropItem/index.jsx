import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const DropItem = ({ answer, question }) => {
    const [showAnswer, setShowAnswer] = useState(true);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }
    
    return (
        <div className='sm:w-2/3 w-full flex flex-col'>
            <div
                onClick={toggleAnswer}
                className={`w-full h-[72px] px-10 flex items-center rounded-lg text-white duration-500 cursor-pointer ${showAnswer ? 'bg-[#FF0A78]' : 'bg-[#321E29]'}`}
            >
                <span className="w-full flex justify-center md:text-[28px] text-[19px]">
                    {question}
                </span>
                { showAnswer ? ( <AiOutlineMinus size={26} /> ) : ( <AiOutlinePlus size={26} /> ) }
            </div>

            <div className={`w-full bg-[rgba(255,10,120,0.27)] text-white mt-5 px-5 py-4 shadow-xl origin-bottom duration-500 ease-in-out ${showAnswer ? 'opacity-100 min-h-56' : 'opacity-0 pointer-events-none h-0'}`}>
                {answer}
            </div>
        </div>
    );
}

export default DropItem;