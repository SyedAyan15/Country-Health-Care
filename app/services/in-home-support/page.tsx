import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "In Home Support Services | NDIS | Country Health and Care",
  description:
    "Personalised in-home NDIS support to help you live safely and independently in your own home.",
  openGraph: {
    title: "In Home Support Services | NDIS | Country Health and Care",
    description:
      "Personalised in-home NDIS support to help you live safely and independently in your own home.",
    url: "https://www.countryhealthandcare.com.au/services/in-home-support",
  },
  alternates: { canonical: "https://www.countryhealthandcare.com.au/services/in-home-support" },
};

export default function InHomePage() {
  return (
    <>
      <div className="svc-hero">
        <div className="svc-hero-inner">
          <div className="svc-breadcrumb">
            <a href="/">Home</a> &rsaquo; <span>In Home Support</span>
          </div>
          <h1 className="svc-title">In Home Support</h1>
          <p className="svc-tagline">
            <strong>
              Empowers you to live safely and independently at home with personalised, reliable
              daily support.
            </strong>
          </p>
          <a href="/referral" className="enquire-btn">
            Enquire Now
          </a>
        </div>
      </div>
      <div className="svc-intro-section">
        <div className="svc-intro-inner">
          <p>
            At Country Health and Care, we provide flexible in-home supports designed to help you
            live comfortably and independently in your own home. Our services are tailored to your
            daily needs, preferences, and personal goals, ensuring you receive care that truly works
            for you.
          </p>
        </div>
      </div>
      <div className="empower-section">
        <div className="empower-inner">
          <h2 className="empower-title">How We Empower You</h2>
          <div className="emp-grid">
            <div className="emp-card reveal">
              <div className="emp-illu">
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon
                    points="100,18 172,78 28,78"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="42"
                    y="78"
                    width="116"
                    height="74"
                    rx="3"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect
                    x="80"
                    y="108"
                    width="40"
                    height="44"
                    rx="4"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <circle cx="115" cy="132" r="3" fill="#7dc242" />
                  <path
                    d="M100 90 Q86 78 86 68 A14 14 0 0 1 100 58 A14 14 0 0 1 114 68 Q114 78 100 90Z"
                    fill="#7dc242"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Personalised Support at Home</h4>
              <ul className="emp-bullets">
                <li>
                  We assist with everyday tasks to make daily life easier and more manageable.
                </li>
                <li>
                  From personal care to household activities, our focus is on supporting you while
                  maintaining your independence and dignity.
                </li>
              </ul>
            </div>
            <div className="emp-card reveal">
              <div className="emp-illu">
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon
                    points="100,8 104,20 117,20 107,27 111,40 100,33 89,40 93,27 83,20 96,20"
                    fill="#fbbf24"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />
                  <circle cx="100" cy="62" r="14" stroke="#1e293b" strokeWidth="2" />
                  <path d="M86 82 Q100 74 114 82 L116 112 H84 Z" stroke="#1e293b" strokeWidth="2" />
                  <line x1="90" y1="112" x2="80" y2="140" stroke="#1e293b" strokeWidth="2" />
                  <line x1="110" y1="112" x2="120" y2="140" stroke="#1e293b" strokeWidth="2" />
                  <line x1="84" y1="88" x2="65" y2="78" stroke="#1e293b" strokeWidth="2" />
                  <line x1="116" y1="88" x2="135" y2="100" stroke="#1e293b" strokeWidth="2" />
                  <path
                    d="M25 148 Q62 132 100 118 Q138 104 172 82"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    strokeDasharray="6,3"
                  />
                  <polygon points="172,77 166,86 179,86" fill="#7dc242" stroke="none" />
                </svg>
              </div>
              <h4 className="emp-card-title">Supporting Your Independence</h4>
              <ul className="emp-bullets">
                <li>
                  We focus on building your skills and confidence to help you live more
                  independently.
                </li>
                <li>
                  Our approach empowers you to make your own choices and stay in control of your
                  daily life.
                </li>
              </ul>
            </div>
            <div className="emp-card reveal">
              <div className="emp-illu">
                <svg
                  viewBox="0 0 200 160"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="50" cy="36" r="13" stroke="#1e293b" strokeWidth="2" />
                  <path d="M37 55 Q50 47 63 55 L65 88 H35 Z" stroke="#1e293b" strokeWidth="2" />
                  <path d="M63 66 Q74 62 86 60" stroke="#1e293b" strokeWidth="2" />
                  <rect
                    x="86"
                    y="40"
                    width="84"
                    height="56"
                    rx="4"
                    fill="#f8fafc"
                    stroke="#1e293b"
                    strokeWidth="2"
                  />
                  <rect
                    x="113"
                    y="96"
                    width="30"
                    height="8"
                    rx="1"
                    fill="#e2e8f0"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <polyline
                    points="96,86 110,72 124,78 138,60 156,52"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <circle cx="156" cy="52" r="4" fill="#7dc242" stroke="none" />
                  <line x1="156" y1="52" x2="165" y2="44" stroke="#f97316" strokeWidth="2" />
                  <polygon points="165,40 161,48 169,48" fill="#f97316" stroke="none" />
                  <rect
                    x="30"
                    y="104"
                    width="140"
                    height="6"
                    rx="2"
                    fill="#e2e8f0"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Care That Adapts to You</h4>
              <ul className="emp-bullets">
                <li>As your needs change, your supports will adapt with you.</li>
                <li>
                  We work alongside you to ensure your in-home care continues to meet your goals and
                  lifestyle.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="why-section">
        <div className="why-inner">
          <h2 className="why-title">
            Why Choose <span>Country Health and Care</span> for your In Home Support needs
          </h2>
          <div className="marquee-wrap">
            <div className="marquee-track">
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Person-Centred Approach
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Experienced & Compassionate Team
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Strong Local Connections
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Personalised Support Plans
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Flexible Service Delivery
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Goal-Focused Support
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Transparent & Ethical Practice
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>In-Home & Telehealth Options
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Dedicated Support Coordinators
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Culturally Sensitive Care
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Ongoing Progress Monitoring
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Person-Centred Approach
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Experienced & Compassionate Team
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Strong Local Connections
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Personalised Support Plans
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Flexible Service Delivery
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Goal-Focused Support
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Transparent & Ethical Practice
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>In-Home & Telehealth Options
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Dedicated Support Coordinators
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Culturally Sensitive Care
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Ongoing Progress Monitoring
              </div>
            </div>
          </div>
          <div className="why-cta">
            <a href="/referral" className="enquire-btn">
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
