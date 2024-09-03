import React from "react";

const Collection3 = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[75vh]"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/collections/Procession-through-town-bedsheet.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-4 opacity-65">
            PROCESSION THROUGH TOWN
          </p>
          <p className="text-white text-xs md:text-base mt-4 w-96">
            A bedsheet design about balance of old characteristic royal processions and ambiguous city spaces.
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default Collection3;
