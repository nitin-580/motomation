"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const menu: any = {
  Work: {
    title: "Selected work.",
    items: ["AI Systems", "Web Apps", "Automation"],
  },

  Services: {
    title: "What we build.",
    items: ["Agents", "Workflows", "Software"],
  },

  About: {
    title: "Small team.",
    items: ["Fast", "Creative", "Reliable"],
  },
};

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div onMouseLeave={() => setActive(null)}>

      {/* NAVBAR */}
      <motion.nav
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`
          ${bricolage.className}

          fixed
          top-0
          left-0

          w-full
          h-[76px]

          flex
          items-center
          justify-between

          z-50

          bg-white
          text-black

          border-b
          border-neutral-200

          px-8
          md:px-16
        `}
      >

        {/* LOGO */}
        <Link
          href="/"
          className="
            text-2xl
            font-bold
            tracking-[-0.05em]
            hover:opacity-70
            transition
          "
        >
          Motomation
        </Link>



        {/* LINKS */}
        <div
          className="
            hidden
            md:flex

            gap-14

            text-[15px]
            font-medium
            text-neutral-600
          "
        >
          {Object.keys(menu).map((item) => (
            <span
              key={item}
              onMouseEnter={() => setActive(item)}
              className="
                cursor-pointer

                hover:text-black

                transition
                duration-200
              "
            >
              {item}
            </span>
          ))}
        </div>



        {/* CTA */}
        <Link
          href="/free-review"
          onClick={() => setActive(null)}
          className="
            px-5
            py-2.5

            bg-black
            text-white

            text-sm
            font-semibold

            hover:bg-neutral-800

            transition
            duration-300
          "
        >
          Get a Free Review
        </Link>


      </motion.nav>



      {/* DROPDOWN */}
      <AnimatePresence>

        {active && (

          <motion.div
            initial={{
              opacity:0,
              y:-15,
              height:0,
            }}

            animate={{
              opacity:1,
              y:0,
              height:280,
            }}

            exit={{
              opacity:0,
              y:-15,
              height:0,
            }}

            transition={{
              duration:0.3,
              ease:"easeInOut",
            }}

            className="
              fixed
              top-[76px]
              left-0

              w-full

              bg-white

              border-b
              border-neutral-200

              z-40

              overflow-hidden
            "
          >

            <div
              className="
                max-w-[1400px]
                mx-auto

                h-full

                px-8
                md:px-16

                flex
                items-center
                justify-between
              "
            >


              {/* LEFT */}
              <div>

                <p
                  className="
                    text-xs

                    uppercase
                    tracking-[0.25em]

                    text-neutral-400

                    mb-5
                  "
                >
                  {active}
                </p>


                <h2
                  className={`
                    ${bricolage.className}

                    text-5xl

                    font-semibold

                    tracking-[-0.04em]

                    text-black
                  `}
                >
                  {menu[active].title}
                </h2>

              </div>



              {/* RIGHT ITEMS */}
              <div
                className="
                  flex
                  flex-col
                  gap-5
                "
              >

                {menu[active].items.map(
                  (item:string)=>(

                    <p
                      key={item}
                      className={`
                        ${bricolage.className}

                        text-2xl

                        font-medium

                        tracking-[-0.04em]

                        text-neutral-500

                        hover:text-black

                        cursor-pointer

                        transition
                      `}
                    >
                      {item}
                    </p>

                  )
                )}

              </div>


            </div>


          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}