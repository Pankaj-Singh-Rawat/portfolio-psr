export default function Grain() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        opacity-[0.035]
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(0,0,0,.35) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(0,0,0,.25) 1px, transparent 1px)
        `,
        backgroundSize: "18px 18px",
      }}
    />
  );
}