import React from "react";
import Navbar from "./Navbar";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import LoginFooter from "./LoginFooter";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="relative flex-grow">
          <img
            className="w-full h-[75vh] object-cover"
            src="https://wabisabiproject.com/media/galleries/flyer-background.jpg"
            alt="img"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <span className="text-4xl lg:text-6xl mb-4 lg:mb-0 mr-0 lg:mr-4 opacity-55 text-white">
                LOGIN
              </span>
              <span className="h-[0.15rem] w-full lg:w-[50rem] bg-gray-400"></span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col">
          <div>
            <LoginFooter />
          </div>
          <div>
            <Footer2 />
          </div>
          <div>
            <Footer3 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
