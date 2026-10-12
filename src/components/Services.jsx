
const services = [
    {
      icon: "01",
      title: "Custom Web Applications",
      description: "Dashboards, portals, CRMs and business tools built around your actual workflow.",
      tags: ["React", "Backend APIs", "Databases"],
    },
    {
      icon: "02",
      title: "AI Automation",
      description: "Reduce repetitive work with AI-powered workflows, document processing and intelligent assistants.",
      tags: ["AI APIs", "Workflow Design", "Automation"],
    },
    {
      icon: "03",
      title: "API & System Integration",
      description: "Connect business tools, automate data transfers and make separate systems work together.",
      tags: ["REST APIs", "Webhooks", "Integrations"],
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="section-padding border-t border-white/5">
        <div className="container-width">
          <p className="eyebrow">What I Build</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
            Practical solutions for <span className="gradient-text">real business needs.</span>
          </h2>
  
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.icon} className="glass-card rounded-3xl p-7 transition hover:border-cyan-400/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {service.icon}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  