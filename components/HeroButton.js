"use client";

import Link from "next/link";

// import { Link } from "react-scroll/modules";

export default function HeroButton() {
  return (
    <Link
      tabIndex="0"
      href={"/"}
      spy="true"
      smooth="true"
      duration={500}
      className="cursor-pointer relative flex justify-center items-center mx-auto px-[93px] md:px-[68px] xl:px-[64px] py-[2px] md:py-[14px] xl:py-[16px] w-[280px] md:w-[230px] xl:w-[293px] text-white text-[18px] xl:text-[32px] font-bold leading-[48px] md:leading-[22px] xl:leading-[39px] uppercase bg-white bg-opacity-10  hover:bg-white hover:bg-opacity-20 focus:shadow-xl focus:outline-none transition-all duration-500 ease-linear"
    >
      JOIN NOW
    </Link>
  );
}
