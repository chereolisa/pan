import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { NavLink } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6">
      <div className="w-full max-w-2xl text-center">
        {/* Animation Space */}
        <div className="mx-auto mb-8 flex h-60 w-60 items-center justify-center rounded-full">
          <iframe src="https://lottie.host/embed/393faf1d-e867-4b83-8044-821ca53bb89b/S3NBzLSwzd.lottie"></iframe>
        </div>

        {/* Content */}
        <span className="inline-block rounded-full bg-[#FE0000] px-4 py-1 text-sm font-semibold text-white">
          WORK IN PROGRESS
        </span>

        <h1 className="mt-5 text-4xl font-bold text-black md:text-5xl">
          Something Great Is <span className="text-[#FE0000]">Coming</span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-gray-600">
          We're currently working on this page to bring you something useful and
          worthwhile. Check back soon!
        </p>

        {/* Brand Accent */}
        <div className="mx-auto mt-8 flex w-fit items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FE0000] animate-pulse" />
          <span className="h-2 w-12 rounded-full bg-[#176B3A]" />
          <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
        </div>
      </div>

      <NavLink
        to="/"
        className="mt-7.5 font-outfit text-lg md:text-xl lg:text-2xl hover:text-black/80"
      >
        Back to Home
      </NavLink>
    </section>
  );
};

export default WorkInProgress;
