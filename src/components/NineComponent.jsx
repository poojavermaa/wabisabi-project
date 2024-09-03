import React from "react";

const NineComponent = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_08.jpg')",
        }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl md:text-2xl lg:text-3xl opacity-65 mb-4 font-semibold font-serif">
            Curious Case of a Designer
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[60%]">
            Are you a designer trying to make sense of the complex structural
            maza of craft production in India? The sheer degree of diversity and
            specialisation of works can be daunting.
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            Relax.
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            Our most extensive program will demystify it all for you.
          </p>
        </div>
      </div>
      
      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
          Curious Case of a Designer
          </p>
          <p className="text-white text-lg font-sans mb-4">
          Are you a designer trying to make sense of the complex structural
            maza of craft production in India? The sheer degree of diversity and
            specialisation of works can be daunting.
          </p>
          <p className="text-white text-lg w-[90%]">
          Our most extensive program will demystify it all for you.
          </p>
          </div>
      </div>
    </>
  );
};

export default NineComponent;
