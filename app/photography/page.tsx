"use client";

import { Fraunces, Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// Swap these placeholders for your real photos once you've picked your set.
// Each needs an image in /public/photography/ and a short label.
const photos = [
  { src: "/images/photography/back wall.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/couch.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/oven.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/sink.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/balcony.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/french building 1.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/french building 2.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/french building 3.jpg", label: "Untitled, 2025" },
  { src: "/images/photography/french window.jpg", label: "Untitled, 2025" },
];

export default function Photography() {
      const [openIndex, setOpenIndex] = useState<number | null>(null);

  const showPrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} min-h-screen bg-[#F6F1E9] text-[#2B211C]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-[#2B211C]/10">
        <a
          href="/"
          className="text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Grace Codella
        </a>
        <nav className="flex gap-8 text-sm">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/photography" className="text-[#B0553E]">
            Photography
          </a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-10 pt-20 pb-12 text-center">
        <h1
          className="text-4xl leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Photography
        </h1>
        <p className="mt-4 text-[#2B211C]/70 leading-relaxed">
          I am a boutique stays and travel photographer based in Washington, D.C. I enjoy capturing images that draw the 
          viewer in with warmth, light, and unique details. I enjoy drawing attention towards cozy corners and spaces that
          are commonly missed. My goal is to make the viewer feel as if they've already  visited the place in the photo.
          </p>
        <div className="mt-6">
          <a
            href="mailto:you@gracecodella.com?subject=Photography inquiry"
            className="bg-[#B0553E] text-[#F6F1E9] px-6 py-3 rounded-sm text-sm"
          >
            Inquire about a shoot
          </a>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="max-w-5xl mx-auto px-10 pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(i)}
              className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#E4D9C7] cursor-zoom-in"
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                quality={90}
                className="object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox overlay */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#2B211C]/95 flex items-center justify-center px-6"
          onClick={() => setOpenIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-8 text-[#F6F1E9] text-sm"
          >
            Close ✕
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 md:left-10 text-[#F6F1E9] text-3xl px-2 cursor-pointer"
          >
            ‹
          </button>

          {/* Image — stopPropagation so clicking the photo itself doesn't close it */}
          <div
            className="relative w-full max-w-3xl aspect-[4/5]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].label}
              fill
              quality={95}
              className="object-contain"
            />
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 md:right-10 text-[#F6F1E9] text-3xl px-2 cursor-pointer"
          >
            ›
          </button>

          {/* Caption */}
          <p className="absolute bottom-6 text-[#F6F1E9]/70 text-sm">
            {photos[openIndex].label}
          </p>
        </div>
      )}

      {/* Footer */}
      <section className="border-t border-[#2B211C]/10 px-10 py-14 text-center">
        <p className="text-[#2B211C]/60 text-sm">
          Available for select bookings — reach out at{" "}
          <a href="mailto:you@gracecodella.com" className="underline underline-offset-4">
            you@gracecodella.com
          </a>
        </p>
      </section>
    </main>
  );
}
