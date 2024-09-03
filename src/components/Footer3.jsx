import React from "react";

const Footer3 = () => {
    return (
        <>
            <div className="bg-black h-auto flex flex-col md:flex-row px-6 md:px-16 lg:px-32 py-4">
                <div className="text-white w-full md:w-1/2 mb-4 md:mb-0">
                    <ul className="flex justify-center md:justify-start py-2">
                        <li className="cursor-pointer hover:text-gray-300">Instagram</li>
                        <li className="pl-6 cursor-pointer hover:text-gray-300">Contact Us</li>
                    </ul>
                </div>
                <div className="text-white w-full md:w-1/2">
                    <ul className="flex justify-center md:justify-end py-2">
                        <li className="cursor-pointer hover:text-gray-300">Terms</li>
                        <li className="pl-6 cursor-pointer hover:text-gray-300">Privacy Policy</li>
                        <li className="pl-6 cursor-pointer hover:text-gray-300">Return Policy</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer3;
