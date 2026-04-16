import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, tips and resources about NDIS services, disability support and community care from Country Health and Care.",
  alternates: { canonical: "https://www.countryhealthandcare.com.au/blog" },
};

export default function BlogPage() {
  return (
    <div style={{ padding: "100px 5%", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      <h1
        style={{
          fontFamily: "Nunito,sans-serif",
          fontWeight: 900,
          fontSize: "clamp(28px,4vw,44px)",
          color: "var(--navy)",
          marginBottom: "16px",
        }}
      >
        Blog
      </h1>
      <p style={{ fontSize: "18px", color: "var(--muted)" }}>
        Coming soon — helpful resources and news about NDIS services and community care.
      </p>
    </div>
  );
}
