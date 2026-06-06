"use client";

import { useState, useRef } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { Power } from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"],
});


export default function Hero(){


const [active,setActive]=useState(false);

const ref=useRef(null);



const {scrollYProgress}=useScroll({
target:ref,
offset:["start start","end end"]
});



const width=useTransform(
scrollYProgress,
[0,1],
["65vw","100vw"]
);


const height=useTransform(
scrollYProgress,
[0,1],
["42vh","100vh"]
);


const radius=useTransform(
scrollYProgress,
[0,1],
["40px","0px"]
);



// magnetic button

const mouseX=useMotionValue(0);
const mouseY=useMotionValue(0);


const x=useSpring(mouseX,{
stiffness:180,
damping:12
});


const y=useSpring(mouseY,{
stiffness:180,
damping:12
});



const moveButton=(
e:React.MouseEvent<HTMLButtonElement>
)=>{


const rect=
e.currentTarget.getBoundingClientRect();


mouseX.set(
(e.clientX-rect.left-rect.width/2)*0.5
);


mouseY.set(
(e.clientY-rect.top-rect.height/2)*0.5
);

};


const resetButton=()=>{
mouseX.set(0);
mouseY.set(0);
};





return(

<>


{/* HERO + VIDEO */}
<section
ref={ref}
className="
relative
h-[220vh]
bg-[#f8fafc]
"
>



<div
className="
sticky
top-0
h-screen
overflow-hidden

flex
items-center
justify-center
"
>



{/* grid */}
<div
className="
absolute
inset-0

bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]

bg-[size:20px_30px]
"
/>






{/* LOGO CONTENT */}
<div
className="
absolute
top-[18%]
z-10
w-full
"
>


<h1

className={`
${bricolage.className}

text-[15vw]

font-extrabold

tracking-[-0.09em]

leading-none

flex
justify-center
items-center

select-none
text-black
`}
>


<span>m</span>


<span
className="
animate-spin
[animation-duration:6s]
"
>
O
</span>



<span>t</span>


<span
className="
animate-spin
[animation-duration:6s]
[animation-direction:reverse]
"
>
O
</span>



<span>mati</span>



<span className="relative">


<motion.button

style={{
x,
y
}}

onMouseMove={moveButton}

onMouseLeave={resetButton}

onClick={()=>setActive(!active)}


className={`
absolute

-top-14

left-1/2

-translate-x-1/2


w-14
h-14


rounded-full


flex
items-center
justify-center


text-white

shadow-xl


${active?"bg-red-900":"bg-black"}

`}

>

<Power size={28}/>

</motion.button>



<span
className={
active
?
"text-red-700 transition"
:
"text-black transition"
}
>

on

</span>


</span>



</h1>






<p

className={`
${bricolage.className}

mt-8

text-center

text-xl

text-gray-600
`}
>

Turn your automation ON.
Close deals while you sleep.

</p>



</div>







{/* VIDEO */}
<motion.div

style={{
width,
height,
borderRadius:radius
}}


className="
absolute

bottom-[-150px]

z-20

overflow-hidden

bg-black

shadow-2xl
"
>


<video

src="/demo.mp4"

autoPlay

muted

loop

playsInline

className="
w-full
h-full

object-cover
"

/>



</motion.div>



</div>



</section>









{/* TEXT SECTION AFTER VIDEO */}
<section

className="
min-h-screen

bg-[#f8fafc]

flex

items-center

px-8

md:px-24
"
>



<div>


<h2

className={`
${bricolage.className}

text-5xl

md:text-8xl

font-normal

tracking-[-0.06em]

leading-[0.95]

text-black
`}
>


We design automations
<br/>

that move businesses
<br/>

without moving people.


</h2>






<p

className="
mt-10

max-w-2xl

text-xl

leading-relaxed

text-black/50
"
>

</p>



</div>


</section>


</>

)

}