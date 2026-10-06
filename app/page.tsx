import { Fraunces, Inter } from "next/font/google";
import Image from "next/dist/api/image";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Home() {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} min-h-screen bg-[#F6F1E9] text-[#2B211C]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-[#2B211C]/10">
        <span
          className="text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Grace Codella
        </span>
        <nav className="flex gap-8 text-sm">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/photography">Photography</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-10 py-20 max-w-6xl mx-auto">
        <div>
          <h1
            className="text-5xl leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Full-stack developer building digital products with a{" "}
            <span className="text-[#B0553E]">designer eye</span> and modern
            code.
          </h1>
          <p className="mt-6 text-[#2B211C]/70 max-w-md">
            I build tools for teams who care about how things look and feel —
            currently focused on fashion, beauty, and other creative
            industries.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="bg-[#D99F4F] px-6 py-3 rounded-sm text-sm"
            >
              See selected work
            </a>
            <a
              href="mailto:graceecodella@gmail.com"
              className="border border-[#2B211C] px-6 py-3 rounded-sm text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Framed photo */}
        <div className="max-w-[360px] rounded-md border-4 border-[#B0553E]/40 p-3 bg-white/40 shadow-sm">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/me.png"
              alt="Grace Codella"
              fill
              quality={90}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pull quote band */}
      <section className="bg-[#2B211C] text-[#F6F1E9] py-16 px-10 text-center">
        <p
          className="max-w-2xl mx-auto text-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-display)" }}
        >
          "Good tools disappear into the moment — a seating chart that just
          works, a mood board that says exactly what you meant."
        </p>
      </section>

      {/* Work */}
      <section id="work" className="px-10 py-24 max-w-6xl mx-auto">
        <h2
          className="text-3xl mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Selected work
        </h2>
        <p className="text-[#2B211C]/60 mb-10">
          A few things I've built with care.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <a
            href="/projects/mood-board-builder"
            className="block rounded-md overflow-hidden bg-[#E4D9C7] hover:opacity-90 transition"
          >
            <div className="aspect-video bg-[#B0553E]/20 flex items-center justify-center text-[#2B211C]/40 text-sm">
              Project image
            </div>
            <div className="p-6">
              <h3
                className="text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mood Board Builder
              </h3>
              <p className="mt-2 text-sm text-[#2B211C]/70">
                A drag-and-drop tool for assembling visual style boards for
                event planning.
              </p>
            </div>
          </a>

          <div className="rounded-md border border-dashed border-[#2B211C]/20 p-6 flex items-center justify-center text-[#2B211C]/40 text-sm">
            Next project goes here
          </div>
        </div>
      </section>

      {/* Contact footer */}
      <section
        id="contact"
        className="bg-[#B0553E] text-[#F6F1E9] px-10 py-20 text-center"
      >
        <h2
          className="text-3xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let's build something worth showing up for.
        </h2>
        <p className="mb-8 text-[#F6F1E9]/80">
          Open to junior engineering roles and creative collaborations.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="mailto:you@gracecodella.com" className="underline">
            you@gracecodella.com
          </a>
          <a href="https://linkedin.com/in/YOUR-HANDLE" className="underline">
            LinkedIn
          </a>
          <a href="https://github.com/YOUR-HANDLE" className="underline">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}