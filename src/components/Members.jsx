import React from "react";
import Tag from "./Tag";

function Members() {
  const cards = [
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
    { header: "", paragraph: "", icon: "" },
  ];
  return (
    <div className="bg-[url('/mesh-lavender-haze.svg')] bg-cover bg-center h-screen w-full relative">
      <div className="z-11">
        <Tag text="WHO IS INVOLVED" />
      </div>
      {/* <div className="absolute inset-0 bg-white/10" /> */}

      <img
        src="/Group 5.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  );
}

export default Members;
