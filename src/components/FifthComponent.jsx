import React from "react";

const FifthComponent = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.postimg.cc/Gt9txd04/grapes-3550733-1280.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold opacity-65 mb-4 font-serif">
            Tools
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[50%]">
            A large spectrum of craft tools at your disposal will enable
            translation of your thoughts and styles into a form on a cloth.
          </p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
              Tools
          </p>
          <p className="text-white text-xs w-[90%]">
          A large spectrum of craft tools at your disposal will enable
          translation of your thoughts and styles into a form on a cloth.
          </p>
          </div>
      </div>
    </>
  );
};

export default FifthComponent;
