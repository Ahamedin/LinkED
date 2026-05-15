"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import mentors from "../../../data/mentors";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  addBookedMentor,
  isMentorBooked,
  removeBookedMentor,
} from "@/lib/bookings";

const MentorProfilePage = () => {
  const params = useParams();
  const mentorId = Number(params?.id);
  const mentor = mentors.find((m) => m.id === mentorId);

  const [showForm, setShowForm] = useState(false);
  const [bookingData, setBookingData] = useState({ name: "", education: "", contact: "" });
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!Number.isNaN(mentorId)) setBooked(isMentorBooked(mentorId));
  }, [mentorId]);

  if (!mentor) {
    return (
      <p className="pt-32 text-center text-zinc-600 font-medium">Mentor not found</p>
    );
  }

  const handleChange = (field, value) =>
    setBookingData((prev) => ({ ...prev, [field]: value }));

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    addBookedMentor(mentorId);
    window.dispatchEvent(new Event("bookings-updated"));
    setBooked(true);
    toast.success("Mentor booked successfully 🎉");
    setShowForm(false);
    setBookingData({ name: "", education: "", contact: "" });
  };

  const handleCancelBooking = () => {
    removeBookedMentor(mentorId);
    window.dispatchEvent(new Event("bookings-updated"));
    setBooked(false);
    toast.success("Booking cancelled");
  };

  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <section className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-0">

        {/* ===== HEADER ===== */}
        <div className="bg-white border border-zinc-200 p-4 sm:p-8 mb-px">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
            <Image
              src={mentor.profile_picture_url}
              alt={mentor.name}
              width={120}
              height={120}
              className="rounded-none border border-zinc-200 flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
            />
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-black leading-none">
                  {mentor.name}
                </h1>
                {mentor.metadata?.public_figure && (
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-black text-white px-2 sm:px-3 py-1">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-zinc-700 font-semibold">
                {mentor.professional_background.current_position}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500">
                {mentor.professional_background.organization}
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-400 font-medium tracking-wide">
                {mentor.location} · {mentor.gender}
              </p>
              <div className="pt-2">
                {booked ? (
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 font-black rounded-none text-xs sm:text-sm px-4 sm:px-6 h-8 sm:h-10 w-full sm:w-auto"
                    onClick={handleCancelBooking}
                  >
                    Cancel Booking
                  </Button>
                ) : (
                  <Button
                    className="bg-black text-white hover:bg-zinc-800 font-black rounded-none text-xs sm:text-sm px-4 sm:px-8 h-8 sm:h-10 w-full sm:w-auto"
                    onClick={() => setShowForm(true)}
                  >
                    Book This Mentor
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION HELPER ===== */}
        {[
          {
            title: "Professional Background",
            content: (
              <>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-4">
                  {mentor.professional_background.years_of_experience}+ years of experience across{" "}
                  {mentor.professional_background.industries.join(", ")}.
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.professional_background.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 sm:px-3 py-1 border border-zinc-300 text-zinc-700 bg-zinc-50">
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            ),
          },
          {
            title: "Mentorship Details",
            content: (
              <div className="space-y-2">
                {[
                  { label: "Expertise", value: mentor.mentorship_details.areas_of_expertise.join(", ") },
                  { label: "Mode", value: mentor.mentorship_details.preferred_mentorship_mode },
                  { label: "Languages", value: mentor.mentorship_details.languages.join(", ") },
                  { label: "Style", value: mentor.mentorship_details.mentorship_style },
                  { label: "Availability", value: mentor.mentorship_details.availability.join(" · ") },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-0.5">
                    <p className="text-[10px] font-black tracking-widest uppercase text-zinc-400">{label}</p>
                    <p className="text-xs sm:text-sm text-zinc-800 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Education",
            content: (
              <div className="space-y-3">
                {mentor.education.map((edu, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 items-start border-b border-zinc-100 pb-3 last:border-0">
                    <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 mt-1 w-8 sm:w-10 shrink-0">
                      {edu.year}
                    </span>
                    <div>
                      <p className="font-black text-xs sm:text-sm text-zinc-900">{edu.degree}</p>
                      <p className="text-[10px] sm:text-xs text-zinc-500">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Testimonials & Rating",
            content: (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-black text-black">{mentor.social_proof.rating}</span>
                  <span className="text-zinc-400 font-medium text-sm">/ 5</span>
                </div>
                <div className="space-y-3">
                  {mentor.social_proof.testimonials.map((t, i) => (
                    <div key={i} className="pl-4 border-l-2 border-zinc-200">
                      <p className="text-sm text-zinc-700 italic leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            title: "Contact & Links",
            content: (
              <div className="space-y-2">
                {[
                  { label: "Email", value: mentor.contact.email },
                  { label: "Phone", value: mentor.contact.phone },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 w-14 mt-0.5 shrink-0">{label}</span>
                    <span className="text-zinc-800 font-medium">{value}</span>
                  </div>
                ))}
                <div className="flex gap-3 text-sm">
                  <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 w-14 mt-0.5 shrink-0">LinkedIn</span>
                  <a href={mentor.contact.linkedin_url} target="_blank" className="text-black font-bold underline underline-offset-2 hover:text-zinc-600">
                    View Profile →
                  </a>
                </div>
                {mentor.contact.website && (
                  <div className="flex gap-3 text-sm">
                    <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 w-14 mt-0.5 shrink-0">Website</span>
                    <a href={mentor.contact.website} target="_blank" className="text-black font-bold underline underline-offset-2 hover:text-zinc-600">
                      Visit Site →
                    </a>
                  </div>
                )}
              </div>
            ),
          },
        ].map(({ title, content }) => (
          <div key={title} className="bg-white border border-zinc-200 border-t-0 p-4 sm:p-8">
            <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-4">
              {title}
            </h2>
            {content}
          </div>
        ))}

        {/* ===== BOOKING MODAL ===== */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 py-8">
            <div className="bg-white w-full max-w-md">
              {/* Modal header */}
              <div className="border-b-2 border-black p-4 sm:p-6">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-1">Session</p>
                <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-black uppercase">
                  Book Mentor
                </h2>
              </div>

              <form onSubmit={handleBookingSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {[
                  { placeholder: "Your Full Name", field: "name" },
                  { placeholder: "Your Education", field: "education" },
                  { placeholder: "Contact Number", field: "contact" },
                ].map(({ placeholder, field }) => (
                  <Input
                    key={field}
                    placeholder={placeholder}
                    value={bookingData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    required
                  />
                ))}

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-black text-white hover:bg-zinc-800 font-black rounded-none text-sm"
                  >
                    Confirm Booking
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-bold rounded-none text-sm"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MentorProfilePage;