import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#176B3A]">
      {" "}
      <footer className="flex flex-col justify-between md:flex-row w-full h-auto px-7 py-10 md:justify-around gap-4">
        <div className="w-full md:w-1/4 mx-auto md:mx-0">
          <img
            src="/footer_logo.svg"
            alt="logo"
            className="scale-105 md:scale-100"
          />
          <p className="font-inter text-sm font-normal text-[#D9D9D9] mt-2">
            Empowering poultry stakeholders through collaboration, knowledge,
            advocacy and sustainable practices to build a stronger industry
            across South East Nigeria.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h5 className="font-snpro text-lg md:text-xl lg:text-2xl font-normal text-[#000000]">
            Quick Links
          </h5>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#d9d9d9] font-normal hover:text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#d9d9d9] font-normal hover:text-white"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#d9d9d9] font-normal hover:text-white"}`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#d9d9d9] font-normal hover:text-white"}`
            }
          >
            Contact
          </NavLink>
        </div>

        <div>
          <h5 className="font-snpro text-lg md:text-xl lg:text-2xl font-normal text-[#000000]">
            Contact Us
          </h5>
          <p className="font-inter text-md font-normal text-[#D9D9D9] mt-2 mb-4">
            We'd love to hear from you!
          </p>
          <p className="flex items-center align-middle font-inter text-sm font-normal text-[#D9D9D9] mt-3">
            <MapPinIcon size={32} weight="duotone" /> &nbsp;&nbsp;22 Poultry
            Avenue, Enugu State, Enugu.
          </p>
          <p className="font-inter text-sm font-normal text-[#D9D9D9] mt-3">
            <a
              href="tel:+2348000000000"
              className="flex items-center align-middle"
            >
              <PhoneIcon size={32} weight="duotone" /> &nbsp;&nbsp;+234 800 0000
              000
            </a>
          </p>
          <p className="font-inter text-sm font-normal text-[#D9D9D9] mt-3">
            <a href="" className="flex items-center align-middle">
              <EnvelopeIcon size={32} weight="duotone" />{" "}
              &nbsp;&nbsp;info@pansoutheast.com.ng
            </a>
          </p>
        </div>
      </footer>
      <hr className="w-[95%] border-[#9e9e9e] mx-auto" />
      <div className="flex flex-col md:flex-row md:justify-between p-3 mx-5">
        <p className="font-inter text-xs lg:text-sm font-normal text-[#D9D9D9] text-center md:text-left">
          &copy;&nbsp;{new Date().getFullYear()}. Poultry Association of
          Nigeria, South East.{" "}
        </p>
        <p className="font-inter text-xs lg:text-sm font-normal text-[#D9D9D9] text-center md:text-right">
          All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
