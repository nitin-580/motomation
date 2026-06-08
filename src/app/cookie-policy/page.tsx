"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>
            <p className="text-black/50 text-lg">Last Updated: June 8, 2026</p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                About Cookies
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                Cookies are small text files stored on your browser or device by web servers when you visit websites. They help websites remember information about your visit, like your preferences, login states, and user sessions.
              </p>
              <p>
                At Motomation, we use cookies to provide a personalized user experience, optimize our website performance, and analyze site metrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                How We Use Cookies
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-6 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-black mb-2">1. Essential Cookies</h3>
                <p>
                  These cookies are required for the basic functionality of our website. They enable security measures, protect user sessions, and store basic preferences like dark mode settings or loader preferences.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">2. Analytical & Performance Cookies</h3>
                <p>
                  We use third-party analytics cookies (such as Google Analytics or Vercel Analytics) to track and report user interactions on our site. This helps us understand what pages are popular, analyze how visitors move around the site, and improve usability.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">3. Functionality Cookies</h3>
                <p>
                  These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your choices (e.g. details filled in contact/inquiry forms).
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Managing Your Choices
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                You have the right to decide whether to accept or reject cookies. You can configure your browser to accept cookies, notify you when a cookie is issued, or refuse cookies at any time.
              </p>
              <p>
                Please note that if you choose to reject or disable cookies, some portions of our website or custom automation portals may function with reduced capabilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                Contact Us
              </h2>
            </div>
            <div className="md:col-span-2 text-black/60 space-y-4 text-base leading-relaxed">
              <p>
                If you have questions about our Cookie Policy or how we handle site metrics, please send us an email at:
              </p>
              <p className="font-bold text-black">
                Email: privacy@motomation.in
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
