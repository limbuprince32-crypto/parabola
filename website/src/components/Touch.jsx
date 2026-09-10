import { Mail, Phone, MapPin } from "lucide-react";

export default function GetInTouch() {
  const cards = [
    {
      icon: Mail,
      title: "Email Us",
      lines: ["Prince@Parabolallc.com"],
      link: true,
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["(345) 678-9123"],
      link: true,
    },
    {
      icon: MapPin,
      title: "Location",
      lines: ["567 Georgia Country Rd., Atlanta, AT", "46802"],
      link: false,
    },
  ];

  return (
    <section className="w-full bg-[#05070d] py-24 px-6">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-white tracking-tight mb-5">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-400">
          Ready to start your project? We're here to help bring your vision to
          life.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ icon: Icon, title, lines, link }) => (
          <div
            key={title}
            className="rounded-2xl bg-slate-950 border border-cyan-900 p-10 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <Icon size={26} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            {lines.map((line, i) =>
              link ? (
                <a
                  key={i}
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {line}
                </a>
              ) : (
                <p key={i} className="text-slate-300">
                  {line}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
}