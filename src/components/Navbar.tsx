"use client";

import { motion } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
});


export default function Navbar() {
  return (

    <motion.nav

      initial={{ y:-80, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration:.7 }}

      className={`
      ${bricolage.className}

      fixed
      top-8

      left-1/2
      -translate-x-1/2

      w-[90%]
      max-w-[1500px]

      flex
      items-center
      justify-between

      z-50
      `}
    >


      {/* LOGO */}
      <div
        className="
        text-xl
        font-extrabold
        tracking-tight
        text-black
        "
      >
        Motomation
      </div>




      {/* LINKS */}
      <div
        className="
        hidden
        md:flex

        gap-16

        text-[15px]

        font-semibold

        text-black
        "
      >

        <span className="cursor-pointer hover:opacity-50 transition">
          Work
        </span>

        <span className="cursor-pointer hover:opacity-50 transition">
          Services
        </span>

        <span className="cursor-pointer hover:opacity-50 transition">
          About
        </span>

      </div>





      {/* CTA */}
      <button
        className="
        px-6
        py-3

        rounded-full

        bg-black

        text-white

        text-sm

        font-semibold


        hover:scale-105

        transition
        "
      >

        Start Project

      </button>



    </motion.nav>

  );
}