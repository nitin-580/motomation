"use client";

import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets:["latin"],
  weight:["400","500","600","700","800"]
});


export default function Footer() {
  return (

    <footer
      className={`
      ${bricolage.className}

      bg-[#f8fafc]

      px-6
      pt-24
      pb-10

      text-black
      `}
    >


      <div
        className="
        max-w-7xl
        mx-auto
        "
      >



        {/* BIG BRAND */}
        <h1
          className="
          text-[12vw]

          font-extrabold

          tracking-[-0.09em]

          leading-none

          select-none
          "
        >

          MOTOMATION

        </h1>







        {/* LINKS */}
        <div
          className="
          mt-20

          grid

          grid-cols-2

          md:grid-cols-4

          gap-12

          border-t

          border-black/10

          pt-12
          "
        >



          {/* COMPANY */}
          <div>

            <h3 className="font-bold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-black/50">

              <li>About</li>
              <li>Work</li>
              <li>Careers</li>
              <li>Contact</li>

            </ul>

          </div>







          {/* PRODUCT */}
          <div>

            <h3 className="font-bold mb-5">
              Product
            </h3>


            <ul className="space-y-3 text-black/50">

              <li>Automation</li>
              <li>AI Agents</li>
              <li>Integrations</li>
              <li>Pricing</li>

            </ul>


          </div>








          {/* SOCIAL */}
          <div>

            <h3 className="font-bold mb-5">
              Social
            </h3>


            <ul className="space-y-3 text-black/50">

              <li>LinkedIn</li>
              <li>Twitter / X</li>
              <li>Instagram</li>
              <li>GitHub</li>

            </ul>


          </div>









          {/* LEGAL */}
          <div>

            <h3 className="font-bold mb-5">
              Legal
            </h3>


            <ul className="space-y-3 text-black/50">

              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Security</li>

            </ul>


          </div>



        </div>









        {/* BOTTOM */}
        <div
          className="
          mt-16

          pt-8

          border-t
          border-black/10


          flex

          flex-col

          md:flex-row

          justify-between

          gap-5


          text-sm

          text-black/40
          "
        >


          <p>
            © 2026 Motomation. All rights reserved.
          </p>


          <p>
            Built for creators, founders & teams.
          </p>



        </div>



      </div>



    </footer>

  );
}