import Button from "../components/Button";

export default function HeroContent() {
  return (
    <div>
      <p className="mb-5 uppercase tracking-[0.35em] text-sm text-[var(--text-light)]">
        AI Engineer • Machine Learning
      </p>

      <h1 className="text-6xl leading-none lg:text-8xl">
        Building
        <br />
        intelligent
        <br />
        systems.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-9 text-[var(--text-light)]">
        I design, build and deploy machine learning systems,
        backend services, and intelligent applications focused on
        real-world impact rather than prototypes.
      </p>

      <div className="mt-12 flex gap-4">
        <Button>
          View Projects
        </Button>

        <Button>
          Contact Me
        </Button>
      </div>
    </div>
  );
}