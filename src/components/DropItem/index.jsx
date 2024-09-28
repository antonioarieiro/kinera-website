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
                className={`w-full h-[56px] px-10 flex items-center rounded-lg text-[#3c1e11] duration-500 cursor-pointer ${showAnswer ? 'bg-[#FFCCE5]' : 'bg-[#f6b7d4]'}`}
            >
                <span className="w-full flex justify-center md:text-[22px] text-[18px]">
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