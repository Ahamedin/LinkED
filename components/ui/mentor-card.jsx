import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MentorCard = ({ mentor }) => {
  const { professional_background } = mentor;

  return (
    <div className="bg-white border border-zinc-200 hover:border-black transition-colors duration-300 group flex flex-col h-full">
      <div className="overflow-hidden aspect-square">
        <Image
          src={mentor.profile_picture_url}
          alt={mentor.name}
          width={300}
          height={300}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="p-5 flex flex-col h-full">
        <div>
          <h3 className="text-base font-black tracking-tight text-zinc-900">
            {mentor.name}
          </h3>
          <p className="text-xs text-zinc-500 font-medium mt-0.5">
            {professional_background.current_position}{" "}
            <span className="text-zinc-300">@</span>{" "}
            {professional_background.organization}
          </p>
        </div>

        <p className="text-xs font-bold text-zinc-400 tracking-wider uppercase mt-3">
          {professional_background.years_of_experience}+ yrs experience
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {professional_background.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-[10px] font-bold px-2 py-0.5 border border-zinc-200 text-zinc-600 uppercase tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex-grow" />

        <Link href={`/mentors/${mentor.id}`} className="mt-3">
          <Button className="w-full bg-black text-white hover:bg-zinc-800 font-black rounded-none text-xs tracking-widest uppercase h-9">
            Visit Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MentorCard;