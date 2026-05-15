import Image from "next/image";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  /** CSS aspect-ratio value, e.g. "16/9" | "4/5" | "3/2" | "21/9" */
  aspect?: string;
  caption?: string;
  /** On hover: partially lift grayscale. Default: true. */
  hoverReveal?: boolean;
  priority?: boolean;
  className?: string;
  /** Used for fill-mode images inside a positioned container */
  fill?: boolean;
  sizes?: string;
}

/**
 * Editorial image component.
 *
 * Treatment: Images render at ~85% grayscale by default — documentary,
 * restrained, typography-led. On hover (if hoverReveal=true) they lift
 * slightly toward natural tone.
 *
 * When commissioned photography arrives, drop the src path in. The
 * component handles all treatment, aspect-ratio, and caption layout.
 */
export function EditorialImage({
  src,
  alt,
  aspect = "16/9",
  caption,
  hoverReveal = true,
  priority = false,
  className,
  fill = false,
  sizes = "100vw",
}: EditorialImageProps) {
  return (
    <figure className={cn("group relative overflow-hidden", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          !fill && "block"
        )}
        style={fill ? { position: "relative", height: "100%" } : { aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover object-center",
            "transition-[filter,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            /* Grayscale treatment — documentary, restrained */
            "grayscale brightness-[0.85] contrast-[1.05]",
            hoverReveal && "group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100",
          )}
        />
      </div>

      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
