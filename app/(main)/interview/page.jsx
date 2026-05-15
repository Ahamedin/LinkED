import React from 'react';
import { getAssessments } from "@/actions/interview";
import StatsCards from './_components/stats-cards';
import PerformanceChart from './_components/performance-chart';
import QuizList from './_components/quiz-list';

const InterviewPage = async () => {
  const assessments = await getAssessments();

  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <div className="container mx-auto px-6 md:px-10 py-8">

        <div className="border-b-2 border-black pb-4 mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-1">
            Practice
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-none uppercase">
            Interview<br />Preparation
          </h1>
        </div>

        <div className="space-y-6">
          <StatsCards assessments={assessments} />
          <PerformanceChart assessments={assessments} />
          <QuizList assessments={assessments} />
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;