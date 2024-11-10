import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

const EmailAndSocials = () => {
  return (
    <div className="text-white w-full md:flex">
      <div className="w-[90%] mx-auto py-3 md:py-0 md:w-1/2">
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="text-gray-300 pr-10"
          />
          <FaPaperPlane className="absolute size-4 right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white text-2xl hover:cursor-pointer" />
        </div>
        <Label htmlFor="email" className="text-gray-300">
          Stay in touch with us for the freshest products!
        </Label>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end gap-x-4 pb-6 md:pb-0">
        {/* Socials */}

        <FaInstagram className="text-gray-300 hover:text-white text-2xl hover:cursor-pointer" />

        <FaTwitter className="text-gray-300 hover:text-white text-2xl hover:cursor-pointer" />

        <FaFacebook className="text-gray-300 hover:text-white text-2xl hover:cursor-pointer" />

        <FaGlobe className="text-gray-300 hover:text-white text-2xl hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default EmailAndSocials;
