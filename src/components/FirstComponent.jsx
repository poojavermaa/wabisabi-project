import React from "react";

const FirstComponent = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[85vh] object-cover"
        src="https://wabisabiproject.com/media/galleries/documenting-natural-dyes-with-fingers-in-diary.jpg"
        alt="img"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="flex items-center">
          <div className="text-3xl md:text-4xl text-black text-center px-2">
            WORKSHOPS
          </div>
          <div className="h-1 w-3/4 md:w-96 bg-black mt-2 ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
