"use client";

import { useRef } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import HighlightSection from "./HighlightSection";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});



function GridBackground(){

return (

<div
className="
absolute
inset-0
z-0
bg-[#f8fafc]
overflow-hidden
"
>

<div
className="
absolute
inset-0

bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]

bg-[size:20px_30px]

[mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]

[-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]
"
/>

</div>

)

}







export default function Hero(){


const ref=useRef(null);


const {scrollYProgress}=useScroll({
target:ref,
offset:["start start","end end"]
});



const width=useTransform(
scrollYProgress,
[0,1],
["65vw","100vw"]
);


const height=useTransform(
scrollYProgress,
[0,1],
["42vh","100vh"]
);


const radius=useTransform(
scrollYProgress,
[0,1],
["36px","0px"]
);





return (

<>


<section
ref={ref}
className="
relative
h-[220vh]
bg-[#f8fafc]
border-b
border-black/10
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


<GridBackground />




{/* HERO CONTENT */}

<div
className="
absolute
top-[18%]
z-10
w-full
px-6
"
>



<h1
className={`
${bricolage.className}

text-[15vw]

font-extrabold

tracking-[-0.09em]

leading-none

text-center

text-black

select-none
`}
>

motomation

</h1>





<p
className={`
${bricolage.className}

mt-8

max-w-2xl

mx-auto

text-center

text-xl
md:text-2xl

leading-relaxed

text-neutral-600
`}
>

We build intelligent systems,
automations and software that scale
business operations.

</p>





<div
className="
flex
justify-center
gap-5
mt-10
"
>


<Link

href="/contact"

className={`
${bricolage.className}

px-8
py-4

bg-black

text-white

font-bold

text-sm

hover:bg-neutral-800

transition
`}
>

Start Project

</Link>



<a

href="#work"

className={`
${bricolage.className}

px-8
py-4

border
border-black/20

text-black

font-bold

text-sm

hover:bg-black/5

transition
`}
>

View Work

</a>



</div>



</div>






{/* VIDEO SCROLL */}

<motion.div

style={{
width,
height,
borderRadius:radius
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








{/* SECOND SECTION */}
<HighlightSection />


</>

)

}