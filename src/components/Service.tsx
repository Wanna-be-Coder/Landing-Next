import React from "react";

const Service = () => {
  return (
    <div className='flex items-center justify-center bg-blue-400 h-60'>
      <ul className='flex flex-row text-lg	text-white divide-x-2 divide-white'>
        <li className='w-40 p-1  hover:cursor-pointer'>
          Foeriegn Language Support
        </li>
        <li className='w-40 p-1  hover:cursor-pointer'>
          Market Research Analyst
        </li>
        <li className='w-40 p-1  hover:cursor-pointer'>
          Transcriptual Service
        </li>
        <li className='w-40 p-1  hover:cursor-pointer'>
          Multilingual Call Center
        </li>
        <li className='w-40 p-1  hover:cursor-pointer'>Data Entry Service</li>
        <li className='w-40 p-1  hover:cursor-pointer'>Creative Service</li>
        <li className='w-40 p-1  hover:cursor-pointer'>
          Photo Editing Service
        </li>
        <li className='w-40 p-1  hover:cursor-pointer'>
          Virtual Assitant Service
        </li>
      </ul>
    </div>
  );
};

export default Service;
