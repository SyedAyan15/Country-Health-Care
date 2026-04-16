import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychosocial Recovery Coach | NDIS | Country Health and Care",
  description:
    "NDIS Psychosocial Recovery Coaching to build resilience and confidence in your mental health recovery journey.",
  openGraph: {
    title: "Psychosocial Recovery Coach | NDIS | Country Health and Care",
    description:
      "NDIS Psychosocial Recovery Coaching to build resilience and confidence in your mental health recovery journey.",
    url: "https://www.countryhealthandcare.com.au/services/psychosocial-recovery-coach",
  },
  alternates: {
    canonical: "https://www.countryhealthandcare.com.au/services/psychosocial-recovery-coach",
  },
};

export default function RecoveryPage() {
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
            <a href="/">Home</a> &rsaquo; <span>Psychosocial Recovery Coach</span>
          </div>
          <h1 className="svc-title">Psychosocial Recovery Coach</h1>
          <p className="svc-tagline">
            <strong>
              Empowers you to build resilience, strengthen your wellbeing, and navigate your mental
              health recovery with confidence.
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
            At Country Health and Care, our Recovery Coaching service is designed to support
            individuals living with psychosocial disability to build a meaningful, independent, and
            fulfilling life. We take a person-centred and recovery-oriented approach, working
            alongside you to strengthen your capacity, resilience, and confidence.
          </p>
          <p>
            Our Recovery Coaches support you to better understand your mental health, navigate
            challenges, and stay connected with the supports and services that matter most to you.
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
                  <path
                    d="M100 140 Q32 100 32 60 A36 36 0 0 1 100 42 A36 36 0 0 1 168 60 Q168 100 100 140Z"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                  />
                  <polyline
                    points="100,118 100,65"
                    stroke="#7dc242"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <polygon points="100,55 90,72 110,72" fill="#7dc242" />
                  <circle cx="58" cy="30" r="5" fill="#fbbf24" />
                  <circle cx="142" cy="30" r="5" fill="#fbbf24" />
                  <circle cx="42" cy="52" r="4" fill="#fbbf24" />
                  <circle cx="158" cy="52" r="4" fill="#fbbf24" />
                  <circle cx="100" cy="22" r="5" fill="#fbbf24" />
                </svg>
              </div>
              <h4 className="emp-card-title">Supporting Your Recovery Goals</h4>
              <ul className="emp-bullets">
                <li>
                  We work with you to identify what recovery means to you and set achievable goals.
                </li>
                <li>
                  Our focus is on building a pathway towards greater independence and wellbeing.
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
                  <circle cx="55" cy="36" r="14" stroke="#1e293b" strokeWidth="2" />
                  <path d="M41 56 Q55 48 69 56 L72 95 H38 Z" stroke="#1e293b" strokeWidth="2" />
                  <line x1="38" y1="72" x2="55" y2="64" stroke="#1e293b" strokeWidth="2" />
                  <line x1="72" y1="72" x2="55" y2="64" stroke="#1e293b" strokeWidth="2" />
                  <rect
                    x="90"
                    y="28"
                    width="82"
                    height="104"
                    rx="5"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <line x1="103" y1="48" x2="159" y2="48" stroke="#7dc242" strokeWidth="2.5" />
                  <line
                    x1="103"
                    y1="62"
                    x2="155"
                    y2="62"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="4,2"
                  />
                  <line
                    x1="103"
                    y1="74"
                    x2="152"
                    y2="74"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="4,2"
                  />
                  <line
                    x1="103"
                    y1="86"
                    x2="148"
                    y2="86"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="4,2"
                  />
                  <line
                    x1="103"
                    y1="98"
                    x2="145"
                    y2="98"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="4,2"
                  />
                  <circle cx="152" cy="116" r="11" fill="#7dc242" stroke="none" />
                  <polyline
                    points="147,116 151,120 158,110"
                    stroke="white"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path d="M69 68 Q80 62 90 56" stroke="#1e293b" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="emp-card-title">Understanding Your NDIS Plan</h4>
              <ul className="emp-bullets">
                <li>We help you understand your plan and how to use it effectively.</li>
                <li>
                  This ensures your supports align with your recovery goals and changing needs.
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
              <h4 className="emp-card-title">Building Capacity and Resilience</h4>
              <ul className="emp-bullets">
                <li>
                  We support you to develop skills to manage daily challenges and build confidence.
                </li>
                <li>Our approach strengthens your ability to cope, adapt, and move forward.</li>
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
                  <circle cx="48" cy="36" r="13" stroke="#1e293b" strokeWidth="2" />
                  <path d="M35 55 Q48 47 61 55 L64 90 H32 Z" stroke="#1e293b" strokeWidth="2" />
                  <circle cx="152" cy="36" r="13" stroke="#1e293b" strokeWidth="2" />
                  <path
                    d="M139 55 Q152 47 165 55 L168 90 H136 Z"
                    stroke="#1e293b"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="58" r="18" fill="#edf8d4" stroke="#7dc242" strokeWidth="2" />
                  <path d="M92 58 L97 63 L109 51" stroke="#7dc242" strokeWidth="2.5" fill="none" />
                  <path d="M61 68 Q80 60 82 58" stroke="#1e293b" strokeWidth="2" />
                  <path d="M118 58 Q120 60 139 68" stroke="#1e293b" strokeWidth="2" />
                  <rect
                    x="22"
                    y="110"
                    width="46"
                    height="24"
                    rx="5"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="77"
                    y="110"
                    width="46"
                    height="24"
                    rx="5"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="132"
                    y="110"
                    width="46"
                    height="24"
                    rx="5"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="48"
                    y1="90"
                    x2="48"
                    y2="110"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                  <line
                    x1="100"
                    y1="76"
                    x2="100"
                    y2="110"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                  <line
                    x1="152"
                    y1="90"
                    x2="152"
                    y2="110"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Strengthening Connections and Supports</h4>
              <ul className="emp-bullets">
                <li>
                  We assist you to connect with services, providers, and your support network.
                </li>
                <li>
                  This includes linking you with health, community, and other essential supports.
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
              <h4 className="emp-card-title">Working Collaboratively With You</h4>
              <ul className="emp-bullets">
                <li>
                  We work alongside you, your family, and your support team in a respectful way.
                </li>
                <li>This ensures a coordinated and consistent approach to your recovery.</li>
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
                  <circle cx="100" cy="28" r="14" stroke="#1e293b" strokeWidth="2" />
                  <path d="M86 48 Q100 40 114 48 L116 72 H84 Z" stroke="#1e293b" strokeWidth="2" />
                  <line
                    x1="100"
                    y1="72"
                    x2="100"
                    y2="92"
                    stroke="#7dc242"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 92 Q68 108 45 132"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 92 Q132 108 155 132"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="45" cy="140" r="16" fill="#f4fce8" stroke="#7dc242" strokeWidth="2" />
                  <polyline
                    points="38,140 44,146 54,132"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="155"
                    cy="140"
                    r="16"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <polyline
                    points="148,140 154,146 164,132"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Promoting Choice and Control</h4>
              <ul className="emp-bullets">
                <li>We empower you to take greater control of your life and decisions.</li>
                <li>Our goal is to support you in living a life that is meaningful to you.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="why-section">
        <div className="why-inner">
          <h2 className="why-title">
            Why Choose <span>Country Health and Care</span> for your Psychosocial Recovery needs
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
