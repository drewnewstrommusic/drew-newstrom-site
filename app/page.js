// =========================================
// Drew Newstrom — Polished Design (v2)
// Drop‑in Next.js App Router build
// =========================================

// =============================
// FILE: app/layout.js
// =============================
export const metadata = {
  title: "Drew Newstrom | Musician & Audio Engineer",
  description: "Recording, mixing, session guitar, live performances, and beat production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#F6F3EC",
          color: "#2E2A27",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

// =============================
// FILE: app/page.js
// =============================
function Section({ children, style }) {
  return (
    <section
      style={{
        padding: "90px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function Card({ title, text }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.12)",
        padding: 24,
        borderRadius: 16,
        backdropFilter: "blur(4px)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ opacity: 0.9 }}>{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <strong style={{ letterSpacing: 1 }}>DREW NEWSTROM</strong>
        <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
          <a href="#services">Services</a>
          <a href="#music">Music</a>
          <a href="#beats">Beats</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <Section style={{ paddingTop: 120, paddingBottom: 120 }}>
        <h1
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            marginBottom: 16,
            lineHeight: 1.05,
          }}
        >
          Drew Newstrom
        </h1>

        <p style={{ fontSize: 18, marginBottom: 30 }}>
          Musician • Audio Engineer • Producer
        </p>

        <p style={{ maxWidth: 520, opacity: 0.8, marginBottom: 40 }}>
          Helping artists turn ideas into finished records through recording and
          mixing, session guitar work, live performance, and original beats.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              background: "#7F8F7A",
              color: "white",
              padding: "14px 26px",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            Book Services
          </a>

          <a
            href="#beats"
            style={{
              border: "1px solid #7F8F7A",
              padding: "14px 26px",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            Browse Beats
          </a>
        </div>
      </Section>

      {/* SERVICES */}
      <div id="services" style={{ background: "#7F8F7A", color: "white" }}>
        <Section>
          <h2 style={{ marginTop: 0, marginBottom: 40 }}>Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
            }}
          >
            <Card title="Recording & Mixing" text="Warm, detailed mixes with an emphasis on feel and clarity." />
            <Card title="Session Guitar" text="Electric or acoustic parts crafted specifically for your song." />
            <Card title="Live Performances" text="Solo gigs for venues, private events, and chill sets." />
            <Card title="Beat Production" text="Original beats with simple licensing and instant delivery." />
          </div>
        </Section>
      </div>

      {/* MUSIC */}
      <Section id="music">
        <h2>Music</h2>
        <p style={{ opacity: 0.7 }}>Releases, collaborations, and streaming embeds will live here soon.</p>
      </Section>

      {/* BEATS */}
      <div id="beats" style={{ background: "#5E6F5B", color: "white" }}>
        <Section>
          <h2>Beats</h2>
          <p style={{ maxWidth: 520, opacity: 0.85 }}>
            Browse original beats available for licensing. Instant downloads and
            secure checkout coming soon.
          </p>
        </Section>
      </div>

      {/* CONTACT */}
      <Section id="contact">
        <h2>Contact / Book Me</h2>
        <p style={{ opacity: 0.7 }}>Have a project or gig in mind? Let’s talk.</p>

        <div style={{ marginTop: 16 }}>
          <a
            href="mailto:hello@drewnewstrommusic.com"
            style={{ color: "#6B4F3F", fontWeight: 600 }}
          >
            hello@drewnewstrommusic.com
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#2E2A27",
          color: "#F6F3EC",
          padding: "40px 24px",
          textAlign: "center",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Drew Newstrom
      </footer>
    </main>
  );
}

