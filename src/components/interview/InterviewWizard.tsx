"use client";

import { useState } from "react";

type InterviewFormData = {
  heroName: string;
  age: string;
  hobby: string;
  artStyle: string;
};

const artStyleOptions = [
  "Watercolor",
  "3D Cartoon",
  "Anime",
  "Indian Folk Art",
] as const;

export function InterviewWizard() {
  // We store which screen is active (1, 2, or 3).
  const [step, setStep] = useState(1);

  // We store all form answers in one place so it is easy to submit later.
  const [formData, setFormData] = useState<InterviewFormData>({
    heroName: "",
    age: "",
    hobby: "",
    artStyle: "",
  });

  const updateField = (field: keyof InterviewFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const isStepOneValid = formData.heroName.trim().length > 0;
  const isStepTwoValid = Number(formData.age) > 0;
  const isStepThreeValid =
    formData.hobby.trim().length > 0 && formData.artStyle.trim().length > 0;

  return (
    <section className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-2xl">
          Interview Wizard
        </h2>
        <p className="text-sm font-medium text-slate-600">Step {step} of 3</p>
      </div>

      {/* Step indicators help users understand progress quickly. */}
      <div className="mb-6 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`h-2 rounded-full ${
              item <= step ? "bg-[#003366]" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Hero Name</span>
            <input
              type="text"
              value={formData.heroName}
              onChange={(event) => updateField("heroName", event.target.value)}
              placeholder="Example: Aarav"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-[#003366] focus:ring-2"
            />
          </label>

          <button
            type="button"
            onClick={nextStep}
            disabled={!isStepOneValid}
            className="w-full rounded-xl bg-[#003366] px-4 py-2.5 text-sm font-medium text-white transition enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Age</span>
            <input
              type="number"
              value={formData.age}
              onChange={(event) => updateField("age", event.target.value)}
              placeholder="Example: 8"
              min={1}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-[#003366] focus:ring-2"
            />
          </label>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={previousStep}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepTwoValid}
              className="w-full rounded-xl bg-[#003366] px-4 py-2.5 text-sm font-medium text-white transition enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Hobby</span>
            <input
              type="text"
              value={formData.hobby}
              onChange={(event) => updateField("hobby", event.target.value)}
              placeholder="Example: Cricket"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-[#003366] focus:ring-2"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Art Style</span>
            <select
              value={formData.artStyle}
              onChange={(event) => updateField("artStyle", event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-[#003366] focus:ring-2"
            >
              <option value="">Choose a style</option>
              {artStyleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={previousStep}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Back
            </button>
            <button
              type="button"
              disabled={!isStepThreeValid}
              className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition enabled:hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Save Interview
            </button>
          </div>
        </div>
      )}

      {/* Live preview helps parents quickly verify they entered correct details. */}
      <div className="mt-6 rounded-xl bg-slate-100 p-3 text-xs text-slate-700 sm:text-sm">
        <p>
          <strong>Preview:</strong> {formData.heroName || "Hero"} ({formData.age || "?"}
          ) loves {formData.hobby || "..."} in {formData.artStyle || "..."} style.
        </p>
      </div>
    </section>
  );
}
