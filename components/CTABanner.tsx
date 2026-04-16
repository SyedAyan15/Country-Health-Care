import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{ padding: "80px 5%", background: "var(--navy)", textAlign: "center" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Nunito,sans-serif",
            fontWeight: 900,
            fontSize: "clamp(26px,3.5vw,40px)",
            color: "white",
            marginBottom: "16px",
          }}
        >
          Ready to Get Started?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Reach out today and let us help you navigate your NDIS journey with confidence and care.
        </p>
        <Link href="/referral" className="enquire-btn">
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
