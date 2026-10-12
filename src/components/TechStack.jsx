
const groups = [
    ["Frontend", ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]],
    ["Backend", ["Node.js", "Express", "Laravel", "REST APIs"]],
    ["Data", ["MySQL", "MongoDB", "Firebase"]],
    ["Tools & AI", ["Git", "GitHub", "AI APIs", "Automation Workflows"]],
  ];
  
  export default function TechStack() {
    return (
      <section className="section-padding border-t border-white/5">
        <div className="container-width">
          <p className="eyebrow">Technologies</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">The tools behind <span className="gradient-text">the work.</span></h2>
  
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {groups.map(([category, technologies]) => (
              <div key={category} className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  