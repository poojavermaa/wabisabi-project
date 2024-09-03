import React from "react";

const TenComponent = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_11.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl md:text-2xl opacity-65 mb-4 lg:text-3xl font-semibold font-serif">
            Group Learning
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[60%]">
            We encourage a learning space that enables one not only to learn but
            also to share, question, laugh and develop deep intersublective
            relations with it's co-learners from varied backgrounds.
          </p>
        </div>
      </div>

      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
            Group Learning
          </p>
          <p className="text-white text-xs w-[90%]">
          We encourage a learning space that enables one not only to learn but
            also to share, question, laugh and develop deep intersublective
            relations with it's co-learners from varied backgrounds.
          </p>
        </div>
      </div>
    </>
  );
};

export default TenComponent;
