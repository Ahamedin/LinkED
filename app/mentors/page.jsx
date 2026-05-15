"use client";

import mentors from "../../data/mentors";
import MentorCard from "../../components/ui/mentor-card";

const MentorsPage = () => {
  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">

        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b-2 border-black pb-4 mb-14 gap-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-none uppercase">
            Our<br />Mentors
          </h1>
          <p className="text-sm text-zinc-600 max-w-xs md:text-right leading-relaxed font-medium">
            Industry experts who have guided hundreds of professionals to success.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MentorsPage;