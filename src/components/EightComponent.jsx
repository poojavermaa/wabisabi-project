import React from "react";

const EightComponent = () => {
    return(
        <>
        <div
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wabisabiproject.com/media/galleries/workshops/fluff/fluff_05.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold font-serif">
            At Your Schedule
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[34rem]">
            Tell us your preferred dates and we will organise a workshop for you.
          </p>
          <p className="text-white text-sm md:text-lg mt-2 w-[34rem]">
            We never really crowd up our workshops with too many people. We keep a threshold of 3-4 practicipants. Our experience is that more interactions with people with similar interests during the workshop enhance learning for all the praticipants.
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-[#4f2e2c] relative bottom-0 left-0"></div>
        </>
    );
};

export default EightComponent;