
export default function About() {
    return (
      <section id="about" className="section-padding border-t border-white/5">
        <div className="container-width grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">A Little About Me</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Developer.<br /><span className="gradient-text">Problem solver.</span></h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-300">
              I'm Rahul Pandey, a full-stack developer interested in building useful
              web applications and AI-powered business solutions.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              My focus is on practical software: applications that organize
              information, improve workflows, connect systems and help businesses
              spend less time on repetitive tasks.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              I'm continuing to expand my experience in AI automation while
              building on my existing full-stack development skills.
            </p>
          </div>
        </div>
      </section>
    );
  }
  