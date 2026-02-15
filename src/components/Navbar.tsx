"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 
      backdrop-blur-xl 
      bg-white/70 
      border border-gray-200 
      rounded-full 
      px-8 py-3 
      flex gap-10 items-center 
      z-40 
      shadow-xl"
    >
      {/* Logo */}
      <span className="font-semibold text-gray-900 tracking-wide">
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Motomation
        </span>
      </span>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-sm text-gray-600">
        <span className="hover:text-black transition cursor-pointer">
          Products
        </span>
        <span className="hover:text-black transition cursor-pointer">
          Pricing
        </span>
        <span className="hover:text-black transition cursor-pointer">
          Docs
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="text-sm px-4 py-2 text-gray-700 hover:text-black transition">
          Login
        </button>
        <button className="text-sm px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full hover:scale-105 transition shadow-md">
          Sign Up
        </button>
      </div>
    </motion.nav>
  );
}