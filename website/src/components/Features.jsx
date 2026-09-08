import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "AI Integration",
    desc: "We combine technology, creativity, and intelligent thinking to transform ideas into powerful digital solutions built for the future",
    codeSnippet: `import { Innovation } from "parabola";

const future = build({
  ideas: true,
  technology: "smart",
  possibilities: "limitless",
});`,
    imagePosition: "left",
  },
  {
    title: "Innovative Technology",
    desc: "At ParaBola, innovation is more than adopting the latest technology—it’s about finding smarter ways to solve real-world problems. We combine modern technologies, creative thinking, and intelligent systems to build digital experiences that are faster, smarter, and ready for what’s next. From a simple idea to a fully developed solution, we turn possibilities into technology that creates lasting impact.",
    codeSnippet: `import { DigitalSolutions } from "parabola";

const solution = await parabola.create({
  innovation: true,
  performance: "optimized",
  futureReady: true,
});`,
    imagePosition: "right",
  },
  {
    title: "Ideas Into Impact",
    desc: "We believe technology should do more than look impressive — it should create real value. ParaBola combines innovative thinking, modern technology, and purposeful design to build solutions that help businesses move forward. We take complex challenges, turn them into clear opportunities, and build digital experiences designed for lasting impact.",
    codeSnippet: `import { Ideas, Technology, Impact } from "parabola";

const solution = build({
  ideas: "bold",
  technology: "smart",
  impact: "real"
});

future.create(solution);`,
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
            How We Bring 
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
             Ideas To Life
            </span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 
            sm:gap-12 ${
              feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
            }`}
            >
              {/*code section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-blue-500/20 
                  to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-300"
                  />
                  <div
                    className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 
                transition-all duration-300"
                  >
                    {/*ide interface */}
                    <div className=" bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 ml-2 ms:ml-4 text-xs sm:text-sm">
                          {feature.title}
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            borderRadius: "8px",
                            background: "transparent",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*text section*/}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-cnter lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
