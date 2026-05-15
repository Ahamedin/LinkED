import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-zinc-800 bg-black/95 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="-ml-2">
          <Image
            src={"/linked4bl-new.png"}
            alt="LinkED Logo"
            width={400}
            height={250}
            className="h-24 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="hidden md:inline-flex items-center gap-2 text-zinc-300 hover:text-white hover:bg-zinc-800 font-semibold text-sm rounded-none"
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button
                variant="ghost"
                className="md:hidden w-9 h-9 p-0 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-none"
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 bg-white text-black hover:bg-zinc-200 font-bold text-sm rounded-none px-4 h-9">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-zinc-900 border border-zinc-700 rounded-none shadow-xl p-1"
              >
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2 text-zinc-200 font-medium text-sm px-3 py-2 hover:bg-zinc-800 hover:text-white rounded-none">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2 text-zinc-200 font-medium text-sm px-3 py-2 hover:bg-zinc-800 hover:text-white rounded-none">
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2 text-zinc-200 font-medium text-sm px-3 py-2 hover:bg-zinc-800 hover:text-white rounded-none">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-white text-black hover:bg-zinc-200 font-bold rounded-none px-5 h-9 text-sm">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold text-zinc-900",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;