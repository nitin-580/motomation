"use client";

import { useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
});


const faqs = [

{
q:"What does Motomation build?",
a:"We create AI powered automations, workflows, internal tools and systems that help businesses save time."
},

{
q:"Can you automate my existing workflow?",
a:"Yes. We study your current process and build custom automations around your existing tools."
},

{
q:"Do I need technical knowledge?",
a:"No. Motomation handles strategy, building, deployment and support."
},

{
q:"Which platforms do you integrate?",
a:"We connect CRMs, emails, spreadsheets, APIs, websites and AI agents together."
},

{
q:"How long does it take?",
a:"Most automation systems can be launched within 1-3 weeks depending on complexity."
},

{
q:"Do you provide support?",
a:"Yes. We continuously maintain and improve your automation systems."
}

];




export default function FAQ(){


const [open,setOpen]=useState(0);



return(

<section

className="
relative

bg-[#f8fafc]

min-h-screen

px-8
md:px-24

py-32

border-b
border-black/10
"
>


<div

className="
grid

grid-cols-1

md:grid-cols-2

gap-20

max-w-7xl

mx-auto
"
>





{/* LEFT STICKY */}
<div

className="
md:sticky

top-32

h-fit
"
>



<h2

className={`
${bricolage.className}

text-[20vw]

md:text-[12vw]

font-extrabold

tracking-[-0.12em]

leading-none

text-black
`}
>

FAQ

</h2>




<p

className="
mt-8

text-xl

max-w-md

text-black/40
"
>

Everything you need to know before turning your automation ON.

</p>



</div>







{/* RIGHT QUESTIONS */}
<div

className="
space-y-5
"
>


{faqs.map((item,index)=>(


<div

key={index}

className="
border-b

border-black/10

py-6
"
>




<button

onClick={()=>setOpen(
open===index ? -1:index
)}

className="
w-full

flex

items-center

justify-between

text-left
"
>


<span

className={`
${bricolage.className}

text-2xl

md:text-4xl

font-medium

tracking-[-0.04em]

text-black
`}
>

{item.q}

</span>



<motion.div

animate={{
rotate:
open===index ? 45:0
}}

transition={{
duration:.3
}}

>

<Plus size={28}/>


</motion.div>




</button>





<AnimatePresence>


{
open===index &&

<motion.div


initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}


transition={{
duration:.35,
ease:"easeInOut"
}}


className="
overflow-hidden
"

>



<p

className="
pt-6

text-lg

leading-relaxed

text-black/50

max-w-xl
"
>

{item.a}

</p>




</motion.div>

}


</AnimatePresence>



</div>


))}


</div>




</div>


</section>

)

}