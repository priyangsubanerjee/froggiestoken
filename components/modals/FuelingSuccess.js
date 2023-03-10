/* eslint-disable @next/next/no-img-element */
import React from "react";

function FuelingSuccess({
  fuelingSuccessModalOpen,
  setFuelingSuccessModalOpen,
  standAlone = false,
}) {
  return (
    <div>
      {fuelingSuccessModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-30 px-5 py-7 lg:p-16 overflow-auto">
          {standAlone == false && (
            <div>
              <img
                onClick={() => setFuelingSuccessModalOpen(false)}
                src="/images/hamburger.png"
                className="h-3 lg:h-5 cursor-pointer"
                alt=""
              />
            </div>
          )}
          <div className="mt-7 lg:mt-16 lg:w-[65%]">
            <h1 className="uppercase text-2xl lg:text-5xl text-white font-extrabold">
              fueling success
            </h1>
            <div className="mt-10 text-white space-y-8 text-sm lg:text-base">
              <div>
                <div className="flex items-center font-poppins text-white space-x-2">
                  <span className="underline">
                    Migration to an upgraded BSC contract
                  </span>
                  <span className="bg-[#27A167] px-4 rounded-full hidden">
                    Done
                  </span>
                </div>
                <p className="mt-1 leading-7">
                  We migrated to BSC to ensure a more stable liquidity pool and
                  provide holders and investors with lower gas fees. Building
                  utility on BSC means building on security and affordable
                  transactions.
                </p>
              </div>

              <div>
                <div className="flex items-center font-poppins text-white space-x-2">
                  <span className="underline">
                    Release fully functional P2E
                  </span>
                  <span className="bg-[#27A167] px-4 rounded-full hidden">
                    Done
                  </span>
                </div>
                <p className="mt-1 leading-7">
                  We have been working on our P2E for many months, and we are
                  close to delivering. &apos;Fully functional&apos; means our
                  P2E (https://www.everlost.io) is working on both PC and Mobile
                  Phone and is supported by Wallet Connect.
                </p>
              </div>

              <div>
                <div className="flex items-center font-poppins text-white space-x-2">
                  <span className="underline">
                    Launching an upgraded website
                  </span>
                  <span className="bg-[#27A167] px-4 rounded-full hidden">
                    Done
                  </span>
                </div>
                <p className="mt-1 leading-7">
                  The website you are reading right now is FROGGIES new and
                  upgraded website. Lots of time and creativity went into the
                  creation of this beautiful collaboration of outer space art.
                </p>
              </div>

              <div>
                <div className="flex items-center font-poppins text-white space-x-2">
                  <span className="underline">
                    Start development of staking contract
                  </span>
                  <span className="bg-[#DEAB28] px-4 rounded-full hidden">
                    Building
                  </span>
                </div>
                <p className="mt-1 leading-7">
                  We are starting the development of a safe, and well rewarding
                  staking platform. Generative APY&apos;s, and safety one can
                  rely on. Release the satellites FROGGIES is scaling up its
                  ambassador program, increasing marketing capabilities and
                  investments while finding meaningful collaborations to achieve
                  broader market exposure.
                </p>
              </div>
              <div>
                <div className="flex items-center font-poppins text-white space-x-2">
                  <span className="underline">Release the satellites</span>
                  <span className="bg-[#6978FF] px-4 rounded-full hidden">
                    Upcoming
                  </span>
                </div>
                <p className="mt-1 leading-7">
                  FROGGIES is scaling up its ambassador program, increasing
                  marketing capabilities and investments while finding
                  meaningful collaborations to achieve broader market exposure.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/images/fuelingSuccess.svg"
            className={`fixed bottom-0 right-0  transition-all duration-700 hidden lg:block`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FuelingSuccess;
