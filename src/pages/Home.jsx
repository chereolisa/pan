import Body from "../components/Body";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  const slides = [
    {
      title: "Poultry Association of Nigeria, South East (PANSE)",
      subtitle:
        "Promoting sustainable poultry farming, empowering farmers, and strengthening the poultry industry across South East Nigeria.",
      image: "/home-1.jpg",
    },
    {
      title: "Empowering Poultry Farmers",
      subtitle:
        "Building a stronger poultry community through knowledge sharing, collaboration, and access to opportunities for growth.",
      image: "/home-2.jpg",
    },
    {
      title: "Growing Together, Feeding the Nation",
      subtitle:
        "Advancing poultry production, supporting farmers, and contributing to food security and economic development in South East Nigeria.",
      image: "/home-3.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero slides={slides} autoplayDelay={5000} />
      <Body />
    </div>
  );
}

export default Home;
