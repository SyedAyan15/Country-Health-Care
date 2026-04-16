import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Country Health and Care | NDIS Services Across Australia",
  description:
    "Compassionate, person-centred NDIS services including Support Coordination, Nursing Support, In-Home Support and more across Australia.",
  openGraph: {
    title: "Country Health and Care | NDIS Services Across Australia",
    description: "Compassionate, person-centred NDIS services across Australia.",
    url: "https://www.countryhealthandcare.com.au",
  },
  alternates: { canonical: "https://www.countryhealthandcare.com.au" },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        {/* decorative animated curve */}
        <svg
          className="hero-curve-svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroSwooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Main swoosh arc: lower-left → upper-right, single clean curve */}
          <path
            className="hero-curve-path"
            d="M -120 560 C 180 520, 560 80, 1050 200 S 1380 360, 1560 140"
          />
          {/* Echo arc: slightly below, thinner */}
          <path
            className="hero-curve-path-2"
            d="M -120 620 C 200 575, 590 140, 1080 255 S 1390 410, 1560 200"
          />
        </svg>

        <div className="home-inner">
          <div>
            <h1 id="hero-h1" className="home-h1">
              Care That{" "}
              <span className="emp-underline-wrap">
                Empowers
                <svg
                  className="emp-underline-svg"
                  viewBox="0 0 240 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="emp-underline-path" d="M 4 10 Q 60 3, 120 8 Q 180 13, 236 6" />
                </svg>
              </span>
              <br />
              You to Thrive
            </h1>
            <p id="hero-p" className="home-p">
              Country Health and Care provides compassionate, person-centred NDIS services across
              Australia. We are dedicated to empowering individuals living with disability to live
              independently, achieve their goals, and participate fully in their community.
            </p>
            <div id="hero-btns" className="home-btns">
              <a href="/services/support-coordination" className="btn-outline">
                Our Services
              </a>
              <a href="/referral" className="enquire-btn">
                Enquire Now
              </a>
            </div>
          </div>
          <div id="hero-logo" className="home-logo-wrap">
            <svg
              className="logo-img"
              role="img"
              aria-label="Country Health and Care"
              viewBox="0 0 1600 1297"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <image
                width="1600"
                height="1297"
                href="/images/logo-hero.webp"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="home-services-inner">
          <span className="section-tag">Our Services</span>
          <h2 className="section-h2">How We Empower You</h2>
          <p className="section-p">
            We offer a comprehensive range of NDIS services, each delivered with compassion,
            professionalism, and a deep commitment to your goals and independence.
          </p>
          <div className="svc-cards-grid">
            <a href="/services/support-coordination" className="svc-home-card">
              <span className="svc-home-ico">
                <svg
                  viewBox="0 0 52 52"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Central person (coordinator/client) */}
                  <circle
                    cx="26"
                    cy="26"
                    r="7"
                    fill="rgba(125,194,66,0.15)"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <circle cx="26" cy="23" r="2.5" fill="#7dc242" />
                  <path d="M21 30 Q26 27 31 30" stroke="#7dc242" strokeWidth="1.8" />
                  {/* Spoke lines */}
                  <line
                    x1="26"
                    y1="19"
                    x2="26"
                    y2="10"
                    stroke="#7dc242"
                    strokeWidth="1.8"
                    strokeDasharray="2.5,2"
                  />
                  <line
                    x1="33"
                    y1="21"
                    x2="40"
                    y2="14"
                    stroke="#7dc242"
                    strokeWidth="1.8"
                    strokeDasharray="2.5,2"
                  />
                  <line
                    x1="33"
                    y1="30"
                    x2="42"
                    y2="34"
                    stroke="#7dc242"
                    strokeWidth="1.8"
                    strokeDasharray="2.5,2"
                  />
                  <line
                    x1="19"
                    y1="30"
                    x2="10"
                    y2="34"
                    stroke="#7dc242"
                    strokeWidth="1.8"
                    strokeDasharray="2.5,2"
                  />
                  <line
                    x1="19"
                    y1="21"
                    x2="12"
                    y2="14"
                    stroke="#7dc242"
                    strokeWidth="1.8"
                    strokeDasharray="2.5,2"
                  />
                  {/* Outer service nodes */}
                  <circle cx="26" cy="7" r="4" fill="#7dc242" />
                  <circle
                    cx="43"
                    cy="11"
                    r="4"
                    fill="rgba(125,194,66,0.6)"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="45"
                    cy="34"
                    r="4"
                    fill="rgba(125,194,66,0.6)"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="7"
                    cy="34"
                    r="4"
                    fill="rgba(125,194,66,0.6)"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="9"
                    cy="11"
                    r="4"
                    fill="rgba(125,194,66,0.6)"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <h3>Support Coordination</h3>
              <p>
                Empowers you through connection to services and supports that bring your NDIS plan
                to life.
              </p>
              <span className="svc-arrow">Learn more &rarr;</span>
            </a>
            <a href="/services/specialist-support-coordination" className="svc-home-card">
              <span className="svc-home-ico">
                <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path
                    d="M26 6 L44 14 L44 28 Q44 40 26 48 Q8 40 8 28 L8 14 Z"
                    stroke="#7dc242"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(125,194,66,0.08)"
                  />
                  <polygon
                    points="26,18 27.8,23.5 33.5,23.5 28.9,26.9 30.7,32.5 26,29 21.3,32.5 23.1,26.9 18.5,23.5 24.2,23.5"
                    fill="#7dc242"
                  />
                </svg>
              </span>
              <h3>Specialist Support Coordination</h3>
              <p>
                Navigate complex supports, reduce risks, and achieve stability through high-level
                coordinated NDIS support.
              </p>
              <span className="svc-arrow">Learn more &rarr;</span>
            </a>
            <a href="/services/psychosocial-recovery-coach" className="svc-home-card">
              <span className="svc-home-ico">
                <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path
                    d="M26 40 C26 40 10 30 10 18 A8 8 0 0 1 26 16 A8 8 0 0 1 42 18 C42 30 26 40 26 40Z"
                    stroke="#7dc242"
                    strokeWidth="2.2"
                    fill="rgba(125,194,66,0.1)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 22 Q26 18 32 22"
                    stroke="#0f1837"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="24" r="2" fill="#7dc242" />
                  <circle cx="32" cy="24" r="2" fill="#7dc242" />
                </svg>
              </span>
              <h3>Psychosocial Recovery Coach</h3>
              <p>
                Build resilience and navigate your mental health recovery journey with confidence
                and support.
              </p>
              <span className="svc-arrow">Learn more &rarr;</span>
            </a>
            <a href="/services/nursing-support" className="svc-home-card">
              <span className="svc-home-ico">
                <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <circle
                    cx="26"
                    cy="30"
                    r="14"
                    stroke="#7dc242"
                    strokeWidth="2.2"
                    fill="rgba(125,194,66,0.08)"
                  />
                  <line
                    x1="26"
                    y1="22"
                    x2="26"
                    y2="38"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18"
                    y1="30"
                    x2="34"
                    y2="30"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 20 C14 12 22 8 26 8 C30 8 38 12 38 20"
                    stroke="#0f1837"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="14" cy="22" r="3" fill="#0f1837" />
                  <circle cx="38" cy="22" r="3" fill="#0f1837" />
                </svg>
              </span>
              <h3>Nursing Support</h3>
              <p>
                Professional, compassionate nursing care tailored to your individual health needs,
                in your own home.
              </p>
              <span className="svc-arrow">Learn more &rarr;</span>
            </a>
            <a href="/services/in-home-support" className="svc-home-card">
              <span className="svc-home-ico">
                <svg
                  viewBox="0 0 52 52"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M26 7 L45 23 L38 23 L38 45 L14 45 L14 23 L7 23 Z"
                    fill="rgba(125,194,66,0.12)"
                    stroke="#7dc242"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M20 45 L20 35 Q20 29 26 29 Q32 29 32 35 L32 45"
                    fill="rgba(125,194,66,0.25)"
                    stroke="#7dc242"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M26 24 Q22 20 22 17.5 A3.8 3.8 0 0 1 26 15 A3.8 3.8 0 0 1 30 17.5 Q30 20 26 24Z"
                    fill="#f97316"
                  />
                </svg>
              </span>
              <h3>In Home Support</h3>
              <p>
                Live safely and independently at home with personalised, reliable daily support
                tailored to your needs.
              </p>
              <span className="svc-arrow">Learn more &rarr;</span>
            </a>
            <a href="/services/social-recreation-community" className="svc-home-card">
              <span className="svc-home-ico">
                <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <circle cx="26" cy="13" r="6" stroke="#7dc242" strokeWidth="2.2" />
                  <circle cx="10" cy="20" r="5" stroke="#7dc242" strokeWidth="2" />
                  <circle cx="42" cy="20" r="5" stroke="#7dc242" strokeWidth="2" />
                  <path
                    d="M16 44 C16 36 36 36 36 44"
                    stroke="#7dc242"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 42 C4 36 14 33 16 36"
                    stroke="#0f1837"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 42 C48 36 38 33 36 36"
                    stroke="#0f1837"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="26" cy="28" r="2.5" fill="#7dc242" />
                  <line x1="26" y1="19" x2="26" y2="25.5" stroke="#7dc242" strokeWidth="2" />
                </svg>
              </span>
              <h3>Social, Recreation &amp; Community</h3>
              <p>
                Connect with your community, build relationships, and engage in activities that
                matter to you.
              </p>
              <span className="svc-arrow">Learn more &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 5%", background: "var(--navy)", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Nunito',sans-serif",
              fontWeight: "900",
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
              lineHeight: "1.8",
              marginBottom: "32px",
            }}
          >
            Reach out today and let us help you navigate your NDIS journey with confidence and care.
          </p>
          <a href="/referral" className="enquire-btn">
            Enquire Now
          </a>
        </div>
      </section>
    </>
  );
}
