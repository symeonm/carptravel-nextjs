import Hero from "./Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout() {
  return (
    <main className={inter.className}>
      <Hero />
    </main>
  );
}
