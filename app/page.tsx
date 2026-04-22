"use client";

export default function Home() {
  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-[980px] items-center justify-between px-6 py-3">
          <a href="#" className="text-[21px] font-semibold tracking-tight text-[#1d1d1f]">
            Leve <span className="text-primary">AI</span> Studios
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {["Services", "Work", "About", "Process"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-normal text-[#424245] hover:text-[#1d1d1f] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-normal text-white hover:bg-primary-dark transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden p-1 text-[#1d1d1f]"
            aria-label="Menu"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden bg-white px-6 pb-5 md:hidden">
          {["Services", "Work", "About", "Process", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block border-b border-[#f5f5f7] py-3 text-sm text-[#1d1d1f]">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-12">
        <div className="mx-auto max-w-[680px] text-center fade-up">
          <h1 className="text-[56px] font-semibold leading-[1.05] tracking-[-0.015em] text-[#1d1d1f] sm:text-[72px] lg:text-[80px]">
            Intelligence,
            <br />
            applied.
          </h1>
          <p className="mt-7 text-[21px] font-normal leading-[1.38] text-[#86868b]">
            Leve AI Studios helps businesses design, build, and ship
            AI&#8209;powered products that actually work.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 text-[17px] font-normal text-white hover:bg-primary-dark transition-colors"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="group text-[17px] font-normal text-primary hover:underline"
            >
              Learn more&ensp;
              <span className="inline-block transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-12 bg-[#f5f5f7] py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Everything AI.<br className="sm:hidden" /> One&nbsp;Studio.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-center text-[17px] leading-[1.47] text-[#86868b]">
            From strategy through deployment, we bring the full stack of AI
            expertise to your business.
          </p>

          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AI Strategy & Consulting",
                desc: "Feasibility assessments, technology selection, and implementation roadmaps that help you invest in what matters.",
              },
              {
                title: "Custom AI Products",
                desc: "End-to-end design and development of AI-powered applications — from intelligent assistants to ML pipelines.",
              },
              {
                title: "LLM & Agent Systems",
                desc: "Production-grade chatbots, autonomous agents, RAG pipelines, and custom fine-tuning built on large language models.",
              },
              {
                title: "AI Mobile & Web Apps",
                desc: "Full-stack development of mobile and web applications with AI at the core — from concept to App Store.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl bg-white p-10 sm:p-12 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-[24px] font-semibold leading-[1.17] text-[#1d1d1f]">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.53] text-[#86868b]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section id="work" className="scroll-mt-12 py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Featured work.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-center text-[17px] leading-[1.47] text-[#86868b]">
            Products we&apos;ve helped bring to life.
          </p>

          <div className="mt-20 overflow-hidden rounded-3xl bg-[#f5f5f7]">
            <div className="grid md:grid-cols-2">
              {/* Visual */}
              <div className="flex flex-col items-center justify-center px-10 py-20 md:py-24">
                <div className="h-24 w-24 overflow-hidden rounded-[22px] shadow-lg">
                  <img src="/gymroam-logo.png" alt="GymRoam logo" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-6 text-[28px] font-semibold text-[#1d1d1f]">GymRoam</h3>
                <span className="mt-3 text-[12px] font-medium uppercase tracking-wider text-[#86868b]">
                  Coming Soon
                </span>
              </div>
              {/* Description */}
              <div className="flex flex-col justify-center px-10 pb-16 md:py-24 md:pr-14 md:pl-4">
                <p className="text-[17px] leading-[1.53] text-[#1d1d1f]">
                  An AI-powered fitness app that helps travelers find the best gyms,
                  studios, and workout spots wherever they are. We designed and
                  developed GymRoam from the ground up — intelligent recommendations,
                  location awareness, and a seamless mobile experience.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Mobile App", "AI Recommendations", "Location Intelligence", "UX Design"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-[#86868b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="scroll-mt-12 bg-[#1d1d1f] py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#f5f5f7] sm:text-[48px]">
            A startup on a mission.
          </h2>
          <p className="mt-7 text-[21px] leading-[1.38] text-[#86868b]">
            We&apos;re a small team of engineers and builders who believe AI should
            be accessible to every business — not just big tech. We work hands-on
            with companies to implement practical AI solutions that make a real
            difference.
          </p>
          <p className="mt-5 text-[17px] leading-[1.47] text-[#6e6e73]">
            No hype. No buzzwords. Just real solutions, delivered by people
            who care about your success.
          </p>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-[#424245] sm:grid-cols-3">
            {[
              { title: "Startup mindset", desc: "We move fast, stay lean, and focus on delivering value." },
              { title: "Hands-on partners", desc: "We embed with your team to understand the problem first." },
              { title: "Built for impact", desc: "Every solution is designed to create measurable results." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1d1d1f] p-10">
                <h3 className="text-[17px] font-semibold text-[#f5f5f7]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.5] text-[#86868b]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="scroll-mt-12 py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-[48px]">
            How we work.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-center text-[17px] leading-[1.47] text-[#86868b]">
            A proven framework from idea to impact.
          </p>

          <div className="mx-auto mt-20 max-w-[720px]">
            {[
              { step: "01", title: "Discover", desc: "We learn your business, goals, data, and where AI can help most." },
              { step: "02", title: "Design", desc: "We architect the right solution — choosing models, pipelines, and UX." },
              { step: "03", title: "Build", desc: "We develop, test, and iterate with continuous feedback loops." },
              { step: "04", title: "Deliver", desc: "We deploy to production, monitor performance, and ensure long-term success." },
            ].map((item) => (
              <div key={item.step} className="flex gap-8 border-t border-[#d2d2d7] py-10 first:border-t-0">
                <span className="text-[40px] font-semibold leading-none text-[#d2d2d7] tabular-nums">{item.step}</span>
                <div>
                  <h3 className="text-[21px] font-semibold text-[#1d1d1f]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.53] text-[#86868b]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="scroll-mt-12 bg-[#f5f5f7] py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[580px]">
          <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Let&apos;s talk.
          </h2>
          <p className="mt-6 text-center text-[17px] leading-[1.47] text-[#86868b]">
            Ready to bring AI into your business? Tell us about your project.
          </p>

          <form
            className="mt-14 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") ?? "").trim();
              const email = String(data.get("email") ?? "").trim();
              const message = String(data.get("message") ?? "").trim();
              const subject = `New inquiry from ${name || "levestudios.com"}`;
              const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
              window.location.href = `mailto:AF@levestudios.com?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-xl border-0 bg-white px-5 py-4 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none ring-1 ring-[#d2d2d7] focus:ring-2 focus:ring-primary transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full rounded-xl border-0 bg-white px-5 py-4 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none ring-1 ring-[#d2d2d7] focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <textarea
              rows={5}
              name="message"
              required
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border-0 bg-white px-5 py-4 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none ring-1 ring-[#d2d2d7] focus:ring-2 focus:ring-primary transition-all resize-none"
            />
            <div className="pt-3">
              <button
                type="submit"
                className="rounded-full bg-primary px-7 py-3 text-[17px] font-normal text-white hover:bg-primary-dark transition-colors"
              >
                Send message
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-[13px] text-[#86868b]">
            Or reach us directly at{" "}
            <a
              href="mailto:AF@levestudios.com"
              className="text-primary hover:underline"
            >
              AF@levestudios.com
            </a>
          </p>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7] py-10 px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-[12px] text-[#6e6e73]">
            &copy; {new Date().getFullYear()} Leve AI Studios. All rights reserved.
          </p>
          <div className="flex gap-7">
            {["Services", "Work", "About", "Process", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
