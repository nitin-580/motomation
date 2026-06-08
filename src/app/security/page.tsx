"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Security() {
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
              Security Practices
            </h1>
            <p className="text-black/50 text-lg">Our commitment to protecting your digital operations.</p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Overview
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                At Motomation, we understand that our clients trust us with critical business processes, custom intellectual property, and proprietary data integrations. We take a security-first approach to designing, developing, and deploying custom automation workflows and applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Development Security
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-6 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-black mb-2">1. Code Isolation & Controls</h3>
                <p>
                  Each client project's source code is hosted on private, isolated Git repositories. We enforce access control policies, ensuring only engineers assigned to the project have access to its repositories and credentials.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">2. Secure Secret Management</h3>
                <p>
                  We do not hardcode API keys, secrets, or database credentials. We utilize encrypted environment variables, secret managers (such as Google Secret Manager or AWS Secrets Manager), and secure token handling protocols for all third-party service connections.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">3. Static Application Security Testing (SAST)</h3>
                <p>
                  Before code is merged and pushed to production environments, we run linters, dependency checkers, and security vulnerability scanners to identify and remediate potential security risks.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Infrastructure & Integrations
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>HTTPS & Transport Security:</strong> All data transmitted to and from our client systems is encrypted using HTTPS and TLS 1.3, safeguarding information against interception.
                </li>
                <li>
                  <strong>Least Privilege API Integration:</strong> When configuring integrations (like OpenAI API, Stripe, databases, or client CRMs), we strictly request and configure API keys with the minimum required permissions necessary to execute tasks.
                </li>
                <li>
                  <strong>Rate Limiting & DDOS Prevention:</strong> We configure rate limiting and Cloudflare protection on web portals and APIs to defend against brute force, scraping, and denial-of-service attacks.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Vulnerability Reporting
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                We appreciate the security community's work in keeping the internet safe. If you discover a potential vulnerability in our systems or projects, please report it to us responsibly.
              </p>
              <p className="font-bold text-black">
                Reporting Channel: security@motomation.in
              </p>
              <p>
                Please include details on how to reproduce the issue, and we will acknowledge and resolve verified reports as a matter of highest priority.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
