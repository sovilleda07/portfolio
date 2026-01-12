import { Container } from '../components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <span className="text-lg font-semibold tracking-tight">
            SV<span className="text-indigo-400">.</span>
          </span>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
