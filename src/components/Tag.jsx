function Tag({ text }) {
  return (
    <div className="flex justify-center align-middle items-center gap-2 rounded-4xl shadow-[0_2px_7px_rgba(0,0,0,0.25)] w-fit p-2 mb-2 md:mb-3.5 lg:mb-5 border border-[#FE0000]/30">
      <div className="relative flex h-2 w-2 md:h-2 md:-w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FE0000] opacity-85 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2 md:h-2 md:-w-2 rounded-full bg-[#FE0000]"></span>
      </div>{" "}
      <p className="font-outfit font-semibold text-xs md:text-sm lg:text-base">
        {text}
      </p>
      <div className="relative flex h-1.5 w-1.5 md:h-2 md:-w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FE0000] opacity-85 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2  md:h-2 md:-w-2 rounded-full bg-[#FE0000]"></span>
      </div>{" "}
    </div>
  );
}
// #E11D2E
export default Tag;
