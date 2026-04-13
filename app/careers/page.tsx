import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import OpenPositions from "@/components/OpenPositions";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-200">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-white text-lg md:text-xl font-medium tracking-tight">
      {children}
    </h3>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-6 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.035] hover:border-white/15 hover:-translate-y-0.5">
      <div className="relative">
        <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_60%)] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative h-11 w-11 rounded-2xl bg-white/[0.035] border border-white/10 flex items-center justify-center text-white/90">
          {icon}
        </div>
      </div>
      <p className="mt-5 text-white font-semibold tracking-tight">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover relative overflow-x-hidden bg-[#08070b]">
      <Navbar />

      <main className="relative" style={{ zIndex: 10 }}>
        {/* Global background (shared across sections like reference) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#08070b]" />
          {/* subtle stars */}
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] opacity-70" />
          </div>
          {/* ambient wash */}
          <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)] blur-2xl" />
          {/* main wave (top/right) */}
          <div className="absolute right-[-260px] top-[160px] h-[520px] w-[1280px] rotate-[-12deg] opacity-80 mix-blend-screen">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(124,58,237,0.00),rgba(59,130,246,0.55),rgba(34,211,238,0.50),rgba(124,58,237,0.35),transparent)] blur-3xl" />
          </div>
          {/* secondary wave (bottom/left) */}
          <div className="absolute left-[-340px] bottom-[-260px] h-[520px] w-[1400px] rotate-[14deg] opacity-60 mix-blend-screen">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.22),rgba(59,130,246,0.30),rgba(124,58,237,0.20),transparent)] blur-3xl" />
          </div>
        </div>

        {/* Hero */}
        <section className="relative pt-28 pb-24 overflow-hidden">
          {/* local vignette for hero readability */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.00),rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.75)_100%)]" />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight">
                Build the Future <br className="hidden md:block" /> of Ecommerce.
              </h1>
              <p className="mt-6 text-zinc-300/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Join a team that’s scaling brands, not just building them.
              </p>

              <a
                href="#open-positions"
                className="inline-flex mt-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_18px_60px_rgba(34,211,238,0.25)] transition-shadow"
              >
                View Open Positions <span className="ml-2">›</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Work */}
        <section className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <h2 className="text-center text-white text-2xl md:text-3xl font-medium tracking-tight">
            Why Work at EVOC Labs?
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              title="Innovate & Scale"
              description="Work on cutting-edge ecommerce solutions in a fast-paced startup environment."
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <FeatureCard
              title="Collaborative Culture"
              description="Join a supportive, diverse team that values creativity and collaboration."
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M16 13c-1.67 0-5 0.84-5 2.5V19h10v-3.5c0-1.66-3.33-2.5-5-2.5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 13c-1.67 0-5 0.84-5 2.5V19h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <FeatureCard
              title="Grow & Thrive"
              description="Enjoy opportunities for career growth, learning, and making an impact."
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 21h8M12 17v4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 4h10v4a5 5 0 0 1-10 0V4z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 6H5a2 2 0 0 0 0 4h2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 6h2a2 2 0 0 1 0 4h-2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </section>

        {/* Open Positions */}
        <section
          id="open-positions"
          className="relative mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <h2 className="text-center text-white text-2xl md:text-3xl font-medium tracking-tight">
            Open Positions
          </h2>

          <OpenPositions
            defaultDepartment="All"
            positions={[
              {
                id: "fullstack-internship",
                title: "Full Stack Developer Internship",
                meta: "Remote • 4 Months • Internship (Unpaid)",
                department: "Tech",
                renderDetails: (
                  <details className="group">
                    <summary className="cursor-pointer list-none select-none px-6 py-5 flex items-center justify-between gap-6">
                      <div className="min-w-0">
                        <p className="text-white font-semibold truncate">
                          Full Stack Developer Internship
                        </p>
                        <p className="mt-1 text-zinc-400 text-sm">
                          Remote • 4 Months • Internship (Unpaid)
                        </p>
                      </div>
                      <div className="flex items-center gap-5 shrink-0">
                        <a
                          href="#apply"
                          className="text-sm font-medium text-blue-300 hover:text-white transition-colors"
                        >
                          Apply Now →
                        </a>
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                          ▾
                        </span>
                      </div>
                    </summary>

                    <div className="px-6 pb-6 border-t border-white/10">
                      <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                          <section className="space-y-3">
                            <SectionTitle>About Evoc Labs</SectionTitle>
                            <p className="text-zinc-300 leading-relaxed">
                              Evoc Labs is a B2B SaaS platform built for
                              eCommerce sellers in India. Our goal is to create
                              a unified ecosystem where merchants can manage
                              their entire online business from a single
                              dashboard — including store creation, ad tracking,
                              logistics, and analytics.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                              We aim to eliminate fragmented tools and simplify
                              how modern brands scale online.
                            </p>
                          </section>

                          <section className="space-y-3">
                            <SectionTitle>Internship Overview</SectionTitle>
                            <p className="text-zinc-300 leading-relaxed">
                              Evoc Labs is looking for highly motivated and
                              execution-driven Full Stack Developer Interns with
                              hands-on experience in Next.js. This internship is
                              designed for individuals who are serious about
                              building real products and working in a fast-paced
                              startup environment.
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                              Interns will work directly with the core team on
                              live product development and contribute to
                              building a scalable SaaS platform from the ground
                              up.
                            </p>
                          </section>

                          <section className="space-y-3">
                            <SectionTitle>Key Responsibilities</SectionTitle>
                            <ul className="mt-3 space-y-2 text-zinc-300">
                              {[
                                "Design, develop, and maintain web applications using Next.js",
                                "Work on both frontend and backend components of the platform",
                                "Build responsive, high-performance user interfaces",
                                "Integrate REST APIs and third-party services",
                                "Work with databases such as MongoDB or PostgreSQL",
                                "Collaborate with product and design teams to implement features",
                                "Identify bugs and fix performance bottlenecks",
                                "Write clean, scalable, and maintainable code",
                                "Participate in code reviews and development discussions",
                              ].map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section className="space-y-3">
                            <SectionTitle>
                              Required Skills and Qualifications
                            </SectionTitle>
                            <ul className="mt-3 space-y-2 text-zinc-300">
                              {[
                                "Hands-on experience with Next.js and React",
                                "Basic to intermediate knowledge of Node.js",
                                "Experience working on real-world projects (personal, freelance, or academic)",
                                "Understanding of APIs, authentication systems, and database management",
                                "Familiarity with Git and version control workflows",
                                "Problem-solving mindset and ability to work independently",
                                "Strong willingness to learn and adapt in a startup environment",
                              ].map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section className="space-y-3">
                            <SectionTitle>Preferred Qualifications</SectionTitle>
                            <ul className="mt-3 space-y-2 text-zinc-300">
                              {[
                                "Experience with Tailwind CSS or modern UI frameworks",
                                "Knowledge of deployment platforms such as Vercel, AWS, or similar",
                                "Understanding of SaaS products or eCommerce ecosystems",
                                "Familiarity with performance optimization techniques",
                              ].map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        </div>

                        <aside className="space-y-6">
                          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-5">
                            <SectionTitle>Internship Terms</SectionTitle>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge>Remote</Badge>
                              <Badge>4 Months</Badge>
                              <Badge>Internship</Badge>
                              <Badge>Unpaid</Badge>
                            </div>
                            <ul className="mt-4 space-y-2 text-zinc-300 text-sm">
                              {[
                                "Interns are expected to commit dedicated working hours and deliverables",
                                "Performance will be evaluated based on contribution, consistency, and ownership",
                              ].map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-5">
                            <SectionTitle>What You Will Gain</SectionTitle>
                            <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                              {[
                                "Real-world experience working on a live SaaS product",
                                "Exposure to startup culture and fast-paced execution",
                                "Opportunity to work closely with founders and core team",
                                "Hands-on experience in building scalable systems",
                                "Strong portfolio projects with practical impact",
                                "Potential opportunity for a full-time paid role based on performance",
                              ].map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-5">
                            <SectionTitle>Application Process</SectionTitle>
                            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                              Apply with an updated resume, your GitHub/portfolio,
                              and links to Next.js projects.
                            </p>
                            <a
                              href="mailto:careers@evoclabs.com?subject=Application%20-%20Full%20Stack%20Developer%20Internship%20(Evoc%20Labs)"
                              className="inline-flex mt-4 text-sm font-medium text-blue-300 hover:text-white transition-colors"
                            >
                              careers@evoclabs.com →
                            </a>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </details>
                ),
              },
            ]}
          />

          <CareersApplicationForm />

          <div className="mt-16 text-center">
            <h3 className="text-white text-xl font-medium">
              Don’t see your role?
            </h3>
            <p className="mt-2 text-zinc-400">
              We’re always looking for talent.
            </p>
            <a
              href="mailto:careers@evoclabs.com?subject=General%20Application%20-%20Evoc%20Labs"
              className="inline-flex mt-6 text-sm font-medium text-blue-300 hover:text-white transition-colors"
            >
              Email careers@evoclabs.com →
            </a>
          </div>
        </section>
      </main>

      <div className="relative" style={{ zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  );
}

