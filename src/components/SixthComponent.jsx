import React from "react";

const SixthComponent = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_03.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl md:text-2xl lg:text-3xl opacity-65 mb-4 font-semibold font-serif">
            Take Away
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            Take home waht you make.
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[60%]">
            Cost of the workshops includes: course worksheet, dyeing fabric,
            dyestuff, chai with cool breezes in fields
          </p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
             Take Away
          </p>
          <p className="text-white text-xl font-sans mb-4">
            Take home what you make.
          </p>
          <p className="text-white text-xs w-[90%]">
            Cost of the workshops includes: course worksheet, dyeing fabric,
            dyestuff, chai with cool breezes in fields
          </p>
          </div>
      </div>
    </>
  );
};

export default SixthComponent;
