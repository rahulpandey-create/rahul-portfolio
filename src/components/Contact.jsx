export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-white/5">
      <div className="container-width">
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-slate-900/80 to-blue-500/10 p-8 sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="relative max-w-3xl">
            <p className="eyebrow">Have a Project in Mind?</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
              Let's build something{" "}
              <span className="gradient-text">useful.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Tell me what you're trying to build or which business process
              you'd like to improve. Let's discuss the requirements.
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                "rahul6395595358@gmail.com"
              )}&su=${encodeURIComponent(
                "Project Enquiry"
              )}&body=${encodeURIComponent(
                `Hi Rahul,

Name:

Project Type:

Requirements:

Looking forward to discussing this project with you.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border inline-flex rounded-full bg-cyan-600 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-500 hover:border-cyan-500"
            >
              Discuss Your Project ↗
            </a>

            <p className="mt-4 text-xs text-slate-500">
              Replace the placeholder email address before publishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
