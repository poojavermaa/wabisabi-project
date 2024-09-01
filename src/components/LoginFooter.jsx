import React, { useState } from 'react';

const LoginFooter = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
      <div className='bg-[#656565] h-auto flex flex-col md:flex-row items-center justify-between py-12 px-8 md:px-32'>
        <div className='mb-4 md:mb-0 md:mr-[39rem]'>
            <h1 className='text-white text-center md:text-left text-3xl opacity-60'>Pooja Verma</h1>
            <h1 className='text-white text-center md:text-left text-2xl'>poojaverma140400@gmail.com</h1>
        </div>
        <div>
            <button onClick={handleClick} className='text-white bg-transparent border border-white py-2 px-4 rounded-md hover:bg-white hover:text-[#656565] transition duration-300'>
              {isOpen ? "Logout" : "Login"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;

