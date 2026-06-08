"use client";

import { useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectScope: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", projectScope: "", details: "" });
    }, 1500);
  };

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
              Start a Project
            </h1>
            <p className="text-black/50 text-lg">Let’s turn your digital ideas and automation needs into reality.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8 text-black/60">
              <div>
                <h2 className="text-2xl font-bold tracking-[-0.05em] text-black mb-3">
                  Let's Chat
                </h2>
                <p className="text-sm leading-relaxed">
                  Have a system you want automated? Or a custom platform that needs building? Fill out the form or reach out directly, and we will get back to you within 24 hours.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">General Inquiry</h3>
                <a href="mailto:hello@motomation.in" className="text-sm text-black hover:opacity-50 transition">
                  hello@motomation.in
                </a>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Partnership & Careers</h3>
                <a href="mailto:partners@motomation.in" className="text-sm text-black hover:opacity-50 transition">
                  partners@motomation.in
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm text-center space-y-4"
                  >
                    <CheckCircle className="mx-auto text-emerald-500 w-16 h-16 animate-bounce" />
                    <h3 className="text-3xl font-bold tracking-[-0.05em] text-black">Inquiry Received!</h3>
                    <p className="text-black/60 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for reaching out to Motomation. Our systems architect will review your project scope and get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-black text-white rounded-full text-xs font-semibold hover:scale-105 transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">Corporate Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">Company Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">Project Scope</label>
                        <select
                          value={formData.projectScope}
                          onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                          className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black"
                        >
                          <option value="">Select Project Scope</option>
                          <option value="ai-agents">AI Agents & Workflows</option>
                          <option value="web-apps">Custom Web Application</option>
                          <option value="business-automation">Business Automation</option>
                          <option value="mobile-apps">Mobile App Development</option>
                          <option value="other">Other / Consultancy</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">Project Details</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-black resize-none"
                        placeholder="Tell us what you want to build or automate..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black text-white font-semibold rounded-xl text-sm hover:opacity-80 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Request</span>
                        </>
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
