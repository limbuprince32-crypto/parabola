import React from "react";
import paw from "../assets/paw.png";

export default function FeaturedProject() {
  return (
    <section className="w-full bg-[#05070d] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-white tracking-tight mb-5">
          Featured Project
        </h2>
        <p className="text-lg text-slate-400">
          See how we've helped businesses transform their digital presence
        </p>
      </div>
      <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-cyan-900 p-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">
             Pawcare Pet Services
            </h3>
            <p className="text-slate-400 text-base max-w-xl">
              Professional Pet care services website with modern design and
              lead generation features
            </p>
          </div>
          <button className="shrink-0 rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 transition-colors shadow-lg shadow-blue-900/30">
            View Project
          </button>
        </div>
<div className="relative rounded-xl h-[420px] overflow-hidden">
  <img
    src={paw}
    alt="Pawcare pet servies preview"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
    <h4 className="text-3xl font-bold text-white -mt-10 mb-15">
      Professional Pet Care Services.
    </h4>
    <p className="text-slate-300 tex-lg mt-9 mb-8 max-w-xl">
      Custom website design .
    </p>
    <button className="rounded-lg px-8 py-4 mt-10 font-semibold text-white bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 transition-colors shadow-lg shadow-blue-900/30">
      Learn More
    </button>
  </div>
</div>
      </div>
    </section>
  );
}