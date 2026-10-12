
export default function Footer() {
    return (
      <footer className="border-t border-white/10 py-8">
        <div className="container-width flex flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center">
          <a href="#home" className="font-semibold text-white">
            Rahul<span className="text-cyan-400">.</span>
          </a>
          <p>Building useful software, one project at a time.</p>
          <p>© {new Date().getFullYear()} Rahul Pandey</p>
        </div>
      </footer>
    );
  }
  