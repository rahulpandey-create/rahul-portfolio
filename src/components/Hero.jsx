import { navigateToSection } from "../utils/navigation";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-60" />

      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-width relative grid min-h-[680px] items-center gap-14 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Full-Stack Developer · AI Automation
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            I build custom web apps{" "}
            <span className="gradient-text">
              & AI automations for businesses.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I help businesses streamline repetitive workflows, build custom
            software, and connect their tools through practical AI-powered
            solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("projects");
              }}
              className="rounded-full border bg-blue-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-blue-400 hover:border-blue-400"
            >
              Explore My Work ↗
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("contact");
              }}
              className="rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Start a Project
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
            <span>✳ Custom Web Apps</span>
            <span>✳ AI Workflows</span>
            <span>✳ API Integrations</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10 blur-2xl" />

          <div className="glass-card relative rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs text-slate-500">DEVELOPER PROFILE</p>
                <h2 className="mt-2 text-xl font-semibold">Rahul Pandey</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-bold text-cyan-300">
                RP
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Frontend",
                  value: "React · Tailwind CSS",
                  width: "90%",
                },
                { label: "Backend", value: "Node.js · Laravel", width: "82%" },
                { label: "Database", value: "MySQL · MongoDB", width: "78%" },
                {
                  label: "AI & Automation",
                  value: "APIs · AI Workflows",
                  width: "65%",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between gap-3 text-sm">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="text-right text-xs text-slate-500">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4">
              <p className="text-sm font-medium text-cyan-200">
                Focus: Building useful software
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                From business dashboards to intelligent automation systems.
              </p>
            </div>
          </div>

          <div className="glass-card absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 shadow-2xl sm:-left-10">
            <p className="text-xs text-slate-500">CURRENT FOCUS</p>
            <p className="mt-1 text-sm font-medium">
              Building · Learning · Shipping
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
