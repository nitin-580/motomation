"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { ArrowUpRight } from "lucide-react";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const services = [

{
number:"01",
title:"AI Automation",
desc:"Automate repetitive workflows using AI agents, APIs and custom logic."
},

{
number:"02",
title:"Custom Software",
desc:"Build scalable web apps, dashboards, CRMs and internal systems."
},

{
number:"03",
title:"Business Systems",
desc:"Connect your tools and create automated operating systems."
},

{
number:"04",
title:"AI Assistants",
desc:"Deploy intelligent chatbots and assistants trained for your business."
},

{
number:"05",
title:"Growth Automation",
desc:"Automate lead generation, emails, follow ups and sales pipelines."
}

];



export default function Services(){


return(

<section
className="
bg-[#f8fafc]

min-h-screen

px-6
md:px-20

py-32

border-b
border-black/10
"
>



{/* TITLE */}
<h2
className={`
${bricolage.className}

text-[14vw]

font-extrabold

tracking-[-0.1em]

leading-none

text-black
`}
>

Services

</h2>






{/* SERVICES */}
<div

className="
mt-24

max-w-7xl

mx-auto
"
>


{services.map((item)=>(



<div

key={item.number}


className="
group

border-t
border-black/10

py-12

flex

flex-col
md:flex-row

items-start
md:items-center

justify-between

gap-10


transition-all
duration-500


hover:px-10

hover:bg-black

rounded-[40px]

cursor-pointer
"

>




{/* LEFT */}

<div
className="
flex

gap-10

items-start
"
>



<span

className={`
${bricolage.className}

text-xl

text-black/30

group-hover:text-white/40
`}
>

{item.number}

</span>





<div>


<h3

className={`
${bricolage.className}

text-5xl

font-medium

tracking-[-0.06em]


text-black

group-hover:text-white

transition
`}
>

{item.title}

</h3>




<p

className="
mt-5

max-w-xl

text-lg

text-black/50

group-hover:text-white/50

transition
"
>

{item.desc}

</p>


</div>


</div>








{/* ICON */}
<div

className="
w-16
h-16

rounded-full

border
border-black/10


flex

items-center

justify-center


group-hover:bg-white

transition
"
>


<ArrowUpRight

className="
group-hover:text-black
"

size={28}

/>


</div>






</div>



))}



<div className="border-t border-black/10"/>



</div>



</section>

)

}