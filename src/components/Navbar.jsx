import { NavLink } from "react-router-dom";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <div className="md:hidden flex gap-1.5 px-3">
        <p className="font-inter font-semibold ">Follow Us:</p>
        <div className=" flex justify-between align-middle items-center gap-1">
          <FacebookLogoIcon
            size={24}
            weight="regular"
            className="cursor-pointer"
          />
          <InstagramLogoIcon
            size={24}
            weight="regular"
            className="cursor-pointer"
          />
          <XLogoIcon size={24} weight="regular" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-around align-middle border-b border-transparent bg-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative md:fixed z-1000 w-full p-0.5 md:p-3">
        <img
          src="/pan_full_logo.png"
          className="scale-75 md:scale-100 lg:scale-110"
        />
        <nav className="flex justify-center align-middle items-center gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#3a3a3a] font-normal hover:text-black"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#3a3a3a] font-normal hover:text-black"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#3a3a3a] font-normal hover:text-black"}`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-inter font-semibold text-sm lg:text-lg ${isActive ? "text-[#fe0000] font-semibold" : "text-[#3a3a3a] font-normal hover:text-black"}`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:flex justify-between align-middle items-center gap-5">
          <FacebookLogoIcon
            size={28}
            weight="light"
            className="cursor-pointer"
          />
          <InstagramLogoIcon
            size={28}
            weight="light"
            className="cursor-pointer"
          />
          <XLogoIcon size={28} weight="light" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
