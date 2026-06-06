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


// premium colors
const colors=[
"#8B5CF6",
"#6366F1",
"#06B6D4",
"#14B8A6",
"#F43F5E",
"#F59E0B"
];



function LivingGrid({active}:{active:boolean}){


const cells=Array.from({length:1800});


return(

<div
className="
absolute
inset-0
grid
grid-cols-[repeat(60,1fr)]
z-0
"
>


{cells.map((_,i)=>(


<motion.div

key={i}


animate={
active
?
{

backgroundColor:
colors[
Math.floor(Math.random()*colors.length)
],

boxShadow:[
"0px 0px 0px transparent",
"0px 0px 25px rgba(255,255,255,.9)",
"0px 0px 0px transparent"
],

scale:[
1,
1.35,
1
],

x:[
0,
Math.random()*8-4,
0
],

y:[
0,
Math.random()*8-4,
0
]

}

:

{
backgroundColor:"#f8fafc",
boxShadow:"0 0 0 transparent",
scale:1,
x:0,
y:0
}

}


transition={{
duration:1.2,
delay:Math.random()*0.8,
ease:"easeInOut"
}}


className="
border
border-slate-200/70
"
/>


))}


</div>

)

}







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




function moveButton(
e:React.MouseEvent<HTMLButtonElement>
){

const rect=e.currentTarget.getBoundingClientRect();


mouseX.set(
(e.clientX-rect.left-rect.width/2)*0.5
);


mouseY.set(
(e.clientY-rect.top-rect.height/2)*0.5
);

}



function activateSystem(){

setActive(true);

setTimeout(()=>{
setActive(false);
},3000)

}







return(

<>


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




<LivingGrid active={active}/>







<div
className="
absolute
top-[18%]
z-10
w-full
"
>



{/* LOGO */}
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

transition-all
duration-700


${
active
?
"text-white/30 backdrop-blur-xl drop-shadow-[0_10px_40px_rgba(255,255,255,.8)]"
:
"text-black"
}

`}
>


<span>m</span>



<span className="
animate-spin
[animation-duration:6s]
">
O
</span>



<span>t</span>


<span className="
animate-spin
[animation-duration:6s]
[animation-direction:reverse]
">
O
</span>



<span>mati</span>



<span className="relative">


<motion.button

style={{x,y}}

onMouseMove={moveButton}

onMouseLeave={()=>{
mouseX.set(0);
mouseY.set(0);
}}

onClick={activateSystem}


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

transition-all


${
active
?
"bg-white/20 backdrop-blur-xl shadow-[0_0_60px_white]"
:
"bg-black"
}

`}
>


<Power size={28}/>


</motion.button>




<span
className={
active
?
"text-white/50"
:
"text-black"
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

transition

${
active
?
"text-white"
:
"text-gray-600"
}
`}
>

Turn your automation ON.
Close deals while you sleep.

</p>



</div>









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


</section>



</>

)

}