import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function MoodBoardCaseStudy() {
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
        <a href="/" className="text-sm underline underline-offset-4">
          ← Back home
        </a>
      </header>

      <article className="max-w-3xl mx-auto px-10 py-20">
        {/* Hero */}
        <header>
          <p className="text-sm text-[#B0553E] mb-3">Selected work</p>
          <h1
            className="text-4xl leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mood Board Builder
          </h1>
          <p className="mt-4 text-lg text-[#2B211C]/70 max-w-xl">
            A drag-and-drop tool for assembling visual style boards for
            event planning — colors, fonts, and reference images in one
            exportable canvas.
          </p>

          {/* Stack tags */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {["Next.js", "TypeScript", "Tailwind", "Supabase", "react-rnd"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#2B211C]/20 px-3 py-1 text-[#2B211C]/70"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Links */}
          <div className="mt-6 flex gap-6 text-sm">
            <a
              href="#"
              className="bg-[#B0553E] text-[#F6F1E9] px-5 py-2 rounded-sm"
            >
              Live demo →
            </a>
            <a
              href="#"
              className="border border-[#2B211C] px-5 py-2 rounded-sm"
            >
              Source code
            </a>
          </div>
        </header>

        {/* Screenshot */}
        <div className="mt-14 aspect-video w-full rounded-md border border-[#B0553E]/40 bg-[#E4D9C7] flex items-center justify-center text-[#2B211C]/40 text-sm">
          Screenshot / demo GIF goes here
        </div>

        {/* Problem */}
        <section className="mt-16">
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The problem
          </h2>
          <p className="text-[#2B211C]/70 leading-relaxed">
            Event planners often start with scattered inspiration —
            Pinterest boards, screenshots, swatches from a paint app — with
            no single place to bring color, imagery, and typography together
            into a shareable style direction before committing to a full
            design.
          </p>
        </section>

        {/* Key decisions */}
        <section className="mt-14">
          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Key decisions
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "Flexible canvas data model",
                body: "Every board element — color, image, or text — is stored as a row with a shared shape (position, size) and a flexible content field. This kept the canvas rendering logic simple: one component branches on type instead of maintaining several parallel systems.",
              },
              {
                title: "Static layout before interactivity",
                body: "Built the visual design with hardcoded elements first, before adding any drag/resize behavior. This kept styling decisions separate from interaction bugs — easier to debug one thing at a time.",
              },
              {
                title: "Client-side palette extraction",
                body: "Dominant colors are pulled from an uploaded image in the browser rather than on a server — no upload round-trip needed just to preview a palette, which keeps the board feeling immediate.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-md bg-[#E4D9C7] p-6"
              >
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-[#2B211C]/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I'd do differently */}
        <section className="mt-14">
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I'd do differently
          </h2>
          <p className="text-[#2B211C]/70 leading-relaxed">
            Notes on trade-offs, things that didn't work on the first pass,
            and what a v2 would tackle — this is the section worth being
            specific and honest in.
          </p>
        </section>
      </article>
    </main>
  );
}