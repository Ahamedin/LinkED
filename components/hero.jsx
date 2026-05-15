"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-20 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-10 bg-[#F8F6F1]">
      <div className="space-y-6 sm:space-y-8 text-center px-4">

        {/* Eyebrow label */}
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 border border-zinc-300 px-3 sm:px-4 py-1.5">
          AI-Powered Career Platform
        </span>

        <div className="space-y-4 sm:space-y-5 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black gradient-title tracking-tighter leading-none">
            From Student to Job-Ready
            <br />
            With the Right Mentor
          </h1>
          <p className="mx-auto max-w-[560px] text-sm sm:text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
            Every student needs guidance before stepping into their career.
            We connect learners with expert mentors and AI-driven tools to
            prepare, practice, and succeed in the job market.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3">
          <Link href="/find-mentor" className="flex-1 sm:flex-none">
            <Button
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 h-10 sm:h-11 bg-black text-white hover:bg-zinc-800 font-bold rounded-none text-xs sm:text-sm tracking-tight"
            >
              Find Your Mentor
            </Button>
          </Link>

          <Link href="/mentors" className="flex-1 sm:flex-none">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 h-10 sm:h-11 border-zinc-900 text-zinc-900 hover:bg-zinc-100 font-bold rounded-none text-xs sm:text-sm tracking-tight"
            >
              Mentors Profile
            </Button>
          </Link>

          <Link href="/booked-mentors" className="flex-1 sm:flex-none">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 h-10 sm:h-11 border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-bold rounded-none text-xs sm:text-sm tracking-tight"
            >
              Booked Mentors
            </Button>
          </Link>
        </div>

        {/* Hero image */}
        <div className="hero-image-wrapper mt-4 sm:mt-6 md:mt-8">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/linkEDBanner.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-none shadow-2xl border border-zinc-200 mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;