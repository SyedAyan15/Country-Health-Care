import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Nursing Support Services | Country Health and Care",
  description:
    "Professional, compassionate in-home nursing care tailored to your NDIS needs across Australia.",
  openGraph: {
    title: "NDIS Nursing Support Services | Country Health and Care",
    description:
      "Professional, compassionate in-home nursing care tailored to your NDIS needs across Australia.",
    url: "https://www.countryhealthandcare.com.au/services/nursing-support",
  },
  alternates: { canonical: "https://www.countryhealthandcare.com.au/services/nursing-support" },
};

export default function NursingPage() {
  return (
    <>
      <div className="svc-hero">
        <svg
          className="hero-curve-svg"
          viewBox="0 0 1440 400"
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
          <path
            className="hero-curve-path"
            d="M -120 360 C 180 320, 560 80, 1050 200 S 1380 280, 1560 140"
          />
          <path
            className="hero-curve-path-2"
            d="M -120 400 C 200 360, 590 120, 1080 235 S 1390 320, 1560 180"
          />
        </svg>
        <div className="svc-hero-inner">
          <div className="svc-breadcrumb">
            <a href="/">Home</a> &rsaquo; <span>Nursing Support</span>
          </div>
          <h1 className="svc-title">Nursing Support</h1>
          <p className="svc-tagline">
            <strong>
              Empowers you to manage your health with professional, compassionate care tailored to
              your individual needs.
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
            At Country Health and Care, our nursing supports are designed to provide safe,
            professional, and compassionate care tailored to your individual health needs. We work
            closely with you, your family, and your healthcare team to ensure your medical and daily
            care needs are managed effectively, while promoting independence and wellbeing.
          </p>
          <p>
            Our qualified nurses deliver person-centered care in the comfort of your home,
            supporting you to maintain your health, prevent complications, and live with confidence.
          </p>
        </div>
      </div>
      <div className="empower-section">
        <div className="empower-inner">
          <h2 className="empower-title">How We Empower Your Journey</h2>
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
                  <circle cx="63" cy="20" r="7" fill="#1e293b" />
                  <circle cx="137" cy="20" r="7" fill="#1e293b" />
                  <path
                    d="M63 20 Q63 54 100 58 Q137 54 137 20"
                    stroke="#1e293b"
                    strokeWidth="3.5"
                    fill="none"
                  />
                  <path
                    d="M100 58 L100 100 Q100 128 122 130"
                    stroke="#7dc242"
                    strokeWidth="4.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="132"
                    cy="130"
                    r="19"
                    fill="rgba(125,194,66,0.1)"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                  />
                  <circle cx="132" cy="130" r="9" fill="#7dc242" />
                  <line
                    x1="36"
                    y1="95"
                    x2="36"
                    y2="112"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="27.5"
                    y1="103.5"
                    x2="44.5"
                    y2="103.5"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Clinical Care at Home</h4>
              <ul className="emp-bullets">
                <li>We provide a range of nursing services tailored to your medical needs.</li>
                <li>
                  This includes wound care, medication management, and ongoing health monitoring.
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
                  <rect
                    x="15"
                    y="22"
                    width="170"
                    height="105"
                    rx="8"
                    fill="#f8fafc"
                    stroke="#1e293b"
                    strokeWidth="2"
                  />
                  <rect x="15" y="22" width="170" height="24" rx="8" fill="#1e293b" />
                  <circle cx="28" cy="34" r="4" fill="#ef4444" />
                  <circle cx="43" cy="34" r="4" fill="#fbbf24" />
                  <circle cx="58" cy="34" r="4" fill="#7dc242" />
                  <polyline
                    points="20,90 50,90 64,52 76,128 90,62 104,90 134,90 160,90 180,90"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <rect
                    x="80"
                    y="127"
                    width="40"
                    height="14"
                    rx="2"
                    fill="#e2e8f0"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="65"
                    y="141"
                    width="70"
                    height="8"
                    rx="4"
                    fill="#e2e8f0"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Supporting Complex Health Needs</h4>
              <ul className="emp-bullets">
                <li>We assist participants with high and complex care requirements.</li>
                <li>
                  Our focus is on delivering safe, consistent, and high-quality clinical support.
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
                  <ellipse cx="100" cy="150" rx="46" ry="6" fill="rgba(125,194,66,0.08)" />
                  <rect
                    x="70"
                    y="50"
                    width="60"
                    height="90"
                    rx="12"
                    fill="rgba(125,194,66,0.09)"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="80"
                    y="38"
                    width="40"
                    height="16"
                    rx="5"
                    fill="rgba(125,194,66,0.14)"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect x="75" y="22" width="50" height="20" rx="8" fill="#7dc242" />
                  <rect
                    x="77"
                    y="68"
                    width="46"
                    height="50"
                    rx="6"
                    fill="white"
                    stroke="rgba(125,194,66,0.3)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="100"
                    y1="76"
                    x2="100"
                    y2="110"
                    stroke="#7dc242"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="83"
                    y1="93"
                    x2="117"
                    y2="93"
                    stroke="#7dc242"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="140"
                    y="84"
                    width="28"
                    height="13"
                    rx="6.5"
                    fill="rgba(125,194,66,0.15)"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect
                    x="154"
                    y="84"
                    width="14"
                    height="13"
                    rx="6.5"
                    fill="rgba(125,194,66,0.4)"
                  />
                  <line x1="154" y1="84" x2="154" y2="97" stroke="#7dc242" strokeWidth="1.5" />
                  <rect
                    x="32"
                    y="84"
                    width="28"
                    height="13"
                    rx="6.5"
                    fill="rgba(125,194,66,0.15)"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect x="32" y="84" width="14" height="13" rx="6.5" fill="rgba(125,194,66,0.4)" />
                  <line x1="46" y1="84" x2="46" y2="97" stroke="#7dc242" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="emp-card-title">Medication and Health Management</h4>
              <ul className="emp-bullets">
                <li>We ensure medications are administered safely and effectively.</li>
                <li>Our team also supports you to better understand and manage your health.</li>
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
                  <ellipse
                    cx="100"
                    cy="114"
                    rx="72"
                    ry="20"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="30" r="14" stroke="#1e293b" strokeWidth="2" />
                  <path d="M86 50 Q100 42 114 50 L116 86 H84 Z" stroke="#1e293b" strokeWidth="2" />
                  <circle cx="36" cy="56" r="12" stroke="#1e293b" strokeWidth="2" />
                  <path d="M24 72 Q36 66 48 72 L50 108 H22 Z" stroke="#1e293b" strokeWidth="2" />
                  <circle cx="164" cy="56" r="12" stroke="#1e293b" strokeWidth="2" />
                  <path
                    d="M152 72 Q164 66 176 72 L178 108 H150 Z"
                    stroke="#1e293b"
                    strokeWidth="2"
                  />
                  <rect
                    x="82"
                    y="106"
                    width="36"
                    height="22"
                    rx="3"
                    fill="white"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <line x1="86" y1="114" x2="114" y2="114" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="86" y1="120" x2="110" y2="120" stroke="#94a3b8" strokeWidth="1" />
                  <path
                    d="M100 42 Q116 34 120 42 Q120 50 108 51 L104 55 L107 51 Q98 51 100 42Z"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Working With Your Healthcare Team</h4>
              <ul className="emp-bullets">
                <li>We collaborate with GPs, specialists, and allied health professionals.</li>
                <li>This ensures a coordinated approach to your care and overall wellbeing.</li>
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
              <h4 className="emp-card-title">Promoting Health and Independence</h4>
              <ul className="emp-bullets">
                <li>We support you to maintain your health while building your independence.</li>
                <li>Our goal is to help you feel confident and in control of your care.</li>
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
                  <circle
                    cx="90"
                    cy="85"
                    r="64"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                  />
                  <circle cx="90" cy="85" r="4" fill="#7dc242" />
                  <line
                    x1="90"
                    y1="85"
                    x2="90"
                    y2="42"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="90"
                    y1="85"
                    x2="118"
                    y2="100"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line x1="90" y1="24" x2="90" y2="33" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="90" y1="137" x2="90" y2="146" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="29" y1="85" x2="38" y2="85" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="142" y1="85" x2="151" y2="85" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="158" cy="38" r="24" fill="#7dc242" />
                  <polyline
                    points="148,38 156,47 170,28"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Responsive and Reliable Support</h4>
              <ul className="emp-bullets">
                <li>Our nursing services are flexible and responsive to your needs.</li>
                <li>We adapt your care as your health and circumstances change.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="why-section">
        <div className="why-inner">
          <h2 className="why-title">
            Why Choose <span>Country Health and Care</span> for your Nursing Support needs
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
