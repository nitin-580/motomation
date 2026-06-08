"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const problems=[
"Missed Follow-ups",
"Manual Emails",
"Copy Paste Tasks",
"Slow Operations"
];


const solutions=[
"AI Follow-ups",
"Smart Workflows",
"Auto Actions",
"24/7 Systems"
];


export default function ProblemSolution(){


return(

<section
className="
relative

min-h-screen

bg-[#f8fafc]

overflow-hidden

px-8
md:px-20

py-32

border-b
border-black/10
"
>



{/* TITLE */}
<div>


<p
className="
uppercase

tracking-[0.35em]

text-black/40

mb-6
"
>

WHY AUTOMATE

</p>


<h2
className={`
${bricolage.className}

text-6xl
md:text-9xl

font-normal

tracking-[-0.08em]

leading-none

text-black
`}
>

Turn chaos
<br/>
into systems.

</h2>


</div>








{/* MAIN */}
<div

className="
mt-28

grid

grid-cols-1

md:grid-cols-[1fr_150px_1fr]

gap-10

items-center

max-w-7xl

mx-auto
"
>






{/* PROBLEMS */}
<div

className="
relative

h-[500px]
"
>


{problems.map((item,index)=>(


<motion.div

key={index}

initial={{
x:-100,
opacity:0,
rotate:-10
}}

whileInView={{
x:0,
opacity:1,
rotate:index%2===0?-5:5
}}

transition={{
delay:index*.15
}}

className={`
absolute

w-72

rounded-[30px]

bg-white

border

border-black/10

p-8

shadow-xl

${index===0 && "top-0 left-5"}

${index===1 && "top-32 right-0"}

${index===2 && "top-64 left-0"}

${index===3 && "bottom-0 right-10"}

`}
>


<span

className={`
${bricolage.className}

text-3xl

font-medium

tracking-[-0.04em]

text-black
`}
>

{item}

</span>



<p

className="
mt-4

text-black/40
"

>

Before automation

</p>



</motion.div>


))}



</div>








{/* CENTER */}

<div

className="
hidden

md:flex

items-center

justify-center
"
>


<motion.div


animate={{
scale:[1,1.2,1]
}}

transition={{
duration:2,

repeat:Infinity
}}

className="
w-24
h-24

rounded-full

bg-black

flex

items-center

justify-center
"

>


<ArrowRight

size={40}

className="
text-white
"

/>



</motion.div>


</div>









{/* SOLUTIONS */}
<div

className="
relative

h-[500px]
"
>


{solutions.map((item,index)=>(


<motion.div

key={index}

initial={{
x:100,
opacity:0
}}

whileInView={{
x:0,
opacity:1
}}

transition={{
delay:index*.15
}}


className={`
absolute

w-72

rounded-[30px]

bg-black

p-8


${index===0 && "top-0 right-5"}

${index===1 && "top-32 left-0"}

${index===2 && "top-64 right-0"}

${index===3 && "bottom-0 left-10"}

`}
>



<span

className={`
${bricolage.className}

text-3xl

font-medium

tracking-[-0.04em]

text-white
`}
>

{item}

</span>



<p

className="
mt-4

text-white/40
"

>

After Motomation

</p>



</motion.div>



))}



</div>






</div>




</section>

)

}