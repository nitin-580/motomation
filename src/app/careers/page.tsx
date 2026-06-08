"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Careers() {
  return (
    <div className={`min-h-screen bg-[#f8fafc] text-black ${bricolage.className} flex flex-col`}>
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 md:px-24 max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="border-b border-black/10 pb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.08em] leading-none mb-6">
              Join Our Team
            </h1>
            <p className="text-black/50 text-lg">Build the automation systems and platforms of tomorrow.</p>
          </div>

          {/* Intro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Our Culture
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                At Motomation, we are a lean team of developers, designers, and systems architects who are obsessed with efficiency. We believe in building software that saves time, optimizes workflows, and delivers tangible value to startups and mid-market enterprises.
              </p>
              <p>
                We work remotely, iterate quickly, value clear asynchronous communication, and encourage extreme ownership in everything we do.
              </p>
            </div>
          </div>

          {/* Open Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Open Positions
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              {[
                {
                  title: "AI Integration & Workflow Engineer",
                  type: "Full-Time / Remote",
                  desc: "Design and build AI agent workflows using LLMs, LangChain, Make.com, n8n, and custom API connectors. Help client companies automate manual operations.",
                },
                {
                  title: "Full-Stack Developer (Next.js & Node.js)",
                  type: "Full-Time / Remote",
                  desc: "Develop scalable web applications and SaaS platforms. Must be highly proficient in Next.js, React, Tailwind CSS, TypeScript, and Express/PostgreSQL.",
                },
                {
                  title: "Product Designer (UI / UX)",
                  type: "Contract / Remote",
                  desc: "Create premium, minimalist, and highly intuitive interfaces for dashboard portals, mobile apps, and corporate websites. Proficient in Figma and motion design.",
                }
              ].map((role, i) => (
                <div key={i} className="border-b border-black/5 pb-6 last:border-none last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-black tracking-tight">{role.title}</h3>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">{role.type}</span>
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed mb-4">{role.desc}</p>
                  <button className="text-xs font-semibold text-black hover:opacity-50 transition">
                    View Details & Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                How to Apply
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                Don't see a role that fits but still want to build with us? We are always on the lookout for talented engineers, designers, and automation specialists.
              </p>
              <p>
                Send your resume, portfolio, or links to cool things you've built (GitHub/Dribbble/etc.) to:
              </p>
              <p className="font-bold text-black">
                Email: careers@motomation.in
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
