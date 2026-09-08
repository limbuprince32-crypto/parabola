import { ArrowRight } from "lucide-react";

export default function ReadyToGetStarted() {
  const cards = [
    {
      title: "Build with us",
      image:
        "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
      body: [
        <>
          <strong>You</strong> need to move faster. <strong>You</strong> have
          napkin sketches that need to be fleshed out and realized. You need
          to reinvent your business to compete.
        </>,
        <>
          <strong>
            We bring startup speed and agility, and enterprise quality and
            scale. We'd love to learn and share more.
          </strong>
        </>,
      ],
      cta: "Get Started",
      round: "rounded-tr-[110px]",
    },
    {
      title: "Join us",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
      body: [
        <>
          <strong>You</strong> are excited by emerging technology.{" "}
          <strong>You</strong> dream about building new things alongside
          great companies. You are driven to be a master of your craft.
        </>,
        <>
          <strong>
            We bring brilliant like-minded peers to innovate, learn, and grow
            with. Let's connect.
          </strong>
        </>,
      ],
      cta: "Join ParaBola",
      round: "rounded-tl-[110px]",
    },
  ];

  return (
    <section className="w-full bg-slate/950 py-20 px-6">
      <h2 className="text-center text-5xl font-extrabold text-white tracking-tight mb-14">
        Ready to get started?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {cards.map(({ title, image, body, cta, round }) => (
          <div
            key={title}
            className={`relative overflow-hidden ${round} rounded-3xl h-[560px]`}
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <div className="relative h-full flex flex-col justify-center px-10 py-10 max-w-md">
              <h3 className="text-4xl font-extrabold text-white mb-6">
                {title}
              </h3>
              <p className="text-slate-100 text-base mb-5 leading-relaxed">
                {body[0]}
              </p>
              <p className="text-white text-base mb-16 leading-relaxed">
                {body[1]}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide uppercase hover:gap-3 transition-all"
              >
                {cta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <h3 className="text-2xl font-extrabold text-white whitespace-nowrap">
          Stay Connected
        </h3>
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 w-full bg-black border border-white/20 rounded-lg px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="whitespace-nowrap rounded-lg bg-blue-600 text-White font-bold px-6 py-4 hover:bg-blue-400 transition-colors">
          Subscribe for updates
        </button>
      </div>
    </section>
  );
}