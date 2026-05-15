"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, Globe, Code2 } from "lucide-react";

// Only show the contact panel for this author
const CONTACT_AUTHOR = "Iklash Ahamed";

const TestimonialCards = ({ testimonials }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => {
        const isContactAuthor = testimonial.author === CONTACT_AUTHOR;
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border border-zinc-200 bg-white flex flex-col justify-between gap-0 ${
              index === 1 ? "md:-translate-y-4" : ""
            } hover:border-black transition-all duration-300 group`}
          >
            {/* Quote */}
            <div className="p-4 sm:p-6 md:p-8 flex-1">
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
                <span className="text-3xl sm:text-4xl font-black text-black leading-none mr-1">"</span>
                {testimonial.quote}
              </p>
            </div>

            {/* Author row */}
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
              <div
                className={`flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-zinc-100 group-hover:border-zinc-300 transition-colors ${
                  isContactAuthor ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  isContactAuthor &&
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <Image
                  width={40}
                  height={40}
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="rounded-full object-cover flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10"
                />
                <div className="flex-1 min-w-0">
                  <p className={`font-black text-xs sm:text-sm text-black ${isContactAuthor ? "hover:underline underline-offset-2" : ""}`}>
                    {testimonial.author}
                  </p>
                  <p className="text-[10px] sm:text-xs text-zinc-500 truncate">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>

                {/* Links toggle badge — only for Iklash */}
                {isContactAuthor && (
                  <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-400 border border-zinc-200 px-2 py-0.5 shrink-0 whitespace-nowrap">
                    {isOpen ? "Hide" : "Links"}
                  </span>
                )}
              </div>

              {/* Contact panel — only renders for Iklash */}
              {isContactAuthor && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 sm:max-h-56 md:max-h-40 opacity-100 mt-2 sm:mt-3 md:mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border border-zinc-100 bg-zinc-50 p-3 sm:p-4 space-y-2">
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-2 sm:mb-3">
                      Contact
                    </p>

                    <a
                      href={testimonial.contacts?.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-black transition-colors group/link"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-400 group-hover/link:text-black transition-colors shrink-0" />
                      <span className="truncate">
                        {testimonial.contacts?.github
                          ? testimonial.contacts.github.replace("https://", "")
                          : "GitHub — coming soon"}
                      </span>
                    </a>

                    <a
                      href={testimonial.contacts?.portfolio || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-black transition-colors group/link"
                    >
                      <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-400 group-hover/link:text-black transition-colors shrink-0" />
                      <span className="truncate">
                        {testimonial.contacts?.portfolio
                          ? testimonial.contacts.portfolio.replace("https://", "")
                          : "Portfolio — coming soon"}
                      </span>
                    </a>

                    <a
                      href={testimonial.contacts?.leetcode || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-black transition-colors group/link"
                    >
                      <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-400 group-hover/link:text-black transition-colors shrink-0" />
                      <span className="truncate">
                        {testimonial.contacts?.leetcode
                          ? testimonial.contacts.leetcode.replace("https://", "")
                          : "LeetCode — coming soon"}
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialCards;