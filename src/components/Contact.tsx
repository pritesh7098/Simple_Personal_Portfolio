import React, { useState } from "react";
import { Link } from "@radix-ui/themes";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { bricolage_grotesque } from "@/utils/fonts";
import Title from "./ui/Title";

const Contact = () => {
  
  return (
    <div className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-6 pb-8">
      <Title title="Let's Connect 🤝" />

      <div
        className={`w-full flex flex-col gap-3 mt-6 px-36 max-sm:px-4 ${bricolage_grotesque}`}
      >
        <div>
          <h2 className="text-lg max-sm:text-base">
            Have a Question? Let&apos;s Chat!
          </h2>
        </div>
        <div className="flex gap-3 mt-2">
          <Link
            href="https://wa.me/9518921476?text=Hello,%20I%20would%20like%20to%20chat%20with%20you!"
            target="_blank"
          >
            <button className="bg-[#4ADE80] text-black py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#42bc6f]">
              <FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp
            </button>
          </Link>

          <Link href="https://x.com/pritesh_7098" target="_blank">
            <button className="bg-[#1D9BF0] text-white py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#2e7bae]">
              <FaXTwitter className="h-[18px] w-[18px]" /> Chat on Twitter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
