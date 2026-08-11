"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";
import FadeIn from "./FadeIn";

type GalleryProps = {
  project: Project;
};

export default function Gallery({ project }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const images = project.images ?? [];

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {images.length > 0
          ? images.map((image, i) => (
              <FadeIn key={image.src} delay={i * 50}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-line"
                  aria-label={`View ${project.name} screenshot ${i + 1} full size`}
                >
                  <Image
                    src={image.src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </button>
              </FadeIn>
            ))
          : Array.from({ length: project.galleryCount }).map((_, i) => (
              <FadeIn key={i} delay={i * 50}>
                <ImagePlaceholder
                  label={`Add project screenshot ${i + 1} — ${project.name}`}
                  aspect="aspect-[4/3]"
                />
              </FadeIn>
            ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} screenshot, full size`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-6 top-6 text-3xl leading-none text-bg/80 transition-opacity hover:opacity-70"
          >
            ×
          </button>
          <div
            className="relative flex max-h-full max-w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={`${project.name} screenshot ${openIndex! + 1}, full size`}
              width={active.width}
              height={active.height}
              sizes="100vw"
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
