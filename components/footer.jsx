import Link from "next/link";
import { Github, Globe, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left — branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase">
            LinkED — AI Career Coach
          </p>
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center — Made by */}
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-xs tracking-wide">Made by</span>
          <span className="text-white font-black text-sm tracking-tight">
            Iklash Ahamed
          </span>
          <span className="text-red-500 text-base leading-none">❤️</span>
        </div>

        {/* Right — links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ahamedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href="https://leetcode.com/u/IklashAhamed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Code2 className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;