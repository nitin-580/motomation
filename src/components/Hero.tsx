"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f5f7] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f3f4f6] to-[#e5e7eb]" />


      {/* Blur Orbs */}
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40 top-20 left-20" />
      <div className="absolute w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-40 bottom-20 right-20" />

      {/* Floating Cards Left */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute left-10 top-24 bg-white shadow-2xl rounded-2xl p-5 w-64"
      >
        <p className="text-sm font-semibold">Transfer Email</p>
        <div className="mt-4 space-y-2">
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-4/5" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute left-20 bottom-28 bg-white shadow-xl rounded-2xl p-4 w-52"
      >
        <div className="h-3 bg-gray-200 rounded mb-2" />
        <div className="h-3 bg-gray-200 rounded w-3/4" />
      </motion.div>

      {/* Floating Cards Right */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute right-16 top-32 bg-white shadow-2xl rounded-2xl p-4 w-56"
      >
        <div className="h-3 bg-gray-200 rounded mb-3" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -22, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute right-10 bottom-32 bg-white shadow-xl rounded-2xl p-5 w-60"
      >
        <div className="h-3 bg-gray-200 rounded mb-2" />
        <div className="h-3 bg-gray-200 rounded mb-2 w-4/5" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute right-40 top-20 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-2"
      >
        <div className="w-3 h-3 bg-green-400 rounded-full" />
        <span className="text-sm text-gray-600">Deal Closed</span>
      </motion.div>


     {/* Center Content */}
<div className="relative text-center max-w-6xl px-6 z-10">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="
      text-5xl
      sm:text-6xl
      md:text-7xl
      lg:text-8xl
      font-extrabold
      leading-[1.05]
      text-black
      tracking-tight
    "
  >
    Forward,
    <br />
    <span className="relative inline-block">
      <span className="absolute inset-0 bg-purple-200 -rotate-1 rounded-lg"></span>
      <span className="relative px-4">Automate</span>
    </span>{" "}
    Close
    <br />
    your Deals
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="
      mt-6
      text-sm
      md:text-sm
      lg:text-xl
      text-gray-600
      max-w-2xl
      mx-auto
      leading-relaxed
    "
  >
    Turn any email into a deal. Let automation handle the follow-ups.
    Close more deals with less work.
  </motion.p>

  <motion.button
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.6 }}
    className="
      mt-10
      px-10
      py-5
      text-lg
      rounded-full
      bg-gradient-to-r
      from-purple-500
      to-indigo-600
      text-white
      font-semibold
      shadow-xl
      hover:scale-105
      transition-transform
    "
  >
    Try Free for 7 Days
  </motion.button>
</div>
    </section>
  );
}