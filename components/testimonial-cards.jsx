"use client";

import Image from "next/image";

const TestimonialCards = ({ testimonials }) => {
  const handleAuthorClick = (testimonial) => {
    alert(
      `Contact for ${testimonial.author}\n\n1. GitHub: ${testimonial.contacts?.github || "Paste your URL later"}\n2. Portfolio: ${testimonial.contacts?.portfolio || "Paste your URL later"}\n3. LeetCode: ${testimonial.contacts?.leetcode || "Paste your URL later"}`
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`border border-zinc-200 bg-white p-8 flex flex-col justify-between gap-8 ${
            index === 1 ? "md:-translate-y-4" : ""
          } hover:border-black transition-all duration-300 group`}
        >
          <p className="text-base text-zinc-800 leading-relaxed font-medium">
            <span className="text-4xl font-black text-black leading-none mr-1">"</span>
            {testimonial.quote}
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 group-hover:border-zinc-300 transition-colors">
            <Image
              width={40}
              height={40}
              src={testimonial.image}
              alt={testimonial.author}
              className="rounded-full object-cover"
            />
            <div>
              <button
                type="button"
                onClick={() => handleAuthorClick(testimonial)}
                className="font-black text-sm text-black hover:underline cursor-pointer text-left"
              >
                {testimonial.author}
              </button>
              <p className="text-xs text-zinc-500">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;