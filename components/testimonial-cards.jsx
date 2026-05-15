"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, Globe, Code2 } from "lucide-react";

const TestimonialCards = ({ testimonials }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAuthorClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`border border-zinc-200 bg-white flex flex-col justify-between gap-0 ${
            index === 1 ? "md:-translate-y-4" : ""
          } hover:border-black transition-all duration-300 group`}
        >
          {/* Quote */}
          <div className="p-8 flex-1">
            <p className="text-base text-zinc-800 leading-relaxed font-medium">
              <span className="text-4xl font-black text-black leading-none mr-1">"</span>
              {testimonial.quote}
            </p>
          </div>

          {/* Author row */}
          <div className="px-8 pb-6">
            <div
              className="flex items-center gap-3 pt-4 border-t border-zinc-100 group-hover:border-zinc-300 transition-colors cursor-pointer"
              onClick={() => handleAuthorClick(index)}
            >
              <Image
                width={40}
                height={40}
                src={testimonial.image}
                alt={testimonial.author}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm text-black hover:underline underline-offset-2">
                  {testimonial.author}
                </p>
                <p className="text-xs text-zinc-500 truncate">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
              {/* Toggle hint */}
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 shrink-0">
                {openIndex === index ? "Hide" : "Links"}
              </span>
            </div>

            {/* Inline contact panel — slides open on click */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border border-zinc-100 bg-zinc-50 p-4 space-y-2">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-3">
                  Contact
                </p>

                {/* GitHub */}
                <a
                  href={testimonial.contacts?.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-700 hover:text-black transition-colors group/link"
                >
                  <Github className="h-4 w-4 text-zinc-400 group-hover/link:text-black transition-colors shrink-0" />
                  <span className="truncate">
                    {testimonial.contacts?.github
                      ? testimonial.contacts.github.replace("https://", "")
                      : "GitHub — coming soon"}
                  </span>
                </a>

                {/* Portfolio */}
                <a
                  href={testimonial.contacts?.portfolio || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-700 hover:text-black transition-colors group/link"
                >
                  <Globe className="h-4 w-4 text-zinc-400 group-hover/link:text-black transition-colors shrink-0" />
                  <span className="truncate">
                    {testimonial.contacts?.portfolio
                      ? testimonial.contacts.portfolio.replace("https://", "")
                      : "Portfolio — coming soon"}
                  </span>
                </a>

                {/* LeetCode */}
                <a
                  href={testimonial.contacts?.leetcode || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-700 hover:text-black transition-colors group/link"
                >
                  <Code2 className="h-4 w-4 text-zinc-400 group-hover/link:text-black transition-colors shrink-0" />
                  <span className="truncate">
                    {testimonial.contacts?.leetcode
                      ? testimonial.contacts.leetcode.replace("https://", "")
                      : "LeetCode — coming soon"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;