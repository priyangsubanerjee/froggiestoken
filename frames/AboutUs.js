/* eslint-disable @next/next/no-img-element */
import React from "react";

function AboutUs() {
  return (
    <div className="lg:w-[60%] lg:p-32 p-0">
      <h2 className="hidden lg:inline-block text-primaryGrey text-sm font-medium">
        ABOUT US
      </h2>
      <h1 className="text-2xl lg:text-7xl font-extrabold text-white leading-[1.3] font-berlin mt-5">
        FROGGIES INTO SPACE
      </h1>
      <p className="text-xs lg:text-sm text-white leading-7 lg:leading-7 mt-4 font-poppins">
        We are Froggies, a memecoin launched in November 2021. Flew passed bulls
        and bears, hype and fud.
        <br />
        <br />
        We are still here, and ready to provide the market with a Second Gen
        Memecoin. Our ultimate destination is Moon, and to assure our landing
        zone in Space we build on community,{" "}
        <span className="inline-flex items-center relative text-black w-32 ml-1">
          <span className="flex z-10 items-center font-poppins">
            <span>utility & usability</span>
          </span>
          <span className="absolute top-[1px] -left-2 w-auto">
            <img src="/vector4.png" className="w-44 h-6 z-0" alt="" />
          </span>
        </span>
        . Froggies is an open community and drive a free market. Our team is
        devoted to delivering the best to our holders, and securing a long-term
        project.
      </p>
      <div className="text-xs lg:text-sm hidden lg:flex items-baseline mt-10 whitespace-nowrap font-poppins">
        <span>Join us while we build on common goals .</span>
        <div className="w-20 h-[1px] bg-white"></div>
        <a className="lg:inline-block hidden" href="#2">
          <div className="flex items-center relative text-black w-44 ml-5">
            <div className="flex z-10 items-center font-poppins">
              <span>Moon</span>
              <iconify-icon
                className="z-10"
                icon="ph:arrow-down"
              ></iconify-icon>
            </div>
            <div className="absolute -top-[2px] -left-4 w-auto">
              <img
                src="/images/textScribbleVector.png"
                className="w-24 h-6 z-0"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
