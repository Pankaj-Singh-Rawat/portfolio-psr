export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div
        className="
          aspect-[4/5]
          w-full
          max-w-md
          rounded-[32px]
          border
          border-[var(--border)]
          bg-[var(--surface)]
          shadow-[var(--shadow)]
        "
      />
    </div>
  );
}