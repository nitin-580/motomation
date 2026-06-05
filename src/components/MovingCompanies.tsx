"use client";

import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


const companies = [
  {
    name: "Google",
    logo: "/google.png",
  },
  {
    name: "Microsoft",
    logo: "/microsoft.png",
  },
  {
    name: "Amazon",
    logo: "/amazon.png",
  },
  {
    name: "OpenAI",
    logo: "/openai.png",
  },
];


export default function Companies() {

return (

<section
className="
bg-[#f8fafc]
py-20
overflow-hidden
"
>


<p
className={`
${bricolage.className}

text-center

text-sm

tracking-widest

uppercase

text-black/40

mb-10
`}
>

Trusted by teams building the future

</p>





<div
className="
relative

mx-auto

w-[430px]

overflow-hidden


before:absolute
before:left-0
before:top-0
before:z-10
before:h-full
before:w-28
before:bg-gradient-to-r
before:from-[#f8fafc]
before:to-transparent


after:absolute
after:right-0
after:top-0
after:z-10
after:h-full
after:w-28
after:bg-gradient-to-l
after:from-[#f8fafc]
after:to-transparent
"
>


<div
className="
flex

gap-6

w-max

animate-scroll
"
>


{[...companies,...companies].map((company,index)=>(


<div

key={index}

className="
w-[190px]
h-[95px]

rounded-[28px]

bg-white/40

border
border-black/5

flex
flex-col

items-center
justify-center

shrink-0
"

>


<img

src={company.logo}

alt={company.name}

className="
h-8

object-contain

grayscale

opacity-30
"

/>



<span
className={`
${bricolage.className}

mt-3

text-sm

font-medium

text-black/35
`}
>

{company.name}

</span>


</div>


))}


</div>


</div>


</section>

)

}