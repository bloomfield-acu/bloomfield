import { cn } from "@/lib/utils";

interface LeafDividerProps {
  className?: string;
}

export function LeafDivider({ className }: LeafDividerProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4 py-8", className)} aria-hidden>
      <div className="h-px w-16 bg-bloom-gold/40 sm:w-24" />
      <svg
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        className="text-bloom-sage opacity-60"
      >
        <path
          d="M12 2C12 2 4 8 4 16C4 20.4183 7.58172 24 12 24C16.4183 24 20 20.4183 20 16C20 8 12 2 12 2Z"
          fill="currentColor"
        />
        <path
          d="M12 6V20M9 10C9 10 12 14 12 14M15 10C15 10 12 14 12 14"
          stroke="var(--bloom-cream)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <div className="h-px w-16 bg-bloom-gold/40 sm:w-24" />
    </div>
  );
}
