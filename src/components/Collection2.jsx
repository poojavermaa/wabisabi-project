import React from "react";

const Collection2 = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[75vh]"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/collections/Jajam-Spread-Wabisabi-Project-1.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
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
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default Collection2;
