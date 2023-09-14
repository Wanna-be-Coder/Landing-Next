import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-around'>
        <div>
          <Image
            alt='logo'
            src='https://www.logodesign.net/images/nature-logo.png'
            height={100}
            width={100}
          />
        </div>

        <div className='float-right ltr'>
          <ul className='flex bg-orange-500	 text-white rounded-s-lg hover:cursor-pointer'>
            <li className='flex pl-4	'>
              {" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              All Service |
            </li>
            <li>Industrial Web Server |</li>
            <li>Languages |</li>
            <li>About Us |</li>
            <li>Contact Us</li>
          </ul>
          <div className='flex float-right	p-4'>
            <input name='search' />
            <button
              className='relative z-[2] flex items-center rounded-r bg-orange-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
              type='button'
              id='button-addon1'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fill-rule='evenodd'
                  d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
