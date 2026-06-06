"use client";

import { motion } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


export default function Loader() {


return (

<motion.div

initial={{
y:0
}}

animate={{
y:"-100%"
}}

transition={{
delay:2.8,
duration:1,
ease:[0.76,0,0.24,1]
}}


className="
fixed
inset-0

bg-black

flex
items-center
justify-center

z-[999]

overflow-hidden
"
>





{/* BACKGROUND GRID */}
<div

className="
absolute

inset-0

bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]

bg-[size:30px_30px]
"
/>








{/* CENTER */}
<div
className="
relative

flex

flex-col

items-center

gap-8
"
>





{/* TEXT */}
<motion.h1

initial={{
opacity:0,
y:30,
filter:"blur(10px)"
}}

animate={{
opacity:1,
y:0,
filter:"blur(0px)"
}}

transition={{
duration:1
}}


className={`
${bricolage.className}

text-white

text-4xl
md:text-7xl

font-medium

tracking-[-0.07em]
`}
>


Turning ideas
<br/>

into systems.


</motion.h1>








{/* LOADING LINE */}

<div

className="
relative

w-72

h-[2px]

bg-white/10

overflow-hidden
"
>



<motion.div

initial={{
x:"-100%"
}}

animate={{
x:"100%"
}}

transition={{
duration:1.5,
repeat:Infinity,
ease:"linear"
}}


className="
absolute

h-full

w-32

bg-white
"
/>



</div>






{/* SMALL TEXT */}

<motion.p

initial={{
opacity:0
}}

animate={{
opacity:.5
}}

transition={{
delay:.8
}}


className="
text-white

tracking-[0.4em]

text-xs

uppercase
"
>


building automation

</motion.p>





</div>



</motion.div>

)

}