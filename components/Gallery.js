import MobileGallery from "./MobileGallery";
import SliderGallery from "./SliderGallery";

export default function Gallery() {
  return (
    <section className="text-white bg-cover bg-gallaryBg py-14 md:py-16 xl:py-20 md:text-center xl:text-start md:h-[575px] xl:h-[788px]">
      <div className="relative z-10 container">
        <h2 className="text-[40px] md:text-[67px] xl:[98px] font-thin leading-[56px] md:leading-[81px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-6 md:mb-[72px] xl:mb-[24px]">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <MobileGallery />
        <SliderGallery />
      </div>
    </section>
  );
}
