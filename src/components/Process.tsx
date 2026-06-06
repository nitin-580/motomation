"use client";

import { useRef } from "react";
import { Bricolage_Grotesque } from "next/font/google";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const steps=[

{
number:"01",
title:"Discover",
desc:"We understand your workflow and identify what can be automated."
},

{
number:"02",
title:"Prototype",
desc:"We create the first working version of your automation system."
},

{
number:"03",
title:"Automate",
desc:"AI agents, integrations and workflows start replacing manual work."
},

{
number:"04",
title:"Scale",
desc:"We improve and expand your system as your business grows."
}

];



export default function Process(){

const ref=useRef(null);


const {scrollYProgress}=useScroll({
target:ref,
offset:["start center","end center"]
});


const lineHeight=useTransform(
scrollYProgress,
[0,1],
["0%","100%"]
);



return(

<section

ref={ref}

className="
relative

bg-[#f8fafc]

py-32

overflow-hidden
"
>



{/* TITLE */}

<div

className="
px-8
md:px-24

mb-32
"
>


<p

className="
uppercase

tracking-[0.4em]

text-black/40

mb-5
"

>

PROCESS

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

From idea
<br/>
to automation.

</h2>


</div>







{/* TIMELINE */}

<div

className="
relative

max-w-6xl

mx-auto
"
>



{/* base line */}

<div

className="
absolute

left-1/2

top-0

-bottom-0

w-[2px]

bg-black/10

hidden

md:block
"

/>



{/* animated line */}

<motion.div

style={{
height:lineHeight
}}

className="
absolute

left-1/2

top-0

w-[2px]

bg-black

hidden

md:block
"

/>







{steps.map((step,index)=>(


<div

key={index}

className={`
relative

min-h-[320px]

flex

items-center

${
index%2===0
?
"md:justify-start"
:
"md:justify-end"
}

`}
>





{/* DOT */}

<div

className="
hidden

md:block

absolute

left-1/2

-translate-x-1/2


w-5
h-5

rounded-full

bg-black

z-10
"

/>







{/* CARD */}

<motion.div


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:.7
}}


className="
w-full

md:w-[42%]

px-8

"
>



<span

className={`
${bricolage.className}

text-8xl

font-bold

tracking-[-0.1em]

text-black/10
`}

>

{step.number}

</span>





<h3

className={`
${bricolage.className}

text-5xl

font-medium

tracking-[-0.05em]

text-black

mt-[-30px]
`}

>

{step.title}

</h3>






<p

className="
mt-6

text-lg

leading-relaxed

text-black/50
"

>

{step.desc}

</p>




</motion.div>



</div>


))}




</div>



</section>

)

}