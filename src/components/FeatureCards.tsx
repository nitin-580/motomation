"use client";

import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


const works = [
  {
    title: "AI Automation",
    desc: "Custom AI workflows that save hundreds of hours.",
    type: "video",
    src: "/work1.mp4",
  },

  {
    title: "SaaS Platform",
    desc: "Full stack scalable web applications.",
    type: "image",
    src: "/work2.png",
  },

  {
    title: "Growth Systems",
    desc: "Automated sales and marketing engines.",
    type: "image",
    src: "/work3.png",
  },
];



export default function Work() {


return (

<section
className="
min-h-screen
bg-[#f8fafc]
px-6
py-28
overflow-hidden
"
>


{/* TITLE */}
<h2
className={`
${bricolage.className}

text-center

text-[15vw]

font-extrabold

tracking-[-0.09em]

leading-none

text-black
`}
>

WORK

</h2>







{/* WORK CARDS */}
<div
className="
relative

mt-24

h-[850px]

max-w-7xl

mx-auto
"
>


{works.map((item,index)=>(


<div

key={index}


className={`
group

absolute

overflow-hidden

rounded-[45px]

bg-black

shadow-2xl

cursor-pointer


transition-all

duration-700


hover:scale-105



${
index===0 &&
`
left-0
top-32

w-[34%]

aspect-square

rotate-[-6deg]

hover:rotate-0
`
}


${
index===1 &&
`
left-1/2

-top-5

-translate-x-1/2

w-[42%]

aspect-square

z-20
`
}


${
index===2 &&
`
right-0

top-52

w-[34%]

aspect-square

rotate-[6deg]

hover:rotate-0
`
}


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

group-hover:scale-125
"

/>


:

<img

src={item.src}

alt={item.title}

className="
absolute

inset-0

w-full

h-full

object-cover


transition-all

duration-700


group-hover:opacity-0

group-hover:scale-125
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

items-center

justify-center


text-center


px-10


opacity-0


group-hover:opacity-100


transition-all

duration-700
"
>



<h3

className={`
${bricolage.className}

text-5xl

font-bold

text-white
`}

>

{item.title}

</h3>





<p

className="
mt-5

text-xl

text-white/60

max-w-md
"

>

{item.desc}

</p>



</div>



</div>


))}



</div>



</section>

)

}