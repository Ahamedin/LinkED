"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import mentors from "@/data/mentors";
import { Button } from "@/components/ui/button";
import { getBookedMentorIds } from "@/lib/bookings";

const BookedMentorsSection = () => {
  const [bookedIds, setBookedIds] = useState([]);

  useEffect(() => {
    const syncBookings = () => setBookedIds(getBookedMentorIds());
    syncBookings();
    window.addEventListener("storage", syncBookings);
    window.addEventListener("bookings-updated", syncBookings);
    return () => {
      window.removeEventListener("storage", syncBookings);
      window.removeEventListener("bookings-updated", syncBookings);
    };
  }, []);

  const bookedMentors = useMemo(() => {
    const idSet = new Set(bookedIds);
    return mentors.filter((mentor) => idSet.has(mentor.id));
  }, [bookedIds]);

  if (bookedMentors.length === 0) {
    return (
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-3xl">
          <div className="border-b-2 border-black pb-4 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase leading-none">
              Booked<br />Mentors
            </h2>
          </div>
          <div className="bg-white border border-zinc-200 p-6 sm:p-10 text-center">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 mb-3">Empty</p>
            <p className="text-zinc-700 font-medium text-sm leading-relaxed">
              You haven't booked a mentor yet.
            </p>
            <p className="text-zinc-500 text-sm mt-1">
              Visit mentor profiles to book one.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-[#F8F6F1]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-5xl">

        <div className="border-b-2 border-black pb-4 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase leading-none">
            Booked<br />Mentors
          </h2>
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-400">
            {bookedMentors.length} booked
          </p>
        </div>

        <div className="grid gap-px bg-black border border-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bookedMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white p-6 flex flex-col gap-4 hover:bg-zinc-50 transition-colors group"
            >
              <div>
                <p className="font-black text-zinc-900 text-base tracking-tight">{mentor.name}</p>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  {mentor.professional_background.current_position}
                </p>
              </div>
              <Link href={`/mentors/${mentor.id}`} className="mt-auto">
                <Button
                  size="sm"
                  className="bg-black text-white hover:bg-zinc-800 font-black rounded-none text-xs tracking-widest uppercase w-full"
                >
                  View Profile
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookedMentorsSection;