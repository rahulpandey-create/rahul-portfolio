
const projects = [
    {
      number: "01",
      title: "WSA Associate Portal",
      type: "Full-Stack Platform",
      description:
        "A business platform for job management, associate workflows, approvals and notifications.",
      stack: ["React", "Laravel", "MySQL"],
      color: "from-cyan-500/20 to-blue-500/5",
      status: "Professional Project",
    },
    {
      number: "02",
      title: "AI Lead Automation",
      type: "AI & Workflow Automation",
      description:
        "A concept system for qualifying enquiries, organizing leads and automating follow-ups.",
      stack: ["React", "Node.js", "AI APIs"],
      color: "from-violet-500/20 to-fuchsia-500/5",
      status: "Planned Project",
    },
    {
      number: "03",
      title: "Business Operations Dashboard",
      type: "Custom Web Application",
      description:
        "A planned dashboard for tracking business activities, data and operational workflows.",
      stack: ["React", "Express", "Database"],
      color: "from-emerald-500/20 to-teal-500/5",
      status: "Planned Project",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="section-padding border-t border-white/5">
        <div className="container-width">
          <p className="eyebrow">Selected Work</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">
              Building things that <span className="gradient-text">solve problems.</span>
            </h2>
            <span className="text-sm text-slate-500">01 — 03</span>
          </div>
  
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="glass-card group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <div className="grid-background absolute inset-0 opacity-50" />
                  <div className="relative rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-center shadow-2xl transition group-hover:scale-105">
                    <span className="text-xs text-cyan-300">{project.number} / PROJECT</span>
                    <p className="mt-3 text-lg font-semibold">{project.title}</p>
                    <p className="mt-2 text-xs text-slate-500">Preview placeholder</p>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
                    {project.status}
                  </span>
                </div>
  
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
  
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-slate-500">
            Portfolio preview: planned projects are concepts, not completed client work.
            Showcase the WSA project publicly only with appropriate company permission.
          </p>
        </div>
      </section>
    );
  }
  