/* eslint-disable @next/next/no-img-element */
import React from "react";

function Vector() {
  return (
    <div className="h-full w-full fixed inset-0 flex items-end justify-end">
      <img
        className="h-[80%] w-auto object-contain translate-y-[1%]"
        src="/images/frogVector.png"
        alt=""
      />
    </div>
  );
}

export default Vector;