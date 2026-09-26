function Collab() {
  const imagesOne = [
    "/pan_logo.png",
    "/havifarm.png",
    "/agroinfotech_logo.png",
    "/biacom.png",
    "/hybrid_feeds.png",
  ];
  const imagesTwo = [
    "/interchem.png",
    "/pinga_agro.png",
    "/premier_feeds.png",
    "/sedc.png",
    "/sunchi_farms.png",
  ];

  return (
    <div className="overflow-hidden w-full mt-3 bg-white py-3">
      <h3 className="font-outfit text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 lg:mb-10 text-center">
        Sponsors and Collaborations
      </h3>
      <div className="flex w-max animate-[scroll1_70s_linear_infinite] hover:[animation-play-state:paused] mb-3 md:mb-5 lg:mb-7">
        {[...imagesOne, ...imagesOne].map((image, index) => (
          <a>
            <img key={index} src={image} alt="sponsor" className="scale-85" />
          </a>
        ))}
      </div>
      <div className="flex w-max animate-[scroll2_70s_linear_infinite] hover:[animation-play-state:paused] mb-5 md:mb-10 lg:mb-15">
        {[...imagesTwo, ...imagesTwo].map((image, index) => (
          <a>
            <img key={index} src={image} alt="sponsor" className="scale-85" />
          </a>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll1 {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
          @keyframes scroll2 {
            from {
              transform: translateX(-50%);
            }

            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Collab;
