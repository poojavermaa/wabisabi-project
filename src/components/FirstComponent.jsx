import React from "react";

const FirstComponent = () => {
  return (
    <div className="relative">
      <img
        className="w-full lg:h-[80vh] md:h-[50vh] sm:h-[80vh] bg-cover object-cover"
        src="https://wabisabiproject.com/media/galleries/documenting-natural-dyes-with-fingers-in-diary.jpg"
        alt="img"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:ml-12 md:ml-12">
        <div className="flex items-center w-full">
          <div className="lg:text-[3rem] md:text-6xl sm:text-[6rem] text-white text-center px-2 font-sans text-3xl">
            WORKSHOPS
          </div>
          <div className="h-1 lg:w-[50rem] md:w-[20rem] sm:w-[10rem] w-full bg-white mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;