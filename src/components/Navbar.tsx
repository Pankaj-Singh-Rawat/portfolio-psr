import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div
          className="
          mt-8
          flex
          items-center
          justify-between
          rounded-[999px]
          border
          border-[var(--border)]
          bg-[rgba(247,243,238,0.75)]
          px-6
          py-5
          backdrop-blur-xl
        "
        >
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-[var(--text-light)] transition-colors hover:text-[var(--text)]"
              >
                {link.label}
                {i === 0 && (
                  <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                )}
              </a>
            ))}
          </nav>

          <Button href="#contact" className="hidden !px-5 !py-2.5 sm:inline-flex">
            Let's Connect <span aria-hidden>↗</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
