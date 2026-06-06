"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { motion } from "framer-motion";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const testimonials = [

{
company:"GOOGLE",
name:"Sarah Chen",
role:"Product Lead",
text:
"Motomation transformed our workflows. Hours of manual work disappeared."
},

{
company:"OPENAI",
name:"Alex Morgan",
role:"Operations",
text:
"Automation finally feels simple. Everything runs silently."
},

{
company:"MICROSOFT",
name:"David Kim",
role:"Manager",
text:
"Our team now focuses on growth instead of repetitive tasks."
},

{
company:"AMAZON",
name:"Maya Lee",
role:"Growth",
text:
"The cleanest automation experience we have used."
},

];


export default function Testimonials(){


return(

<section
className="
relative

overflow-hidden

bg-[#F7D84B]

py-28
"
>



{/* HEADER */}
<div
className="
px-8
md:px-20

mb-20
"
>


<h2
className={`
${bricolage.className}

text-5xl
md:text-8xl

font-normal

tracking-[-0.06em]

leading-none

text-black
`}
>

Loved by teams <br/>
who move faster.

</h2>


</div>







{/* SLIDER */}
<div

className="
overflow-hidden
"
>


<motion.div

className="
flex

gap-8

w-max
"


animate={{

x:["0%","-50%"]

}}


transition={{

duration:30,

repeat:Infinity,

ease:"linear"

}}

>



{[...testimonials,...testimonials].map(
(item,index)=>(


<div

key={index}

className="
w-[420px]
h-[280px]

rounded-[35px]

bg-white/60


p-10


flex

flex-col

justify-between


shrink-0
"
>



{/* COMPANY */}

<h3

className={`
${bricolage.className}

text-3xl

font-bold

tracking-[-0.05em]

text-black/40
`}
>

{item.company}

</h3>





<p

className={`
${bricolage.className}

text-2xl

font-medium

leading-tight

text-black
`}
>

“{item.text}”

</p>






<div>


<h4
className="
font-semibold
text-black
"
>

{item.name}

</h4>



<p
className="
text-black/50
"
>

{item.role}

</p>


</div>




</div>


)

)}


</motion.div>



</div>



</section>

)

}