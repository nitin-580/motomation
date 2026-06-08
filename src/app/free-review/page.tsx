"use client";

import { useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function FreeReview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    scope: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request to lead capture pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", website: "", scope: "", details: "" });
    }, 1500);
  };

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-black ${bricolage.className} flex flex-col`}>
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 md:px-24 max-w-[1300px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="border-b border-black/10 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Optimize Your Workflows</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.08em] leading-none mt-2 mb-6">
              Get a Free Review
            </h1>
            <p className="text-black/50 text-lg max-w-2xl">
              Let us analyze your manual workflows and design a custom AI agent and software automation blueprint for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Column (Left) */}
            <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-[-0.05em] text-black">
                  What is inside your free audit?
                </h2>
                <p className="text-sm text-black/60 leading-relaxed">
                  We look at your current manual tasks, spreadsheets, sales pipeline, or customer service logs and design a high-fidelity automation solution.
                </p>
              </div>

              {/* Value Props */}
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-4">
                  <h3 className="font-bold text-black text-base">Workflow Bottlenecks Identified</h3>
                  <p className="text-xs text-black/50 mt-1 leading-relaxed">
                    We highlight the exact admin tasks, manual syncs, and data entry routines costing you the most hours.
                  </p>
                </div>

                <div className="border-l-2 border-black pl-4">
                  <h3 className="font-bold text-black text-base">AI Agent Mapping</h3>
                  <p className="text-xs text-black/50 mt-1 leading-relaxed">
                    We outline exactly where autonomous AI agents can handle customer tickets, schedule meetings, or enrich sales leads.
                  </p>
                </div>

                <div className="border-l-2 border-black pl-4">
                  <h3 className="font-bold text-black text-base">Tailored Blueprint & Costing</h3>
                  <p className="text-xs text-black/50 mt-1 leading-relaxed">
                    You receive a detailed architecture blueprint with exact timelines, tooling recommendations, and ROI estimations.
                  </p>
                </div>

                <div className="border-l-2 border-black pl-4">
                  <h3 className="font-bold text-black text-base">No Strings Attached</h3>
                  <p className="text-xs text-black/50 mt-1 leading-relaxed">
                    100% free review. Use our blueprint to build it yourself, or hire us to construct and launch it for you.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5">
                <p className="text-xs text-black/40">
                  Questions? Drop us an email at <a href="mailto:hello@motomation.in" className="text-black hover:opacity-50 transition underline font-medium">hello@motomation.in</a>
                </p>
              </div>
            </div>

            {/* Form Column (Right) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-black/10 shadow-sm text-center space-y-6"
                  >
                    <div className="space-y-3">
                      <h3 className="text-3xl font-extrabold tracking-[-0.05em] text-black">Review Requested</h3>
                      <p className="text-black/60 max-w-md mx-auto text-sm leading-relaxed">
                        Thank you for your submission. Our systems architect will review your company details and manual workflows to prepare your free custom blueprint within 24 hours.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Link
                        href="/"
                        className="inline-flex items-center px-8 py-3.5 bg-black hover:bg-slate-900 text-white rounded-full text-sm font-semibold hover:scale-102 transition duration-300 cursor-pointer"
                      >
                        Return to Homepage
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 md:p-10 border border-black/10 shadow-sm space-y-6"
                  >
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold tracking-[-0.05em]">Business & Workflow Profile</h2>
                      <p className="text-xs text-black/50">Please fill out the fields below to help us analyze your setup.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black transition-all duration-300 placeholder-slate-400"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Business Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black transition-all duration-300 placeholder-slate-400"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Website */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Company Website / Name</label>
                        <input
                          type="text"
                          required
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black transition-all duration-300 placeholder-slate-400"
                          placeholder="company.com"
                        />
                      </div>

                      {/* Focus Area */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Focus Area</label>
                        <select
                          required
                          value={formData.scope}
                          onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black transition-all duration-300 cursor-pointer"
                        >
                          <option value="" disabled>Select primary challenge</option>
                          <option value="customer-support">Customer Support (AI Agents)</option>
                          <option value="lead-gen">Sales & Lead Generation</option>
                          <option value="data-entry">Data Entry & Sync Automation</option>
                          <option value="custom-app">Custom Web/App Tools</option>
                          <option value="consultancy">General Tech Review</option>
                        </select>
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">What manual task or workflow takes the most time?</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black transition-all duration-300 resize-none placeholder-slate-400"
                        placeholder="Describe what takes too much time or what tools you need synced (e.g. 'Manually sending client updates' or 'Copying lead data to our CRM')..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black hover:bg-slate-900 text-white font-semibold rounded-xl text-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span>Request Free Review</span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
