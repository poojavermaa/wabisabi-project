import React from "react";
import Navbar from "./Navbar";
import Collection2 from "./Collection2";
import Collection3 from "./Collection3";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Collection4 from "./Collection4";

const Collection = () => {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="relative">
      <img
        className="w-full h-[85vh] object-cover"
        src="https://wabisabiproject.com/media/galleries/collections/cover.jpg"
        alt="img"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="flex items-center">
          <div className="text-3xl md:text-4xl text-white text-center px-2">
            COLLECTIONS
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
              Our Collection is based on the core spirit of Jajam textile - to bring people togather.
            </p>
            <p className="my-8 md:my-14 text-white font-sans">
              At our block printing and natural dye unit in Bagru, Rajasthan; we are not only re-making Jajam in its traditional from but also adapting the classic motifs and patterns into our fabric has gone through various steps of indigenous way of pre-treatment to ensure a good color absorption capacity and longevity of the fabric.
            </p>
          </div>
          <div className="md:w-[35%] w-full my-8 md:my-20 text-white font-sans">
            <p>
              Like Jajam textiles, the collection showcases red and black - two elusive colors, made from alizarin and iron filing respectively.
              Peruse our collection of traditional craftsmanship below--
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Collection2 />
    </div>
    <div>
        <Collection3 />
    </div>
    <div>
        <Collection4 />
    </div>
    <div>
        <Footer2 />
    </div>
    <div>
        <Footer3 />
    </div>
    </>
  );
};

export default Collection;
