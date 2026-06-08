"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { motion } from "framer-motion";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const agents=[

{
name:"Sales Agent",
task:"Books meetings, follows leads and updates CRM."
},

{
name:"Support Agent",
task:"Answers customers instantly 24/7."
},

{
name:"Research Agent",
task:"Finds data and creates business insights."
},

{
name:"Operations Agent",
task:"Manages internal workflows automatically."
},

];



export default function Agents(){


return(

<section

className="
relative

min-h-screen

bg-black

overflow-hidden

px-8

py-32

border-b
border-white/10
"
>



{/* TITLE */}
<div
className="
text-center
"
>


<p

className="
uppercase

tracking-[0.4em]

text-white/40

mb-5
"

>

AI WORKFORCE

</p>


<h2

className={`
${bricolage.className}

text-6xl

md:text-9xl

font-normal

tracking-[-0.08em]

leading-none

text-white
`}
>

Agents that
<br/>
never sleep.

</h2>


</div>








{/* NETWORK */}
<div

className="
relative

mt-32

h-[600px]

max-w-6xl

mx-auto
"
>





{/* CENTER CORE */}

<motion.div

animate={{
scale:[1,1.08,1]
}}

transition={{
duration:3,

repeat:Infinity
}}


className="
absolute

left-1/2

top-1/2

-translate-x-1/2

-translate-y-1/2


w-48

h-48


rounded-full

bg-white


flex

items-center

justify-center


z-20
"

>


<h3

className={`
${bricolage.className}

text-5xl

font-bold

tracking-[-0.08em]

text-black
`}
>

AI

</h3>


</motion.div>








{/* LINES */}

<div

className="
absolute

left-1/2

top-1/2

w-[80%]

h-[1px]

bg-white/10

-translate-x-1/2
"
/>


<div

className="
absolute

left-1/2

top-1/2

h-[80%]

w-[1px]

bg-white/10

-translate-y-1/2
"
/>









{/* AGENTS */}

{agents.map((agent,index)=>(


<motion.div

key={index}


animate={{
y:[0,-15,0]
}}


transition={{
duration:4+index,

repeat:Infinity
}}



className={`

group

absolute

w-72

rounded-[35px]

bg-white/5

border

border-white/10


backdrop-blur


p-8


cursor-pointer


transition-all


hover:bg-white



${index===0 && "left-0 top-0"}

${index===1 && "right-0 top-0"}

${index===2 && "left-0 bottom-0"}

${index===3 && "right-0 bottom-0"}

`}

>




<div

className="
flex

items-center

gap-3

mb-8
"
>



<span

className="
w-3

h-3

rounded-full

bg-green-400

animate-pulse
"
/>



<p

className="
text-white/40

group-hover:text-black/40
"

>

ONLINE

</p>



</div>






<h3

className={`
${bricolage.className}

text-4xl

tracking-[-0.05em]

text-white

group-hover:text-black
`}
>

{agent.name}

</h3>





<p

className="
mt-5

text-white/40

group-hover:text-black/50
"

>

{agent.task}

</p>




</motion.div>


))}





</div>





</section>

)

}