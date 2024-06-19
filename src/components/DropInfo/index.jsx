import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './DropInfo.css';

const DropInfo = ({ question, answer, onClick, showAnswer }) => {
  return (
    <div className='drop-info'>
      <div
        onClick={onClick}
        className={`drop-info-header ${showAnswer ? 'active' : 'inactive'}`}
      >
        <span className="w-full flex text-[18px]">
          {question}
        </span>
        {showAnswer ? <AiFillEyeInvisible size={26} /> : <AiFillEye size={26} />}
      </div>

      <div className={`drop-info-answer ${showAnswer ? 'active' : 'inactive'}`}>
        {answer}
      </div>
    </div>
  );
}

export default DropInfo;