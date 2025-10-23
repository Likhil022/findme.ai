"use client";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <>
      <div className={`${inter.className} font-normal`}>
        <div className="bg-gray-200 h-screen ">
          <div className="fixed top-0 left-0 right-0">
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
