
const links = [
    { label: "Work", id: "projects" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  
  function navigateToSection(id) {
    const section = document.getElementById(id);
  
    if (!section) return;
  
    window.history.pushState({}, "", `/${id}`);
  
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  
  export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/85 backdrop-blur-xl">
        <nav className="container-width flex h-[76px] items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-bold tracking-tight"
          >
            Rahul<span className="text-cyan-400">.</span>
          </a>
  
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={`/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(link.id);
                }}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
  
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("contact");
            }}
            className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Talk ↗
          </a>
        </nav>
      </header>
    );
  }
  