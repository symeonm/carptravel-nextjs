import Hero from "./Hero";
import { Inter } from "next/font/google";
import Gallery from "./Gallery";
import Career from "./Career";

const inter = Inter({ subsets: ["latin"] });

export default function Layout() {
  return (
    <main className={inter.className}>
      <Hero />
      <Career />
      <Gallery />
    </main>
  );
}
