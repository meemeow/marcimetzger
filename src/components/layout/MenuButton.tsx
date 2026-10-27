import { cn } from "@/lib/utils";

type MenuButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function MenuButton({ label, onClick, className }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-haspopup="dialog"
      onClick={onClick}
      className={cn("-ml-2 inline-flex size-11 items-center justify-center transition-colors lg:hidden", className)}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        className="size-7"
        aria-hidden
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}
