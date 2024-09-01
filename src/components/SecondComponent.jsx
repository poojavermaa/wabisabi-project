import React from "react";

const SecondComponent = () => {
  return (
    <>
      <div className="bg-[#972e34] p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[65%] w-full my-8 md:my-16 md:mx-8 lg:mx-28">
            <p className="text-white opacity-65 text-lg md:text-xl font-semibold font-sans mb-4">
              We are a small team practicing and offering courses, workshops in
              traditional techniques in block printing and natural dyes. Over
              many years, hands-on craft experiences have taught us the bounty
              and fragility of Nature's colours. We are delighted to share this
              knowledge with you.
            </p>
            <p className="my-8 md:my-14 text-white font-sans">
              We have created a series of workshops, where we delve into the
              nuances of 'how to' in natural dyes, pastes and other craft
              practices. Our workshop is for anyone beginner or expert who wants
              to learn about crafts processes.
              If you have the time, we have the space. Join us in exploring this
              wonderful world.
            </p>
          </div>
          <div className="md:w-[35%] w-full my-8 md:my-20 text-white font-sans">
            <p>
              Browse through our crafts Programs as well as Excursions of tours
              below. Or, make your own itinerary with multiple programs and
              excursions and let us know.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondComponent;

