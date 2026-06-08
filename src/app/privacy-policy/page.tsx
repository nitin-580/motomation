"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-black/50 text-lg">Last Updated: June 8, 2026</p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Overview & Commitment
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                At Motomation, we build automation workflows, software systems, and AI agent integrations that help businesses run seamlessly. In doing so, we prioritize protecting your information and respect your privacy.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and share information when you visit our website, use our custom software solutions, or interact with our digital automation platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Information We Collect
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-6 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-black mb-2">1. Client & Partner Information</h3>
                <p>
                  When you initiate a project with us, we collect names, corporate email addresses, phone numbers, billing details, and company information necessary to perform our software development and automation services.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">2. Usage & Technical Data</h3>
                <p>
                  We gather details about user visits to our site, including IP addresses, browser types, device information, pages viewed, and referring URLs to optimize our interface and analyze traffic patterns.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">3. Automation & API Integration Data</h3>
                <p>
                  For clients using our AI systems and workflow automations, we process integration tokens, API payloads, and webhook logs solely to execute the workflows requested. We do not retain or store private credentials; all authentication is encrypted.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                How We Use Your Data
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                We use the information we collect to design, develop, deploy, and maintain custom business automations, AI integrations, and digital platforms. Additionally, data is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Communicate project milestones, technical support, and updates.</li>
                <li>Process invoices and execute commercial agreements.</li>
                <li>Optimize website performance and diagnose server-side issues.</li>
                <li>Verify identity and safeguard against unauthorized workflow triggers.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Data Storage & Security
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                We execute industry-standard security protocols to prevent unauthorized access, alteration, disclosure, or destruction of sensitive information. Project source codes are hosted on secure repositories with strict access controls, and API payloads are encrypted in transit via SSL/TLS.
              </p>
              <p>
                As part of our commitment to safety, database backups and configurations are protected under military-grade AES-256 encryption.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Sharing of Information
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                Motomation does not sell, lease, or trade user data. We only share information with third-party sub-processors (such as cloud hosting providers, databases, and third-party APIs like OpenAI, Anthropic, or Make) strictly to execute client-approved automation tasks.
              </p>
              <p>
                All third-party partners are vetted to ensure compliance with strict privacy and encryption agreements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Contact & Questions
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                If you have questions about this Privacy Policy or wish to request the deletion of any stored data, please get in touch with us at:
              </p>
              <p className="font-bold text-black">
                Email: privacy@motomation.in<br />
                Address: Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
