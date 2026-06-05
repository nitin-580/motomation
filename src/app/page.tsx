"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import VideoReveal from "@/components/VideoReveal";
import Companies from "@/components/MovingCompanies";

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
      <Companies />
      <Footer />
    </>
  );
}