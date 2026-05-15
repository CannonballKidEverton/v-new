import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  /** CSS aspect-ratio value, e.g. "16/9" | "4/5" | "21/9" */
  aspect?: string;
  /** Category label in mono — e.g. "INFRASTRUCTURE" */
  label?: string;
  caption?: string;
  className?: string;
}

/**
 * Institutional image placeholder.
 * Renders the correct aspect-ratio frame with subtle dot-grid texture.
 * Swap to EditorialImage when photography is delivered.
 */
export function ImagePlaceholder({
  aspect = "16/9",
  label,
  caption,
  className,
}: ImagePlaceholderProps) {
  const corners = [
    "top-4 left-4 border-t border-l",
    "top-4 right-4 border-t border-r",
    "bottom-4 left-4 border-b border-l",
    "bottom-4 right-4 border-b border-r",
  ];

  return (
    <figure className={cn(className)}>
      <div
        className="relative w-full bg-bg-2 border border-hairline overflow-hidden"
        style={aspect ? { aspectRatio: aspect } : undefined}
        role="img"
        aria-label={label ? `Imagery reserved — ${label}` : "Imagery reserved"}
      >
        {/* Dot grid texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id={`dots-${aspect?.replace("/", "-") ?? "default"}`} width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="#8A8A82" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${aspect?.replace("/", "-") ?? "default"})`} />
        </svg>

        {/* Corner registration marks */}
        {corners.map((c, i) => (
          <span
            key={i}
            className={cn("absolute w-3 h-3 border-ink-4", c)}
          />
        ))}

        {/* Category label */}
        {label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[9px] font-medium tracking-[0.3em] uppercase text-ink-4">
              {label}
            </span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-ink-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
