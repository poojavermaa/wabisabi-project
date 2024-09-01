import React from "react";

const SixthComponent = () => {
  return (
    <>
      <div
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_03.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif">
            Take Away
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            Take home waht you make.
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[30rem]">
            Cost of the workshops includes: course worksheet, dyeing fabric,
            dyestuff, chai with cool breezes in fields
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default SixthComponent;
