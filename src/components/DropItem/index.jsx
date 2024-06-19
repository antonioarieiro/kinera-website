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
                className={`w-full h-[56px] px-10 flex items-center rounded-lg text-[#351e2d] duration-500 cursor-pointer ${showAnswer ? 'bg-[#d0c1d0B3]' : 'bg-[#6a466a]'}`}
            >
                <span className="w-full flex justify-center md:text-[28px] text-[19px]">
                    {question}
                </span>
                { showAnswer ? ( <AiOutlineMinus size={26} /> ) : ( <AiOutlinePlus size={26} /> ) }
            </div>

            <div className={`w-full bg-[#FFFFFF] text-white mt-5 rounded-lg px-5 py-4 shadow-xl origin-bottom duration-500 ease-in-out ${showAnswer ? 'opacity-100 min-h-56' : 'opacity-0 pointer-events-none h-0'}`}>
                {answer}
            </div>
        </div>
    );
}

export default DropItem;