import Container from "../components/Container";

const features = [
  {
    title: "AI & ML Engineering",
    description: "Building end-to-end machine learning systems that learn, adapt and scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M8 5 3 12l5 7M16 5l5 7-5 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description: "Designing robust APIs and scalable backend services.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "MLOps",
    description: "Deploying models to production with reliability and monitoring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path
          d="M6.5 17a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 16.9 8.5 4.5 4.5 0 0 1 16.5 17h-10Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "System Design",
    description: "Architecting clean, maintainable and efficient systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path
          d="M12 3 3 7.5 12 12l9-4.5L12 3ZM3 16.5 12 21l9-4.5M3 12l9 4.5 9-4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="skills" className="relative pb-16">
      <Container>
        <div
          className="
            grid gap-10 rounded-[28px] border border-[var(--border)]
            bg-[rgba(239,231,221,0.6)] p-10
            sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--border)]
          "
        >
          {features.map((feature) => (
            <div key={feature.title} className="lg:pl-10 lg:first:pl-0">
              <div className="mb-4 text-[var(--accent)]">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-light)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
