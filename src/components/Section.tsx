"use client";

import { useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const agents = [
{
name:"Email Agent",
work:"Writes replies, follows up leads and manages inbox."
},
{
name:"Sales Agent",
work:"Qualifies leads, updates CRM and books meetings."
},
{
name:"Support Agent",
work:"Answers customers instantly 24/7."
},
{
name:"Data Agent",
work:"Creates reports and analyzes your business data."
},
];


export default function PatternSection(){

const [selected,setSelected]=useState(0);


return(

<section className="
relative
min-h-screen
overflow-hidden
flex
items-center
justify-center
p-8
">


{/* PATTERN */}
<div
className="absolute inset-0 opacity-80"
style={{
"--s":"7px",
background:`
repeating-linear-gradient(
90deg,#ff0000 0,#ff0000 50%,#fff 50%,#fff 100%
),
repeating-linear-gradient(
0deg,#ff0000 0,#ff0000 50%,#fff 50%,#fff 100%
),
repeating-conic-gradient(
from 45deg,#006400 0 25%,#32cd32 0 50%
)
`,
backgroundSize:
`
calc(2 * var(--s)) calc(2 * var(--s)),
calc(2 * var(--s)) calc(2 * var(--s)),
calc(4 * var(--s)) calc(4 * var(--s))
`
} as React.CSSProperties}
/>




{/* PANEL */}
<div className="
relative
z-10

w-full
max-w-6xl

bg-white

rounded-[50px]

p-10
md:p-16

shadow-2xl

text-black
">



<h2
className={`
${bricolage.className}

text-5xl
md:text-7xl

font-medium

tracking-[-0.07em]

leading-none
`}
>

Hire your AI
<br/>
employee today.

</h2>



<p className="
mt-6
text-xl
text-black/40
">

Choose a pre-built automation agent.

</p>







{/* AGENTS */}

<div className="
mt-14

grid
grid-cols-1
md:grid-cols-4

gap-5
">


{
agents.map((agent,index)=>(


<button

key={index}

onClick={()=>setSelected(index)}


className={`
rounded-[30px]

p-7

text-left

transition-all

duration-500


${
selected===index
?
"bg-black text-white"
:
"bg-[#f5f5f5] text-black hover:bg-black hover:text-white"
}

`}

>



<h3

className={`
${bricolage.className}

text-3xl

tracking-[-0.05em]
`}
>

{agent.name}

</h3>



<p className="
mt-5

text-sm

opacity-50
">

{agent.work}

</p>


</button>



))
}


</div>








{/* RESULT */}

<AnimatePresence mode="wait">


<motion.div

key={selected}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}


className="
mt-12

rounded-[35px]

border

border-black/10

p-8


flex

items-center

justify-between
"

>


<div>


<p className="text-black/40">
Selected automation
</p>



<h3

className={`
${bricolage.className}

text-4xl

tracking-[-0.05em]
`}
>

{agents[selected].name} ready

</h3>


</div>




<div

className="
flex

items-center

gap-3

text-green-600

font-medium
"

>

<Check/>

Pre-built

</div>




</motion.div>


</AnimatePresence>







<button

className="
mt-10

w-full

py-5

rounded-full

bg-black

text-white

font-semibold

text-lg
"
>

Deploy this Agent

</button>




</div>


</section>

)

}