"use client";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800", "900"] });

export default function Home() {
  return (
    <>
      <div className={`${inter.className} font-normal`}>
        <div className="bg-gray-200 h-screen ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="font-normal relative mt-16">
            <HeroSection />
          </div>
        </div>
      </div>
    </>
  );
}
