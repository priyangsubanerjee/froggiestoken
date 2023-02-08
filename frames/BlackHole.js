/* eslint-disable @next/next/no-img-element */
import React from "react";

function BlackHole() {
  return (
    <div>
      <h2 className=" text-primaryGrey text-sm font-medium">BLACK HOLE</h2>
      <h1 className="text-7xl font-semibold text-white leading-[1.3]">
        Into the Black hole
      </h1>
      <p className="text-sm text-white leading-7 mt-4">
        Brave the unknown and embark on a journey into a black hole&apos;s
        embrace to uncover secrets beyond reality. Embrace the darkness and
        <span className="inline-flex items-center relative text-black w-96 ml-3">
          <span className="inline-flex z-10 items-center font-poppins">
            <span>unlock the mysteries of the universe.</span>
            <iconify-icon className="z-10" icon="ph:arrow-down"></iconify-icon>
          </span>
          <span className="absolute -top-3 -left-8">
            <img
              src="/images/textScribble3.png"
              className="w-80 h-12 z-0"
              alt=""
            />
          </span>
        </span>
      </p>
      <div className="grid grid-cols-2 w-[600px] mt-16">
        <div className="border h-20 border-slate-300 flex items-center overflow-hidden">
          <div className="w-[30%]">
            <img src="/images/buy.png" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">BUY</h1>
            <p className="text-sm text-secondaryGrey">Buy froggies token now</p>
          </div>
        </div>
        <div className="border h-20 border-slate-300 flex items-center overflow-hidden">
          <div className="w-[30%]">
            <img src="/images/interstellar.png" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">interstellar</h1>
            <p className="text-sm text-secondaryGrey">Learn more</p>
          </div>
        </div>
        <div className="border h-20 border-slate-300 flex items-center  overflow-hidden">
          <div className="w-[30%]">
            <img src="/images/manifesto.png" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">Manifesto</h1>
            <p className="text-sm text-secondaryGrey">Outerspace finance</p>
          </div>
        </div>
        <div className="border h-20 border-slate-300 flex items-center  overflow-hidden">
          <div className="w-[30%]">
            <img src="/images/manifesto.png" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">Astronomics</h1>
            <p className="text-sm text-secondaryGrey">Outerspace finance</p>
          </div>
        </div>
      </div>
      <div className="flex items-baseline mt-10 whitespace-nowrap uppercase font-bold">
        <span>To the moon and never back .</span>
        <div className="ml-1 w-20 h-[1px] bg-white"></div>
      </div>
    </div>
  );
}

export default BlackHole;
