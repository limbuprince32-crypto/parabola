const testimonials = [
  {
    name: "Sarah Stone",
    role: "CEO, Herman Modern Landscaping",
    image:
      "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=",
    content:
      "ParaBola understood our requirements from the beginning and turned our ideas into a clean, modern website. The entire process was smooth, professional, and much easier than we expected.",
  },
  {
    name: "Jake Wilson",
    role: "Brand Manager, World HVAC Solutions",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5A_n_8GdSA_6HINZjGenZWcOUii51Y6Rgw&s",
    content:
      "What impressed us most was their attention to detail. ParaBola didn’t just build a website—they created a digital experience that actually represents our brand",
  },
  {
    name: "Natasha Karen Green",
    role: "Business Handler",
    image:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    content:
      "From design to development, ParaBola delivered exactly what we were looking for. The website is fast, responsive, and easy for our customers to navigate.",
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/*left side */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What Businesses Say About <span className="text-blue-400">ParaBola</span>
            </h2>
            <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
              Business owners and professionals are choosing ParaBola to turn their ideas into powerful digital experiences. From modern websites and e-commerce solutions to AI-powered services and digital growth strategies, our clients value the creativity, reliability, and results we bring to every project. ParaBola is more than a service provider — we’re a digital partner focused on helping businesses grow, connect, and stand out.
            </p>
          </div>
          {/*right side */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-cyan-900 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="shrink-0">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        "
                      </div>
                    </div>
                    <div className="fles-grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {testimonial.name}{" "}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
