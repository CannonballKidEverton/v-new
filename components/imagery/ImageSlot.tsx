import Image from "next/image";
import { cn } from "@/lib/utils";
import { DocumentaryPlaceholder } from "./DocumentaryPlaceholder";
import { IMAGE_REGISTRY, type ImageContext } from "@/lib/imagery";

interface ImageSlotProps {
  context: ImageContext;
  aspect?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * ImageSlot — canonical image component.
 *
 * Photography treatment (editorial, not cinematic):
 *  grayscale(60%)     — partial desaturation; preserves atmosphere and warmth
 *  brightness(1.12)   — lift shadows; more natural light feel; less oppressive
 *  contrast(1.06)     — gentle mid-tone separation; restrained
 *  sepia(8%)          — barely-there warmth; institutional not dystopian
 *
 * Reference: FT Weekend / Monocle / Bloomberg editorial photography treatment.
 */
const PHOTO_FILTER = "grayscale(60%) brightness(1.12) contrast(1.06) sepia(8%)";

export function ImageSlot({
  context,
  aspect = "16/9",
  caption,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 1600px",
  className,
}: ImageSlotProps) {
  const entry = IMAGE_REGISTRY[context];
  const isLocal = entry.photoUrl?.startsWith("/");
  const position = entry.position ?? "center center";

  /* ── Live photography ──────────────────────────────────────── */
  if (entry.photoUrl) {
    return (
      <figure className={cn("relative overflow-hidden", className)}>
        <div
          className="relative w-full overflow-hidden"
          style={aspect ? { aspectRatio: aspect } : { height: "100%" }}
        >
          <Image
            src={entry.photoUrl}
            alt={entry.label}
            fill
            sizes={sizes}
            priority={priority}
            unoptimized={!isLocal}
            className="object-cover transition-[filter] duration-700"
            style={{
              filter: PHOTO_FILTER,
              objectPosition: position,
            }}
          />
          {/* Category label — bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-3"
            style={{
              background:
                "linear-gradient(to top, rgba(10,9,8,0.55) 0%, transparent 100%)",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(140,128,108,0.72)",
              }}
            >
              {entry.label}
            </span>
          </div>
        </div>
        {caption && (
          <figcaption
            style={{
              marginTop: "10px",
              fontFamily: "monospace",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(58,54,48,0.75)",
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  /* ── Placeholder ───────────────────────────────────────────── */
  return (
    <DocumentaryPlaceholder
      variant={entry.variant}
      label={entry.label}
      aspect={aspect}
      caption={caption}
      className={className}
    />
  );
}
