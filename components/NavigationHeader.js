import Link from "next/link";

export default function NavigationHeader() {
  return (
    <ul className="hidden md:flex gap-6 xl:gap-14 text-white cursor-pointer">
      <li>
        <Link
          href="/"
          className="text-[14px]  font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[14px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[14px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
        >
          Career
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[14px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-[14px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
        >
          Contacts
        </Link>
      </li>
    </ul>
  );
}
