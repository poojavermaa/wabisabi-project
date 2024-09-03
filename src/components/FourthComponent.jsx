import React from "react";

const FourthComponent = () => {
  return (
    <>
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/Nf3qdBhW/office-620822-1280.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 hidden lg:flex">
          <p className="text-white text-xl lg:text-2xl font-semibold font-sans opacity-60 mb-4">
            Observation First, Intervention Later
          </p>
          <p className="text-white text-lg mt-2">
            We note that a teacher needs to be a good listener.
          </p>
          <p className="text-white text-base mt-4 w-[50%]">
            Our pursuit is to consciously nurture a space for you to observe,
            understand, and introspect via the crafts and its local practices.
            Our pursuit is to consciously nurture a space for you to observe,
            understand, and introspect via the crafts and its local practices.
          </p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#4f2e2c] flex items-center justify-center lg:h-16">
        <div className="lg:hidden flex flex-col items-center text-center p-4">
          <p className="text-white text-xl font-semibold font-sans mb-4">
            Observation First, Intervention Later
          </p>
          <p className="text-white text-sm mb-2">
            We note that a teacher needs to be a good listener.
          </p>
          <p className="text-white text-xs w-[90%]">
            Our pursuit is to consciously nurture a space for you to observe,
            understand, and introspect via the crafts and its local practices.
            Our pursuit is to consciously nurture a space for you to observe,
            understand, and introspect via the crafts and its local practices.
          </p>
        </div>
      </div>
    </>
  );
};

export default FourthComponent;
