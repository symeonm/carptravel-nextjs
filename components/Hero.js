"use client";

import Header from "./Header";

export default function Hero() {
  return (
    <section className=" pt-[36px] md:pt-[25px] xl:pt-[24px] bg-center bg-cover bg-hero xl:bg-heroDesk h-[642px] md:h-[530px] xl:h-[763px]">
      <Header />
      <div className=" relative mt-[36px] md:mt-[66px] xl:mt-[72px] flex flex-col container">
        <h2 className=" absolute top-0 right-[20px] md:top-[20px] text-white font-thin text-4xl md:text-[67px] tracking-[1.665px] md:tracking-[8.71px] uppercase flex flex-wrap  w-[118px] md:w-[238px] md:h-[81px]">
          <span className="text-white font-medium text-4xl md:text-[67px] md:w-[39px]">
            7
          </span>
          DAYS
          <span className="text-xs md:text-sm xl:text-[16px] font-light tracking-[9.48px] md:tracking-[25.9px] xl:tracking-[31.48px] uppercase text-white md:h-[17px] ">
            JOURNEY
          </span>
        </h2>
        <h1 className="text-[40px] md:text-[67px] xl:text-[98px] md:w-[426px] xl:w-[646px] md:h-[243px] xl:h-[357px] text-white font-thin leading-[56px] md:leading-[80px] xl:leading-[123px] tracking-[-1.6px] md:tracking-[-2.68px]  xl:tracking-[-3.92px] uppercase pt-[76px] md:pt-0 mb-6 md:mb-[68px] xl:mb-[148px]">
          <span className="font-medium">Uncover </span>
          Carpathian’s Secrets
        </h1>
        <p className=" text-white w-[157px] md:w-[263px] xl:w-full text-[10px] md:text-[14px] xl:text-base	font-extralight leading-4 mb-6 md:mb-0 md:tracking-[1.26px] xl:tracking-[1.44px]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text-white text-sm md:text-[16px] xl:text-[18px] font-extralight leading-[20px] xl:leading-6 mb-6 md:mb-7 md:w-[230px] xl:w-[294px] md:h-[120px]">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <button>JOIN NOW</button>
      </div>
    </section>
  );
}
