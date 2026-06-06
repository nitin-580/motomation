"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
});


const menu:any = {

Work:{
title:"Selected work.",
items:["AI Systems","Web Apps","Automation"]
},

Services:{
title:"What we build.",
items:["Agents","Workflows","Software"]
},

About:{
title:"Small team.",
items:["Fast","Creative","Reliable"]
}

};


export default function Navbar(){


const [active,setActive]=useState<string|null>(null);



return(

<div
onMouseLeave={()=>setActive(null)}
>


<motion.nav

initial={{
y:-80,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:.7
}}


className={`
${bricolage.className}

fixed

top-8
left-1/2
-translate-x-1/2

w-[90%]
max-w-[1500px]

flex
items-center
justify-between

z-50

text-black
`}
>




{/* LOGO */}
<div
className="
text-xl

font-extrabold

tracking-tight
"
>

Motomation

</div>






{/* LINKS */}

<div

className="
hidden
md:flex

gap-16

text-[15px]

font-semibold
"
>


{Object.keys(menu).map((item)=>(


<span

key={item}

onMouseEnter={()=>setActive(item)}

className="
cursor-pointer

hover:opacity-50

transition
"

>

{item}

</span>


))}


</div>








<button

className="
px-7
py-3

rounded-full

bg-black

text-white

text-sm

font-semibold


hover:scale-105

transition
"
>

Start Project

</button>




</motion.nav>









{/* APPLE MENU */}

<AnimatePresence>


{
active &&


<motion.div

initial={{
opacity:0,
y:-20,
height:0
}}

animate={{
opacity:1,
y:0,
height:330
}}

exit={{
opacity:0,
y:-20,
height:0
}}


transition={{
duration:.35,
ease:"easeInOut"
}}


className="
fixed

top-0

left-0

w-full

bg-[#f8fafc]/95

backdrop-blur-xl

z-40

overflow-hidden
"

>




<div

className="
pt-36

max-w-[1500px]

mx-auto

px-20

flex

justify-between

items-end
"
>




<div>


<p

className="
text-black/40

mb-5

uppercase

tracking-[0.3em]

text-xs
"

>

{active}

</p>




<h2

className={`
${bricolage.className}

text-7xl

font-medium

tracking-[-0.08em]

leading-none

text-black
`}
>


{menu[active].title}


</h2>


</div>








<div

className="
flex

gap-16
"

>


{menu[active].items.map(
(i:string)=>(


<p

key={i}

className={`
${bricolage.className}

text-3xl

tracking-[-0.05em]

text-black/60
`}
>

{i}

</p>



)

)}


</div>




</div>



</motion.div>

}

</AnimatePresence>




</div>

)

}