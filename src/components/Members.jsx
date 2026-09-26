import {
  BirdIcon,
  UsersThreeIcon,
  EggCrackIcon,
  GrainsIcon,
  FactoryIcon,
  StethoscopeIcon,
  PackageIcon,
  HandshakeIcon,
} from "@phosphor-icons/react";
import Tag from "./Tag";

function Members() {
  const cardGroupOne = [
    {
      header: "Poultry Farmers",
      paragraph:
        "Supporting smallholder & commercial poultry farmers through advocacy and industry development.",
      icon: BirdIcon,
    },
    {
      header: "Poultry Cooperatives",
      paragraph:
        "Encouraging collaboration among poultry cooperatives to strengthen collective growth, resources, and opportunities.",
      icon: UsersThreeIcon,
    },
    {
      header: "Hatcheries",
      paragraph:
        "Bringing together hatchery operators committed to quality chick production and sustainable poultry development.",
      icon: EggCrackIcon,
    },
    {
      header: "Feed Millers",
      paragraph:
        "Connecting feed producers and promoting reliable, quality feed supply across the poultry value chain.",
      icon: GrainsIcon,
    },
  ];

  const cardGroupTwo = [
    {
      header: "Processors",
      paragraph:
        "Supporting poultry processors in improving value addition, product quality, and all-round market opportunities.",
      icon: FactoryIcon,
    },
    {
      header: "Veterinarians",
      paragraph:
        "Promoting veterinary collaboration, poultry health management, disease prevention & biosecurity practices.",
      icon: StethoscopeIcon,
    },
    {
      header: "Input Suppliers",
      paragraph:
        "Connecting suppliers of poultry equipment, medications, and essential production inputs with industry stakeholders.",
      icon: PackageIcon,
    },
    {
      header: "Industry Partners",
      paragraph:
        "Fostering partnerships with relevant institutions, businesses, and stakeholders to advance the poultry industry.",
      icon: HandshakeIcon,
    },
  ];

  return (
    <section className="bg-[url('/mesh-lavender-haze.svg')] bg-cover bg-center h-[75vh] lg:h-screen w-full relative p-5 my-10 lg:my-15">
      <div className="z-11 flex justify-center items-center">
        <Tag text="WHO IS INVOLVED" />
      </div>
      <img
        src="/Group 5.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-60 lg:scale-100"
      />
      <div className="flex justify-between flex-col md:flex-row px-2 md:px-7.5 lg:px-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:h-auto py-18 md:py-auto">
        <div className="flex flex-row md:flex-col flex-3/20 gap-2 md:gap-6 lg:gap-10">
          {cardGroupOne.map((card, index) => (
            <div
              key={index}
              className="hover:border-[#FE0000] hover:shadow-[2px_2px_15px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-6 border border-[#FE0000]/30 rounded-2xl gap-2 group transition-all duration-300 min-h-25 md:min-h-30 w-1/4 md:w-auto"
            >
              <div className="p-2 lg:p-4 h-10 w-10 md:w-12.5 md:h-12.5 lg:h-15 lg:w-15 rounded-xl flex justify-center items-center align-middle transition-all duration-300 bg-[#FE0000]/10 group-hover:bg-[#FE0000]">
                <card.icon
                  weight="duotone"
                  className="group-hover:text-[#FFFFFF] text-xl md:text-2xl lg:text-3xl text-[#FE0000]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-center font-outfit font-semibold tracking-tighter md:tracking-normal text-xs md:text-base lg:text-lg">
                  {card.header}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-6/10"></div>

        <div className="flex flex-row md:flex-col flex-3/20 gap-2 md:gap-6 lg:gap-10">
          {cardGroupTwo.map((card, index) => (
            <div
              key={index}
              className="hover:border-[#FE0000] hover:shadow-[2px_2px_15px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center px-2 py-2 lg:px-3 lg:py-6 border border-[#FE0000]/30 rounded-2xl gap-2 group transition-all duration-300 min-h-25 md:min-h-30 w-1/4 md:w-auto"
            >
              <div className="p-2 lg:p-4 h-10 w-10 md:w-12.5 md:h-12.5 lg:h-15 lg:w-15 rounded-xl flex justify-center items-center align-middle transition-all duration-300 bg-[#FE0000]/10 group-hover:bg-[#FE0000]">
                <card.icon
                  weight="duotone"
                  className="group-hover:text-[#FFFFFF] text-xl md:text-2xl lg:text-3xl text-[#FE0000]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-center font-outfit font-semibold tracking-tighter md:tracking-normal text-xs md:text-base">
                  {card.header}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
