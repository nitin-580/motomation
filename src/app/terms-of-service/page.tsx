"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-black/50 text-lg">Last Updated: June 8, 2026</p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                1. Acceptance of Terms
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                By accessing our website, purchasing our services, or interacting with our custom software products, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
              <p>
                Motomation reserves the right to update or modify these terms at any time. Your continued use of the services following any updates represents your acceptance of the revised terms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                2. Scope of Services
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                Motomation provides software development, API integrations, custom web and mobile applications, business automation services, and AI agent implementations.
              </p>
              <p>
                The exact deliverables, milestones, timelines, and payment structures for individual client projects will be defined in a separate binding Statement of Work (SOW) or Master Services Agreement (MSA) signed by both parties.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                3. Intellectual Property Rights
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                All materials on our website, including design templates, graphics, code, and copy, are owned by Motomation and protected by copyright laws.
              </p>
              <p>
                For custom client projects: Unless otherwise specified in the signed contract, all custom software developed for a client will become the intellectual property of the client upon full receipt of payment. Motomation retains rights to pre-existing libraries, tooling, and general knowledge frameworks used in development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                4. Client Obligations
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                To complete projects successfully, clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate specifications, login credentials, and materials needed in a timely manner.</li>
                <li>Ensure all provided data or API endpoints do not violate third-party terms or laws.</li>
                <li>Make payments in accordance with agreed project milestones.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                5. Limitation of Liability
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                Motomation design workflows, custom integrations, and AI models to be as robust and error-free as possible. However, we do not guarantee uninterrupted or completely bug-free operations.
              </p>
              <p>
                Under no circumstances shall Motomation be liable for any indirect, incidental, or consequential damages (including loss of profits, data, or business opportunities) arising from the use or inability to use our systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                6. Governing Law
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                These Terms of Service and any project agreements shall be governed by and construed in accordance with the laws of Karnataka, India. Any legal actions or disputes shall be resolved exclusively within the courts of Bengaluru, India.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                7. Contact
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                If you have any questions or feedback regarding these terms, please contact our legal desk:
              </p>
              <p className="font-bold text-black">
                Email: legal@motomation.in
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
