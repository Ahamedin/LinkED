import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <div className="container mx-auto px-6 md:px-10 py-8">

        <div className="border-b-2 border-black pb-4 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-1">
              Career Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-none uppercase">
              My Cover<br />Letters
            </h1>
          </div>
          <Link href="/ai-cover-letter/new">
            <Button className="bg-black text-white hover:bg-zinc-800 font-black rounded-none text-xs tracking-widest uppercase px-6 h-10">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </Link>
        </div>

        <CoverLetterList coverLetters={coverLetters} />
      </div>
    </div>
  );
}