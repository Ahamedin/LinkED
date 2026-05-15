import React from 'react'

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";

export default function MockInterviewPage() {
  return (
    <div className="container mx-auto space-y-4 py-4 sm:py-6 px-2 sm:px-0">
      <div className="flex flex-col space-y-2">
        <Link href="/interview">
          <Button variant="link" className="gap-2 pl-0 text-xs sm:text-sm">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-title">Mock Interview</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            Test your knowledge with industry-specific questions
          </p>
        </div>
      </div>

      <Quiz />
    </div>
  );
}