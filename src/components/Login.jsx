import React from "react";
import Navbar from "./Navbar";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleClick = () => {
      setIsOpen(!isOpen);
  };

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
            {/* <LoginFooter /> */}
            <div className="bg-[#656565] h-auto flex flex-col md:flex-row items-center justify-between py-12 px-8 md:px-32">
              <div className="mb-4 md:mb-0 md:mr-[39rem]">
                <h1 className="text-white text-center md:text-left text-3xl opacity-60">
                  {isAuthenticated && <p>{user.name}</p>}
                </h1>
                <h1 className="text-white text-center md:text-left text-2xl">
                  {isAuthenticated && <p>{user.email}</p>}
                </h1>
              </div>
              <div>
                {
                  isAuthenticated ? <button className="bg-white text-black p-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> : <button className="bg-white text-black p-2" onClick={() => loginWithRedirect()}>Log In</button>
                }
                
              </div>
              <div>
              
              </div>
            </div>
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
