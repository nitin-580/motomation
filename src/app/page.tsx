"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import VideoReveal from "@/components/VideoReveal";
import Companies from "@/components/MovingCompanies";
import { Section } from "lucide-react";
import PatternSection from "@/components/Section";
import FAQ from "@/components/Faq";
import Services from "@/components/OurServices";
import Testimonials from "@/components/Testimonial";
import Process from "@/components/Process";
import ProblemSolution from "@/components/ProblemSolution";
import { Agent } from "http";
import Agents from "@/components/AIagent";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Hero />
      <FeatureCards />
      <ProblemSolution />
      <PatternSection />
      <Agents />
      <Companies />
      <Process />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}