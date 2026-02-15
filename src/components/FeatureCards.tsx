"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Setup in minutes, not days",
    desc: "Quickly connect and start tracking products without complex configuration.",
  },
  {
    title: "Absolutely no training required.",
    desc: "Intuitive automation that works seamlessly without learning curves.",
  },
  {
    title: "Integrates with your workflow",
    desc: "Designed to blend into your existing system without disruption.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black max-w-3xl">
            Fast, Simple, and Seamlessly{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-purple-200 -rotate-1 rounded-md"></span>
              <span className="relative px-2">Integrated</span>
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white
                rounded-3xl
                p-10
                shadow-md
                border border-gray-100
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Fake UI Illustration Placeholder */}
              <div className="mb-8 h-36 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
              </div>

              <h3 className="text-xl font-bold text-black">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}