import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">

        <div className="border-b-2 border-black pb-4 mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-1">
            Career Tools
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black leading-none uppercase">
            Resume<br />Builder
          </h1>
        </div>

        <ResumeBuilder initialContent={resume?.content} />
      </div>
    </div>
  );
}