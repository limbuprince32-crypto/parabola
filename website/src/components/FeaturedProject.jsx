import React from "react";

export default function FeaturedProject() {
  return (
    <section className="w-full bg-[#05070d] py-24 px-6">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-white tracking-tight mb-5">
          Featured Project
        </h2>
        <p className="text-lg text-slate-400">
          See how we've helped businesses transform their digital presence
        </p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto rounded-2xl bg-[#0b0f1a] border border-white/5 p-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Herman Modern Landscaping.
            </h3>
            <p className="text-slate-400 text-base max-w-xl">
              Professional landscaping services website with modern design and
              lead generation features
            </p>
          </div>
          <button className="shrink-0 rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 transition-colors shadow-lg shadow-blue-900/30">
            View Project
          </button>
        </div>

        {/* Preview panel */}
        <div className="rounded-xl bg-black h-[420px] flex flex-col items-center justify-center text-center px-6">
          <h4 className="text-3xl font-bold text-white mb-5">
            Professional Landscaping Services
          </h4>
          <p className="text-slate-300 text-lg mb-8 max-w-xl">
            Custom website design with service showcase, project gallery, and
            contact forms
          </p>
          <button className="rounded-lg px-8 py-4 font-semibold text-white bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 transition-colors shadow-lg shadow-blue-900/30">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}