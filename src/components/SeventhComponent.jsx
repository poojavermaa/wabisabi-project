import React from "react";

const SeventhComponent = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_04.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 opacity-65 font-semibold font-serif">
            Our Studio
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[60%] flex sm:flex-shrink-0">
            The countryside location of our studio is designed to be healthy,
            comfortable, and welcoming. The design prioritizes oepn spaces for
            people can move around and socialize freely without feeling
            confined.
          </p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
            Our Studio
          </p>
          <p className="text-white text-xs w-[90%]">
          The countryside location of our studio is designed to be healthy,
            comfortable, and welcoming. The design prioritizes oepn spaces for
            people can move around and socialize freely without feeling
            confined.
          </p>
        </div>
      </div>
    </>
  );
};

export default SeventhComponent;
