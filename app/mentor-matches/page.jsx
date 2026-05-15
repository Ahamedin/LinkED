"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { matchMentors } from "@/actions/mentor-matching";
import mentors from "@/data/mentors";
import MentorCard from "@/components/ui/mentor-card";
import { Card, CardContent } from "@/components/ui/card";
import { BarLoader } from "react-spinners";

function MentorMatchesContent() {
  const searchParams = useSearchParams();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const studentData = JSON.parse(searchParams.get("data"));

  useEffect(() => {
    async function fetchMatches() {
      const res = await matchMentors(studentData);
      setResult(res);
      setLoading(false);
    }

    fetchMatches();
  }, []);

  if (loading) return <BarLoader width="100%" />;

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-10">

      {/* STUDENT SUMMARY */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Student Profile Summary
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground">
            {result.studentSummary}
          </p>
        </CardContent>
      </Card>

      {/* MATCHED MENTORS */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Recommended Mentors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {result.matches.map((match) => {
            const mentor = mentors.find(
              (m) => m.id === match.mentorId
            );

            return (
              <div key={mentor.id} className="space-y-4">
                <MentorCard mentor={mentor} />

                <Card>
                  <CardContent className="p-3 sm:p-4 space-y-2">
                    <p className="text-xs sm:text-sm">
                      <strong>Why this mentor?</strong>
                      <br />
                      {match.reason}
                    </p>

                    <p className="text-xs sm:text-sm font-semibold text-green-600">
                      Match Score: {match.matchScore}%
                    </p>

                    <div>
                      <strong className="text-xs sm:text-sm">Career Suggestions:</strong>

                      <ul className="list-disc list-inside text-xs sm:text-sm mt-1">
                        {match.careerSuggestions.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function MentorMatchesPage() {
  return (
    <Suspense fallback={<BarLoader width="100%" />}>
      <MentorMatchesContent />
    </Suspense>
  );
}