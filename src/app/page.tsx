"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { CATEGORY_META, CATEGORY_ORDER } from "@/lib/types";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
      <span className="rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
        AI Readiness Assessment
      </span>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Test What You Really Know.
        <br className="hidden sm:block" /> Not What You Think You Know.
      </h1>

      <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
        A scenario-based assessment of your real AI knowledge, critical thinking, prompting skill, practical
        application, responsible use, and problem-solving &mdash; not just how confident you feel.
      </p>

      <div className="mt-10 w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">You will be assessed on</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CATEGORY_ORDER.map((category) => (
            <li key={category} className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              {CATEGORY_META[category].label}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 text-sm text-slate-500 sm:grid-cols-2">
  <div>
    <span className="font-semibold text-slate-700">Assessment:</span> 36 questions per attempt, drawn from a bank of 72
  </div>

  <div>
    <span className="font-semibold text-slate-700">Estimated time:</span> 15&ndash;20 minutes
  </div>
</div>
      </div>

      <Button
  className="mt-10 px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg"
  onClick={() => router.push("/assessment")}
>
        Start Assessment
      </Button>
    </div>
  );
}
