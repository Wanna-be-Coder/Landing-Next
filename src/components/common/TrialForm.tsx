import React from "react";
import Image from "next/image";

const TrialForm = () => {
  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <Image
        src='https://media.istockphoto.com/id/1316913654/photo/a-man-holding-a-megaphone-free-quote.jpg?s=612x612&w=0&k=20&c=ZUMxHvWllr_fUnAwHJ5mrEp7h2NNnBcysB4qiLg3UU0='
        alt='for-img'
        height={100}
        width={400}
        className=' mb-4'
      />
      <div className='mb-3'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='username'
          type='text'
          placeholder='Username'
        />
      </div>
      <div className='mb-3'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='email'
          type='email'
          placeholder='email@gmail.com'
        />
      </div>
      <div className='mb-3'>
        <div className='flex'>
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
            disabled
          >
            IN
          </button>

          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='phone'
            placeholder='Phone'
          />
        </div>
      </div>
      <div className='mb-3'>
        <textarea
          className='resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Write your requirements'
        ></textarea>
      </div>
      <div className='mb-3'>
        <input
          className='relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary'
          id='formFileSm'
          type='file'
        />
      </div>
      <div className='mb-3 flex items-center justify-between'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-full'
          type='button'
        >
          Send{" "}
        </button>
      </div>
      <span className='text-sm'>We respect your privacy policy!</span>
    </form>
  );
};

export default TrialForm;
