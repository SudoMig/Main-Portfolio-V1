import React, { useState } from 'react';
import './index.css'

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/94655b00-cb2d-11ec-a557-034a17e2da28';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className='text-2xl'>Thank you!</div>
        <div className='text-md'>I'll be in touch shortly!😉</div>
      </>
    );
  }

  return (
    <form
      action='https://public.herotofu.com/v1/94655b00-cb2d-11ec-a557-034a17e2da28'
      method='POST'
      className='grid grid-cols-1 gap-y-2 md:gap-y-6 md:pt-10 md:pb-24 text-sm sm:text-base'
    >
      <div className='flex space-x-2 py-2 '>
        <div className='py-1 md:py-0'>
          <label htmlFor='full-name' className='sr-only'>
            Name
          </label>
          <input
            type='text'
            name='full-name'
            id='full-name'
            autoComplete='name'
            className='border-b border-gray-800 md:border-b-2 border-white bg-black outline-none focus:border-b md:focus:border-b-2 focus:border-blue-600 transition-all duration-200 '
            placeholder='Name'
          />
        </div>
        <div className='py-1 md:py-0'>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='border-b border-gray-800 md:border-b-2 border-white bg-black outline-none focus:border-b md:focus:border-b-2 focus:border-blue-600 transition-all duration-200'
            placeholder='Email'
          />
        </div>
      </div>
      <div>
        <label htmlFor='message' className='sr-only'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={1}
          className='border-b border-gray-800 md:border-b-2 border-white w-full bg-black outline-none focus:border-b md:focus:border-b-2 focus:border-blue-600 transition-all duration-200'
          placeholder='Message'
          defaultValue={''}
        />
      </div>
      <div>
        <button
          type='submit'
          className=' text-blue-600 md:text-white text-lg w-full font-semibold glow-on-hover '
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
