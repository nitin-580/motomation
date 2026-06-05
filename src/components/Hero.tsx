"use client";

import { useState, useRef } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { Power } from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export default function Hero() {


  const [active, setActive] = useState(false);


  const ref = useRef(null);


  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });


  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["65vw", "100vw"]
  );


  const height = useTransform(
    scrollYProgress,
    [0, 1],
    ["42vh", "100vh"]
  );


  const radius = useTransform(
    scrollYProgress,
    [0, 1],
    ["40px", "0px"]
  );




  // Magnetic button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 12,
  });


  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 12,
  });



  const moveButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {

    const rect =
      e.currentTarget.getBoundingClientRect();


    const moveX =
      e.clientX -
      rect.left -
      rect.width / 2;


    const moveY =
      e.clientY -
      rect.top -
      rect.height / 2;


    mouseX.set(moveX * 0.5);
    mouseY.set(moveY * 0.5);

  };



  const resetButton = () => {
    mouseX.set(0);
    mouseY.set(0);
  };




  return (

    <section
      ref={ref}
      className="
      relative
      h-[220vh]
      bg-[#f8fafc]
      "
    >


      <div
        className="
        sticky
        top-0
        h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        "
      >


        {/* GRID */}
        <div
          className="
          absolute
          inset-0
          z-0
          bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
          bg-[size:20px_30px]
          [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_60%,transparent_100%)]
          "
        />





        {/* CONTENT */}
        <div
          className="
          absolute
          top-[18%]
          z-10
          w-full
          px-4
          "
        >



          {/* LOGO */}
          <h1
            className={`
            ${bricolage.className}

            text-[15vw]
            font-extrabold
            tracking-[-0.09em]
            leading-none

            flex
            justify-center
            items-center

            text-black
            select-none
            `}
          >


            <span>M</span>


            <span
              className="
              inline-flex
              animate-spin
              [animation-duration:6s]
              "
            >
              O
            </span>



            <span>T</span>



            <span
              className="
              inline-flex
              animate-spin
              [animation-duration:6s]
              [animation-direction:reverse]
              "
            >
              O
            </span>



            <span>MATI</span>




            {/* ON */}
            <span className="relative inline-flex">


              {/* POWER BUTTON */}
              <motion.button

                style={{
                  x,
                  y,
                }}

                onMouseMove={moveButton}

                onMouseLeave={resetButton}

                onClick={() =>
                  setActive(!active)
                }


                className={`
                absolute

                -top-14
                left-1/2
                -translate-x-1/2

                w-14
                h-14

                rounded-full

                flex
                items-center
                justify-center

                overflow-hidden

                text-white

                shadow-xl

                hover:scale-110

                transition


                ${
                  active
                  ? "bg-red-900"
                  : "bg-black"
                }

                `}
              >



                {/* liquid hover */}
                <div
                  className="
                  absolute
                  inset-0

                  rounded-full

                  bg-white/30

                  scale-0

                  hover:scale-[2]

                  transition-transform

                  duration-500
                  "
                />



                <Power
                  size={28}
                  className="
                  relative
                  z-10
                  "
                />


              </motion.button>






              <span

                className={`
                transition-all
                duration-700


                ${
                  active
                  ?
                  "text-red-700"
                  :
                  "text-black"
                }

                `}
              >

                ON

              </span>



            </span>


          </h1>







          <p
            className={`
            ${bricolage.className}

            mt-8

            text-center

            text-xl
            md:text-2xl

            text-gray-600
            `}
          >

            Turn your automation ON.
            Close deals while you sleep.

          </p>



        </div>






        {/* VIDEO */}
        <motion.div

          style={{
            width,
            height,
            borderRadius: radius,
          }}

          className="
          absolute

          bottom-[-150px]

          z-20

          overflow-hidden

          bg-black

          shadow-2xl
          "
        >


          <video

            src="/demo.mp4"

            autoPlay

            muted

            loop

            playsInline


            className="
            w-full
            h-full
            object-cover
            "

          />



        </motion.div>




      </div>


    </section>

  );
}