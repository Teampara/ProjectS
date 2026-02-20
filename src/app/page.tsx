import { InterviewWizard } from "../components/interview/InterviewWizard";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
          A Storybook : As unique as you
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Start by answering a few quick questions. We will use them to generate a
          personalized story and matching images.
        </p>
      </section>

      <InterviewWizard />
    </div>
  );
}
