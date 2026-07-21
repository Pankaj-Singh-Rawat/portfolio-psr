import Container from "../components/Container";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Pankaj-Singh-Rawat",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.55A10.53 10.53 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pankaj-singh-rawat",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.8c0-1.38-.03-3.16-2.03-3.16-2.04 0-2.35 1.5-2.35 3.06V21H9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@pankajsinghrawat.dev",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Quote() {
  return (
    <section className="pb-24">
      <Container>
        <p className="text-center text-lg text-[var(--text-light)]">
          <span className="text-[var(--accent)]">{"{"}</span>{" "}
          I don't just train models, I build systems that create value.{" "}
          <span className="text-[var(--accent)]">{"}"}</span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-[var(--border)] text-[var(--text-light)]
                transition-all duration-300
                hover:-translate-y-[2px] hover:border-[var(--accent)] hover:text-[var(--text)]
              "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
