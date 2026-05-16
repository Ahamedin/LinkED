import React from "react";
import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCards from "@/components/testimonial-cards";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F8F6F1] min-h-screen font-sans">
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-[#F8F6F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">

          {/* Editorial header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b-2 border-black pb-4 mb-8 md:mb-16 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black leading-none uppercase">
              What We<br />Offer
            </h2>
            <p className="text-sm text-zinc-500 max-w-xs md:text-right leading-relaxed">
              A complete toolkit designed to give professionals an edge in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F8F6F1] p-6 sm:p-8 flex flex-col gap-5 hover:bg-black hover:text-white group transition-colors duration-300 cursor-default"
              >
                <div className="text-black group-hover:text-white transition-colors [&_svg]:stroke-current [&_svg]:fill-current">
                  {feature.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-zinc-400 block mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-black group-hover:text-white leading-snug mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-zinc-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-black py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-zinc-700">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <span className="text-5xl font-black text-white tracking-tighter leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b-2 border-black pb-4 mb-8 md:mb-16 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black leading-none uppercase">
              How It<br />Works
            </h2>
            <p className="text-sm text-zinc-500 max-w-xs md:text-right leading-relaxed">
              Four simple steps to transform your career trajectory.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 border border-zinc-200">
            {howItWorks.map((item, index) => (
              <div key={index} className="p-6 sm:p-8 flex flex-col gap-4 relative group hover:bg-zinc-50 transition-colors">
                <span className="text-[80px] font-black text-zinc-300 leading-none select-none absolute top-4 right-6 group-hover:text-zinc-200 transition-colors">
                  {index + 1}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center text-black mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-xl text-black tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-[#F8F6F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b-2 border-black pb-4 mb-8 md:mb-16 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black leading-none uppercase">
              Real<br />Stories
            </h2>
            <p className="text-sm text-zinc-500 max-w-xs md:text-right leading-relaxed">
              Professionals just like you, getting results.
            </p>
          </div>

          <TestimonialCards testimonials={testimonial} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl mx-auto">

            <div className="border-b-2 border-black pb-4 mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black leading-none uppercase">
                Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-zinc-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-black font-bold text-base hover:text-black hover:no-underline py-5 tracking-tight">
                    <span className="text-zinc-300 font-black mr-3 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-700 text-sm leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-36">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 sm:mb-6">
              Begin Today
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none uppercase mb-6 sm:mb-8">
              Ready to<br />
              <span className="text-zinc-400">Accelerate</span><br />
              Your Career?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-md mb-8 sm:mb-12 leading-relaxed">
              Join thousands of professionals who are advancing their careers with AI-powered guidance.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="h-12 sm:h-14 bg-white text-black hover:bg-zinc-100 font-black text-sm sm:text-base px-6 sm:px-10 rounded-none tracking-tight uppercase"
              >
                Start Your Journey <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}