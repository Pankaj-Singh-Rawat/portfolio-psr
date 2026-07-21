import Button from "../components/Button";

export default function HeroContent() {
  return (
    <div>
      <p className="mb-4 text-sm tracking-wide text-[var(--accent)]">
        Hey, I'm
      </p>

      <h1 className="font-serif text-6xl leading-[0.95] text-[var(--text)] lg:text-7xl">
        Pankaj Singh
        <br />
        Rawat
      </h1>

      <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[var(--text-light)]">
        AI Systems Architect &amp; ML Engineer
      </p>

      <p className="mt-6 max-w-lg text-base leading-7 text-[var(--text-light)]">
        I build intelligent systems that solve real-world problems
        with clean code and thoughtful design.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Button href="#projects" variant="filled">
          View My Work <span aria-hidden>↗</span>
        </Button>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] underline decoration-[var(--border)] underline-offset-8 transition-colors hover:decoration-[var(--accent)]"
        >
          Download Resume <span aria-hidden>↓</span>
        </a>
      </div>
    </div>
  );
}
