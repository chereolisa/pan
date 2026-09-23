import React from "react";
import Tag from "./Tag";
import Members from "./Members";

function Body() {
  return (
    <div className="">
      <section className="px-2 py-5 w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center">
        <Tag text="WHO WE ARE" />
        <h2 className="font-outfit text-2xl md:text-3xl lg:text-5xl font-extrabold mb-5.5 text-center">
          Poultry Association of Nigeria, South East (PANSE)
        </h2>
        <p className="font-inter text-[#2d2d2d] text-base md:text-lg lg:text-3xl leading-6 md:leading-7 lg:leading-11.5 text-center">
          The{" "}
          <span className="text-[#FE0000]/75 cursor-pointer font-semibold">
            Poultry Association of Nigeria, South East (PANSE)
          </span>{" "}
          is a regional umbrella organization committed to promoting and
          developing the poultry industry across South East Nigeria. It brings
          together poultry farmers, processors, input suppliers, and other
          industry stakeholders, advocating for policies and initiatives that
          support sector growth, sustainability, productivity, and
          competitiveness.
        </p>
      </section>
      <section className="px-3 md:px-5 lg:px-7 flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-10 justify-around mb-20">
        <div className="w-full lg:w-9/20">
          <Tag text="WHAT WE DO" />
          <h3 className="font-roboto text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 lg:mb-5.5 text-left">
            Advancing Poultry in the South East
          </h3>
          <p className="font-inter text-[#2d2d2d] text-base md:text-lg lg:text-3xl leading-6 md:leading-7 lg:leading-11.5 text-left mb-1 md:mb-3">
            We are committed to advancing the poultry industry through
            collaboration, advocacy, and sustainable development. We support
            poultry farmers and industry stakeholders by promoting best
            practices, creating growth opportunities, and championing
            initiatives that strengthen the sector.
          </p>
          <p className="font-inter text-[#2d2d2d] text-base md:text-lg lg:text-3xl leading-6 md:leading-7 lg:leading-11.5 text-left">
            Our work focuses on building a more productive, resilient, and
            competitive poultry industry that contributes to food security, job
            creation, and economic development across South East Nigeria.
          </p>
        </div>
        <div className="lg:w-9/20 bg-[url('/egg_image.jpg')] bg-cover bg-center rounded-xl md:rounded-2xl lg:rounded-4xl relative h-50 md:h-75 lg:h-auto">
          <div className="bg-[#f7f6f3] p-1 md:p-3 lg:p-5 rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.35)] w-fit flex flex-col gap-2 absolute -bottom-7 -right-2 lg:-bottom-7 lg:-left-7 animate-bounce-low">
            <h6 className="font-outfit tracking-tight font-semibold text-[#FE0000]/70 text-left text-xs md:text-base lg:text-xl">
              COVERS POULTRIES IN;
            </h6>
            <p className="font-inter text-[#2d2d2d] text-xs md:text-base lg:text-xl text-left">
              &bull; Abia &bull; Anambra &bull; Ebonyi &bull; Enugu &bull; Imo
            </p>
          </div>
        </div>
      </section>
      <section>
        <Members />
      </section>
    </div>
  );
}

//
export default Body;
