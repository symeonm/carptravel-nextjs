import Image from "next/image";
import Link from "next/link";
import logo from "../public/image/Header/RectanglelogoCarp.svg";
import logoText from "../public/image/Header/CarpTravelTextlogo.svg";
import { useState } from "react";
import NavigationHeader from "./NavigationHeader";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu(!mobileMenu);
  return (
    <header className="container">
      <nav className="flex justify-between items-center ">
        <Link href="/">
          <Image
            src={logo}
            alt="Carp travel logo"
            width={61}
            height={21}
          ></Image>
          <Image
            src={logoText}
            alt="Carp Travel"
            width={61}
            height={10}
          ></Image>
        </Link>
        <button
          type="button"
          className="md:hidden text-[14px] tracking-[1.4px] uppercase text-white"
          onClick={toggleMenu}
        >
          MENU
        </button>
        {mobileMenu && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgb(1,10,5,0.75)] backdrop-blur-[25px] text-white">
            <button
              type="button"
              onClick={toggleMenu}
              className="absolute right-[20px] top-[43px] text-[14px] font-normal tracking-[1.4px] transition duration-500 ease-in-out transform "
            >
              CLOSE
            </button>
            <ul className=" mt-[170px] flex flex-col gap-12  text-center cursor-pointer">
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        )}
        <NavigationHeader />
      </nav>
    </header>
  );
}
