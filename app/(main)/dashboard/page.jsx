import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();

  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <div className="container mx-auto px-6 md:px-10 py-8">

        {/* Editorial section label */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-1">
            Overview
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-none uppercase">
            Industry<br />Insights
          </h1>
        </div>

        <DashboardView insights={insights} />
      </div>
    </div>
  );
}