import React from "react";

const LogoAndLinks = () => {
  return (
    <div className="flex gap-x-8 font-sans font-semibold text-white">
      <div className="text-xl pr-4 hover:cursor-pointer hover:text-pink-300">
        LOGO
      </div>
      <ul className="text-gray-200 space-y-2">
        <li className="hover:cursor-pointer hover:text-gray-300">Home</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Discovery</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Photos</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
      <ul className="text-gray-200 space-y-2">
        <li className="hover:cursor-pointer hover:text-gray-300">About</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Help</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Terms</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Guidelines</li>
      </ul>
      <ul className="text-gray-200 space-y-2">
        <li className="hover:cursor-pointer hover:text-gray-300">
          Testimonials
        </li>
        <li className="hover:cursor-pointer hover:text-gray-300">Advertise</li>
        <li className="hover:cursor-pointer hover:text-gray-300">
          Integrations
        </li>
        <li className="hover:cursor-pointer hover:text-gray-300">Careers</li>
      </ul>
    </div>
  );
};

export default LogoAndLinks;
