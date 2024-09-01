import React from "react";
import Navbar from "./Navbar";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="mt-36 mx-4">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <span className="text-4xl lg:text-6xl mb-4 lg:mb-0 mr-0 lg:mr-4 opacity-55">
            CART
          </span>
          <span className="h-[0.15rem] w-full lg:w-[54.5rem] bg-gray-400"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 mx-4 lg:mx-32">
        <div className="mb-4 lg:mb-0">
          <div className="text-xs font-semibold">PRODUCT</div>
        </div>
        <div className="mb-4 lg:mb-0 lg:ml-auto">
          <ul className="flex justify-between lg:justify-start">
            <li className="text-xs font-semibold mr-4">PRICE</li>
            <li className="text-xs font-semibold mr-4">QUANTITY</li>
            <li className="text-xs font-semibold">TOTAL</li>
          </ul>
        </div>
        <div className="flex justify-between lg:justify-start">
          <ul className="flex">
            <li className="text-xs font-semibold mr-4 lg:mr-20">NET TOTAL</li>
            <li className="text-xs font-semibold">0.00</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-4 lg:mx-32 mt-12">
        <div className="w-full lg:w-[60%] mb-4 lg:mb-0 lg:mr-[12.5rem]">
          <div className="mb-4">
            <hr />
          </div>
          <div>No items in cart</div>
          <div className="mt-4">
            <hr />
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="p-3 bg-gray-300 text-white rounded-2xl font-semibold hover:bg-gray-400 transition-all ease-in duration-150">
            Checkout with Stripe
          </button>
        </div>
      </div>
      <div className="mt-12">
        <Footer2 />
      </div>
      <div>
        <Footer3 />
      </div>
    </>
  );
};

export default Cart;

