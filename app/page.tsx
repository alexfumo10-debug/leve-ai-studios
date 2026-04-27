"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
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
        <div className="mx-auto max-w-[760px] text-center fade-up">
          <h1 className="text-[56px] font-semibold leading-[1.05] tracking-[-0.015em] text-[#1d1d1f] sm:text-[72px] lg:text-[80px]">
            Apps, intelligently
            <br />
            built.
          </h1>
          <p className="mt-7 text-[21px] font-normal leading-[1.38] text-[#86868b]">
            We design and ship mobile and web apps — and help businesses
            bring AI into the products they already have.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 text-[17px] font-normal text-white hover:bg-primary-dark transition-colors"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="group text-[17px] font-normal text-primary hover:underline"
            >
              See our work&ensp;
              <span className="inline-block transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-12 bg-[#f5f5f7] py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Two things.<br className="sm:hidden" /> Done&nbsp;well.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-center text-[17px] leading-[1.47] text-[#86868b]">
            We focus on what we&apos;re great at — building apps from scratch,
            and bringing AI into businesses that already exist.
          </p>

          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "App Development",
                desc: "End-to-end design and development of mobile and web apps. From zero-to-one MVPs to production systems on the App Store. Native iOS, Android, and modern web stacks.",
                bullets: ["iOS &amp; Android", "Web apps", "UX &amp; product design", "App Store launch"],
              },
              {
                title: "AI Implementation",
                desc: "We bring AI into your existing business — chatbots, agents, RAG systems, internal copilots, and intelligent automation. Add intelligence to what you&apos;ve already built.",
                bullets: ["LLM integrations", "Custom AI agents", "RAG &amp; knowledge bases", "Workflow automation"],
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl bg-white p-10 sm:p-12 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-[24px] font-semibold leading-[1.17] text-[#1d1d1f]">{s.title}</h3>
                <p
                  className="mt-4 text-[15px] leading-[1.53] text-[#86868b]"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-[14px] text-[#1d1d1f]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work / GymRoam ── */}
      <section id="work" className="scroll-mt-12 py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[980px]">
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.18em] text-[#86868b]">
            Flagship Product
          </p>
          <h2 className="mt-3 text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Built in-house. Built to ship.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-center text-[17px] leading-[1.47] text-[#86868b]">
            We don&apos;t just build apps for clients — we build our own. GymRoam
            is our flagship, and proof of what comes out of this studio.
          </p>

          <div className="mt-20 overflow-hidden rounded-3xl bg-[#0a0a0a]">
            <div className="grid md:grid-cols-2">
              {/* Visual */}
              <div className="relative flex flex-col items-center justify-center overflow-hidden px-10 py-24 md:py-28">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, #E8FF3C 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 h-28 w-28 overflow-hidden rounded-[26px] shadow-2xl ring-1 ring-white/10">
                  <img
                    src="/gymroam-logo.png"
                    alt="GymRoam"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="relative z-10 mt-7 text-[36px] font-semibold tracking-tight text-white">
                  GymRoam
                </h3>
                <span className="relative z-10 mt-3 inline-flex items-center gap-2 rounded-full bg-[#E8FF3C] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-black">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  Launching Soon
                </span>
                <p className="relative z-10 mt-4 text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
                  iOS · App Store
                </p>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center px-10 pb-16 md:py-28 md:pr-14 md:pl-4">
                <p className="text-[19px] leading-[1.5] text-white">
                  Train anywhere. The AI-powered fitness companion for travelers
                  and locals — find the best gyms, studios, and workout spots
                  wherever life takes you.
                </p>
                <p className="mt-5 text-[15px] leading-[1.6] text-[#86868b]">
                  Designed, engineered, and shipped from our studio. Intelligent
                  recommendations, location-aware discovery, and a mobile
                  experience built to feel effortless.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "iOS App",
                    "AI Recommendations",
                    "Location Intelligence",
                    "UX Design",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.08] px-3.5 py-1.5 text-[12px] font-medium text-[#d2d2d7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href="https://instagram.com/gymroamapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#E8FF3C] px-5 py-2.5 text-[14px] font-semibold text-black transition-transform hover:scale-[1.02]"
                  >
                    Follow @gymroamapp
                  </a>
                  <a
                    href="https://instagram.com/gymroamapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-white/70 hover:text-white transition-colors"
                  >
                    Get early access&nbsp;&rsaquo;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-[14px] text-[#86868b]">
            Have an app idea of your own?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Let&apos;s build it.
            </a>
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="scroll-mt-12 bg-[#1d1d1f] py-28 px-6 lg:py-36">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#f5f5f7] sm:text-[48px]">
            A startup on a mission.
          </h2>
          <p className="mt-7 text-[21px] leading-[1.38] text-[#86868b]">
            We&apos;re a lean studio of engineers and designers who build apps
            from scratch and bring AI into the businesses that need it. We move
            fast, ship real software, and stay close to the work.
          </p>
          <p className="mt-5 text-[17px] leading-[1.47] text-[#6e6e73]">
            No hype. No buzzwords. Just well-built products, delivered by
            people who care about your success.
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
            onSubmit={async (e) => {
              e.preventDefault();
              if (status === "submitting") return;
              const form = e.currentTarget;
              const data = new FormData(form);
              const payload = {
                name: String(data.get("name") ?? "").trim(),
                email: String(data.get("email") ?? "").trim(),
                message: String(data.get("message") ?? "").trim(),
              };
              setStatus("submitting");
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
                if (!res.ok) throw new Error("Request failed");
                setStatus("success");
                form.reset();
              } catch {
                setStatus("error");
              }
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
            <div className="pt-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="rounded-full bg-primary px-7 py-3 text-[17px] font-normal text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending…"
                  : status === "success"
                  ? "Message sent"
                  : "Send message"}
              </button>
              {status === "success" && (
                <p className="text-[14px] text-[#1d1d1f]">
                  Thanks — we&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-[14px] text-[#b42318]">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7] py-10 px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-[12px] text-[#6e6e73]">
            &copy; {new Date().getFullYear()} Leve AI Studios LLC. All rights reserved.
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
