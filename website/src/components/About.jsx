import React from "react";

const About = () => {
  return (
    <section 
    id='About-us'
    className="bg-[#020617] text-white py-24 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            About <span className="text-[#38bdf8]">ParaBola</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed">
            We build innovative digital solutions that turn ambitious ideas
            into powerful, scalable and meaningful technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Mission Card */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-700/60 bg-gradient-to-br from-[#111827] to-[#0f172a] p-8 sm:p-10 lg:p-12 shadow-2xl">

            <h3 className="text-3xl sm:text-4xl font-bold mb-8">
              Our Mission
            </h3>

            <div className="space-y-7 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">

              <p>
                At <span className="text-white font-semibold">ParaBola</span>,
                we believe technology should do more than simply exist —
                it should solve problems, create opportunities, and move
                businesses forward.
              </p>

              <p>
                We combine innovative thinking, modern technology, and
                purposeful design to create digital experiences that are
                powerful, intuitive, and built for the future.
              </p>

              <p>
                From websites and e-commerce platforms to custom software,
                enterprise solutions, and intelligent digital experiences,
                every solution we create is designed with one goal:
                <span className="text-white font-semibold">
                  {" "}turning ideas into real-world impact.
                </span>
              </p>

            </div>

            {/* Button */}
            <button
              className="
                mt-10
                px-7 py-3.5
                rounded-lg
                font-semibold
                text-base
                bg-gradient-to-r from-[#2563eb] to-[#38bdf8]
                hover:from-[#1d4ed8] hover:to-[#0ea5e9]
                transition-all duration-300
                shadow-lg shadow-blue-500/20
                hover:scale-[1.02]
              "
            >
              Work With Us →
            </button>
          </div>

          {/* Statistics */}
          <div className="flex flex-col gap-6">

            {/* Card 1 */}
            <div className="
              flex-1
              rounded-2xl
              border border-slate-700/60
              bg-[#0f172a]/80
              backdrop-blur-sm
              p-8
              flex flex-col
              items-center
              justify-center
              text-center
              transition-all duration-300
              hover:border-blue-400/50
              hover:-translate-y-1
            ">
              <div className="text-4xl sm:text-5xl font-bold text-[#38bdf8]">
                10+
              </div>

              <div className="mt-3 text-lg text-slate-300">
                Projects Completed
              </div>
            </div>

            {/* Card 2 */}
            <div className="
              flex-1
              rounded-2xl
              border border-slate-700/60
              bg-[#0f172a]/80
              backdrop-blur-sm
              p-8
              flex flex-col
              items-center
              justify-center
              text-center
              transition-all duration-300
              hover:border-blue-400/50
              hover:-translate-y-1
            ">
              <div className="text-4xl sm:text-5xl font-bold text-[#38bdf8]">
                100%
              </div>

              <div className="mt-3 text-lg text-slate-300">
                Client Satisfaction
              </div>
            </div>

            {/* Card 3 */}
            <div className="
              flex-1
              rounded-2xl
              border border-slate-700/60
              bg-[#0f172a]/80
              backdrop-blur-sm
              p-8
              flex flex-col
              items-center
              justify-center
              text-center
              transition-all duration-300
              hover:border-blue-400/50
              hover:-translate-y-1
            ">
              <div className="text-4xl sm:text-5xl font-bold text-[#38bdf8]">
                24/7
              </div>

              <div className="mt-3 text-lg text-slate-300">
                Support Available
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;