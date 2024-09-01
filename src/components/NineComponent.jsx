import React from "react";

const NineComponent = () => {
  return (
    <>
      <div
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_08.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif">
            Curious Case of a Designer
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[34rem]">
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
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default NineComponent;
