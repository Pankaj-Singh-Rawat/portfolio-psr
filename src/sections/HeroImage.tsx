const focusPoints = ["AI & ML Systems", "Backend Engineering", "MLOps & Deployment", "Clean Architecture"];

export default function HeroImage() {
  return (
    <div className="relative flex justify-center pb-10 pl-6 pt-4 lg:justify-end lg:pl-16">
      <div
        className="
          relative aspect-[4/5] w-full max-w-md overflow-hidden
          rounded-[32px] border border-[var(--border)]
          bg-[var(--surface)] shadow-[var(--shadow)]
        "
      >
        {/*
          Swap this gradient for your own portrait/photo, e.g.:
          <img src={heroPhoto} alt="Pankaj Singh Rawat" className="h-full w-full object-cover" />
        */}
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, #fbf7f1 0%, #ecdfce 55%, #cbb392 100%)",
          }}
        />

        {/* rotating badge */}
        <div className="absolute -bottom-6 -right-6 h-32 w-32">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full animate-[spin_16s_linear_infinite]"
          >
            <defs>
              <path
                id="badgePath"
                fill="none"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <circle
              cx="100"
              cy="100"
              r="98"
              fill="var(--accent-soft)"
              stroke="var(--border)"
            />
            <text fontSize="11.5" letterSpacing="2.5" fill="var(--text)">
              <textPath href="#badgePath" startOffset="0%">
                BUILDING IMPACTFUL SOLUTIONS &#8226; BUILDING IMPACTFUL SOLUTIONS &#8226;
              </textPath>
            </text>
          </svg>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl text-[var(--text)]">
            ✳
          </div>
        </div>
      </div>

      {/* focused-on card */}
      <div
        className="
          absolute left-0 top-1/3 w-56 -translate-x-2 rounded-[24px]
          border border-[var(--border)] bg-[var(--bg)] p-5
          shadow-[var(--shadow)]
          lg:-translate-x-8
        "
      >
        <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Focused on
        </p>

        <ul className="space-y-4">
          {focusPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm text-[var(--text)]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--accent)]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-5Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
