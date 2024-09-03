import React from "react";

const Collection2 = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/collections/Jajam-Spread-Wabisabi-Project-1.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-4 opacity-65">
            JAJAM SPREAD
          </p>
          <p className="text-white text-xs md:text-base mt-4 w-96">
            As meeting spaces for people go missing in our urban lifestyles,
            this textile brings back purposeful or aimless congregations with
            our loved ones.
          </p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
          JAJAM SPREAD
          </p>
          <p className="text-white text-xs w-[90%]">
            As meeting spaces for people go missing in our urban lifestyles,
            this textile brings back purposeful or aimless congregations with
            our loved ones.
          </p>
          </div>
      </div>
    </>
  );
};

export default Collection2;
