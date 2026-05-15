"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/use-fetch";
import { onboardingSchema } from "@/app/lib/schema";
import { updateUser } from "@/actions/user";
import { industries as industriesData } from "@/data/industries";

const OnboardingForm = ({ industries = industriesData }) => {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = async (values) => {
    try {
      const formattedIndustry = `${values.industry}-${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;
      await updateUserFn({ ...values, industry: formattedIndustry });
    } catch (error) {
      console.error("Onboarding error:", error);
    }
  };

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile completed successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading]);

  const watchIndustry = watch("industry");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F6F1] px-4 py-8">
      <div className="w-full max-w-lg">

        {/* Editorial header above card */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
            Getting Started
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black leading-none uppercase">
            Complete Your<br />Profile
          </h1>
        </div>

        <div className="bg-white border border-zinc-200 p-6 sm:p-8">
          <p className="text-xs sm:text-sm text-zinc-600 mb-6 sm:mb-8 leading-relaxed">
            Select your industry to get personalized career insights and recommendations.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Industry */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-xs font-black tracking-widest uppercase text-zinc-500">
                Industry
              </Label>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(industries.find((ind) => ind.id === value));
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    {industries.map((ind) => (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-xs text-red-600 font-semibold">{errors.industry.message}</p>
              )}
            </div>

            {/* Specialization */}
            {watchIndustry && (
              <div className="space-y-2">
                <Label htmlFor="subIndustry" className="text-xs font-black tracking-widest uppercase text-zinc-500">
                  Specialization
                </Label>
                <Select onValueChange={(value) => setValue("subIndustry", value)}>
                  <SelectTrigger id="subIndustry">
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Specializations</SelectLabel>
                      {selectedIndustry?.subIndustries.map((sub) => (
                        <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.subIndustry && (
                  <p className="text-xs text-red-600 font-semibold">{errors.subIndustry.message}</p>
                )}
              </div>
            )}

            {/* Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-xs font-black tracking-widest uppercase text-zinc-500">
                Years of Experience
              </Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                {...register("experience")}
              />
              {errors.experience && (
                <p className="text-xs text-red-600 font-semibold">{errors.experience.message}</p>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-xs font-black tracking-widest uppercase text-zinc-500">
                Skills
              </Label>
              <Input
                id="skills"
                placeholder="e.g., Python, JavaScript, Project Management"
                {...register("skills")}
              />
              <p className="text-xs text-zinc-500">Separate multiple skills with commas</p>
              {errors.skills && (
                <p className="text-xs text-red-600 font-semibold">{errors.skills.message}</p>
              )}
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-xs font-black tracking-widest uppercase text-zinc-500">
                Professional Bio
              </Label>
              <textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="flex h-32 w-full rounded-none border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 resize-none"
                {...register("bio")}
              />
              {errors.bio && (
                <p className="text-xs text-red-600 font-semibold">{errors.bio.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-black text-white hover:bg-zinc-800 font-black uppercase tracking-widest text-sm rounded-none"
              disabled={updateLoading}
            >
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;