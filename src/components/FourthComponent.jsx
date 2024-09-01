import React from "react";

const FourthComponent = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-[85vh]" style={{ backgroundImage: "url('src/components/office-620822_1280.jpg')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif">Observation First, Intervention Later</p>
          <p className="text-white text-sm md:text-lg mt-2">We note that a teacher needs to be a good listener.</p>
          <p className="text-white text-xs md:text-base mt-4 w-96">
            Our pursuit is to consciously nurture a space for you to observe,
            understand and introspect via the crafts and its local practices.
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
    </>
  );
};

export default FourthComponent;

