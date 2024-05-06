import Image from "next/image";
import gallery1 from "../public/image/Gallery/high-angle-shot-beautiful-mountainous-landscape-with-hills-cloudy-sky.jpg";
import gallery2 from "../public/image/Gallery/breathtaking-view-lake-high-carpathian-mountains.jpg";
import gallery3 from "../public/image/Gallery/aleksandr-paramonov-l8LzIWmfZdY-unsplash.jpg";

export default function MobileGallery() {
  return (
    <ul className="flex flex-col gap-5 md:hidden">
      <li>
        <Image
          className="w-[100%] h-[100%]"
          src={gallery1}
          alt="Mountains"
        ></Image>
      </li>
      <li>
        <Image
          className="w-[100%] h-[100%]"
          src={gallery2}
          alt="Mountain lake"
        ></Image>
      </li>
      <li>
        <Image
          className="w-[100%] h-[100%]"
          src={gallery3}
          alt="Mountain forest"
        ></Image>
      </li>
    </ul>
  );
}
