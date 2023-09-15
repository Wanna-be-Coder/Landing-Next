import React from "react";

interface Props {
  header: String;
  desc: String;
}

const ItemCard: React.FC<Props> = ({ header, desc }) => {
  return (
    <div className='flex items-center m-2 bg-white rounded-lg shadow-xs w-1/4'>
      <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full'>
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
        </svg>
      </div>
      <div>
        <h3 className='mb-2 text-lg font-lg text-gray-600'>{header} </h3>
        <p className='text-sm font-semibold text-gray-700'>{desc} </p>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 float-right hover:cursor-pointer'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
        />
      </svg>
    </div>
  );
};

export default ItemCard;
