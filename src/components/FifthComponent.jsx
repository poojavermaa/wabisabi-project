import React from "react";

const FifthComponent = () => {
  return (
    <>
      <div
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.postimg.cc/Gt9txd04/grapes-3550733-1280.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif">
            Tools
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[30rem]">
            A large spectrum of craft tools at your disposal will enable
            translation of your thoughts and styles into a form on a cloth.
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default FifthComponent;
