"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { ArrowUpRight } from "lucide-react";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


const works = [

{
title:"AI Automation",
desc:"AI workflows that remove repetitive tasks and scale teams.",
src:"/work1.mp4",
type:"video",
link:"#"
},

{
title:"CRM Systems",
desc:"Custom sales systems that close more deals.",
src:"/work2.png",
type:"image",
link:"#"
},

{
title:"Business Operating System",
desc:"Complete automation infrastructure built for modern companies.",
src:"/work3.png",
type:"image",
link:"#"
},

];




export default function Work(){


return(

<section

className="
min-h-screen
bg-[#f8fafc]

px-6
py-28

border-b
border-black/10
"
>


{/* TITLE */}

<h2

className={`
${bricolage.className}

text-[15vw]

font-extrabold

tracking-[-0.09em]

leading-none

text-black
`}
>

WORK

</h2>







{/* GRID */}
<div

className="
mt-20

max-w-7xl

mx-auto


grid

grid-cols-1
lg:grid-cols-2

gap-8

h-[750px]
"
>





{/* LEFT STACK */}
<div

className="
grid

grid-rows-2

gap-8
"
>



{works.slice(0,2).map((item,index)=>(


<Card

key={index}

item={item}

/>


))}



</div>








{/* RIGHT BIG */}
<Card

item={works[2]}

big

/>





</div>


</section>

)

}








function Card({

item,
big=false

}:any){



return(

<div

className={`
group

relative

overflow-hidden

rounded-[45px]

bg-black

cursor-pointer

shadow-xl

${big ? "h-full" : ""}

`}
>





{/* MEDIA */}

{

item.type==="video"

?

<video

src={item.src}

autoPlay

muted

loop

playsInline


className="
absolute
inset-0

w-full
h-full

object-cover

transition-all
duration-700


group-hover:opacity-0

group-hover:scale-110
"
/>


:

<img

src={item.src}

className="
absolute
inset-0

w-full
h-full

object-cover

transition-all
duration-700

group-hover:opacity-0

group-hover:scale-110
"
/>

}







{/* HOVER CONTENT */}

<div

className="
absolute

inset-0

bg-black


flex

flex-col

justify-between


p-10


opacity-0

group-hover:opacity-100


transition-all

duration-500
"
>




<div>


<h3

className={`
${bricolage.className}

text-4xl

md:text-6xl

font-semibold

tracking-[-0.05em]

text-white
`}
>

{item.title}

</h3>




<p

className="
mt-5

max-w-md

text-white/50

text-lg
"
>

{item.desc}

</p>


</div>







<a

href={item.link}


className="
flex

items-center

gap-2


text-white

text-lg

font-medium
"
>

View Project

<ArrowUpRight size={22}/>


</a>




</div>






</div>

)

}