"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function VideoReveal() {

  const ref = useRef(null);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "start end",
      "end start"
    ],
  });


  // size animation
  const width = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["65%", "100%"]
  );


  const height = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["450px", "100vh"]
  );


  const radius = useTransform(
    scrollYProgress,
    [0,0.6],
    ["40px","0px"]
  );



  return (

    <section
      ref={ref}
      className="
      h-[200vh]
      bg-[#f8fafc]
      relative
      "
    >


      <div
        className="
        sticky
        top-0
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        "
      >


        <motion.div

          style={{
            width,
            height,
            borderRadius: radius
          }}

          className="
          overflow-hidden
          shadow-2xl
          bg-black
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