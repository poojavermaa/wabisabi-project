import React from 'react'
import Navbar from './Navbar'
import SecondComponent from './SecondComponent';
import Footer2 from './Footer2';
import Footer3 from './Footer3';

const Notes = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="relative">
      <img
        className="w-full h-[85vh] object-cover"
        src="https://wabisabiproject.com/media/galleries/photo-1652285952513-9d363975f5ae.jpg"
        alt="img"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="flex items-center">
          <div className="text-3xl md:text-4xl text-white text-center px-2">
            NOTES
          </div>
          <div className="h-1 w-3/4 md:w-96 bg-white mt-2 ml-2"></div>
        </div>
      </div>
    </div>
    <div>
    <div className="bg-[#972e34] p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[65%] w-full my-8 md:my-16 md:mx-8 lg:mx-28">
            <p className="text-white opacity-65 text-lg md:text-xl font-semibold font-sans mb-4">
              We are a group of people who love traditional Indian crafts. We want to receive and share the knowledge of dyeing and crafts with the world.
            </p>
            <p className="my-8 md:my-14 text-white font-sans">
              We have created a series of workshops in India, where we teach you how to make natural dyes, natural paints and other traditional craft materials.
              Our workshops is for anyone who wants to learn about Indian crafts and dyeing technique.
            </p>
          </div>
          <div className="md:w-[35%] w-full my-8 md:my-20 text-white font-sans">
            <p>
              Browse through our crafts Programs as well as Excursions of tours
              and unattented studio access below---
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Footer2 />
    </div>
    <div>
        <Footer3 />
    </div>
    </>
  )
}

export default Notes;
