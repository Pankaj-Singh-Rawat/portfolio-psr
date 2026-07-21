import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--surface)]
        px-7
        py-3.5
        text-sm
        font-medium
        tracking-wide
        transition-all
        duration-300
        hover:-translate-y-[2px]
        hover:border-[var(--accent)]
        hover:shadow-[var(--shadow)]
        active:scale-95
      "
    >
      {children}
    </button>
  );
}