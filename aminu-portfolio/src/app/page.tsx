"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/asset/index";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Left section with image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 mt-12 lg:mt-0">
            <Image
              src={hero}
              alt="hero"
              width={384} // Explicit width and height for better optimization
              height={384}
              className="object-contain rounded-full"
            />
          </div>
        </div>

        {/* Right section with text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl md:mb-3 font-bold mt-2 lg:mt-0">
            Developing engaging digital platforms,
            <br />
            Pioneering tomorrow’s designs
          </h1>
          <p className="px-4 lg:px-0">
            Innovation and creativity converge, originality and ingenuity
            intersect, forward-thinking and artistry blend. A keen eye for
            aesthetics, a sharp sense of design, technical mastery of code and
            programming.
          </p>
          <div className="flex gap-4 w-full">
           <Link href={"/portfolio"}>
           <button className="p-4 rounded-lg ring-1 ring-black bg-black text-yellow-700">
              View My Projects
            </button>
           </Link>
           <Link href={"/contact"}>
           <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
           </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
