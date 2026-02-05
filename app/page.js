export default function Home() {
  return (
    <main style={{
      fontFamily: "system-ui, sans-serif",
      background: "#F6F3EC",
      minHeight: "100vh",
      padding: "60px 24px"
    }}>
      <h1 style={{fontSize:"48px"}}>Drew Newstrom</h1>
      <p>Musician • Audio Engineer • Producer</p>

      <section style={{marginTop:"40px"}}>
        <h2>Services</h2>
        <ul>
          <li>Recording & Mixing</li>
          <li>Session Guitar Work</li>
          <li>Live Performances</li>
          <li>Beat Production</li>
        </ul>
      </section>

      <section style={{marginTop:"40px"}}>
        <h2>Music & Beats</h2>
        <p>Beats and releases coming soon.</p>
      </section>

      <section style={{marginTop:"40px"}}>
        <h2>Contact</h2>
        <p>drewnewstrommusic.com</p>
      </section>
    </main>
  );
}
