import React from "react";

const ElevenComponent = () => {
    return(
        <>
        <div
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_12.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl opacity-65 mb-4 md:text-2xl lg:text-3xl font-semibold">
            What Does Not Look Glamorous
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            ...but should be done in a workshop!
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            The process of 'making' is best understand when exposed to a variety of facets.
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
        </>
    );
};

export default ElevenComponent;