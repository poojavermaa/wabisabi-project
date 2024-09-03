import React from "react";

const SeventhComponent = () => {
  return (
    <>
      <div
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_04.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
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
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default SeventhComponent;
