
const steps = [
    ["01", "Understand", "Define the business problem, requirements and goals."],
    ["02", "Plan", "Agree on scope, deliverables, milestones and timeline."],
    ["03", "Build", "Develop the solution and validate it incrementally."],
    ["04", "Launch", "Test, deploy and prepare for future improvements."],
  ];
  
  export default function Process() {
    return (
      <section className="section-padding border-t border-white/5">
        <div className="container-width">
          <p className="eyebrow">How I Work</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">From idea to <span className="gradient-text">working software.</span></h2>
  
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <div key={number} className="border-t border-white/15 pt-5">
                <span className="text-sm text-cyan-300">{number}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  