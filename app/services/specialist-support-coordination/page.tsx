import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Support Coordination | NDIS",
  description:
    "Specialist Support Coordination for complex NDIS needs. Expert support to reduce risk and build stability across Australia.",
  openGraph: {
    title: "Specialist Support Coordination | NDIS | Country Health and Care",
    description:
      "Specialist Support Coordination for complex NDIS needs. Expert support to reduce risk and build stability across Australia.",
    url: "https://www.countryhealthandcare.com.au/services/specialist-support-coordination",
  },
  alternates: {
    canonical: "https://www.countryhealthandcare.com.au/services/specialist-support-coordination",
  },
};

export default function SpecialistPage() {
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
            <a href="/">Home</a> &rsaquo; <span>Specialist Support Coordination</span>
          </div>
          <h1 className="svc-title">Specialist Support Coordination</h1>
          <p className="svc-tagline">
            <strong>
              Empowers you to navigate complex supports, reduce risks, and achieve stability through
              coordinated, high-level NDIS support.
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
            At Country Health and Care, our Specialist Support Coordination (Level 3) service is
            designed for participants with complex needs who require a higher level of support to
            navigate the NDIS. We work alongside you to address barriers, manage risks, and ensure
            your supports are working effectively together.
          </p>
          <p>
            Our role is to provide intensive, tailored support that strengthens your ability to
            manage your plan, while ensuring your safety, stability, and long-term outcomes are
            prioritized. We collaborate closely with your support network, including allied health
            professionals, service providers, and the NDIA, to create a coordinated and responsive
            approach.
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
                  <circle cx="100" cy="28" r="14" stroke="#1e293b" strokeWidth="2" />
                  <path d="M86 48 Q100 40 114 48 L116 62 H84 Z" stroke="#1e293b" strokeWidth="2" />
                  <path
                    d="M100 60 L158 82 L158 118 Q158 148 100 158 Q42 148 42 118 L42 82 Z"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                  />
                  <polygon
                    points="100,90 85,120 115,120"
                    fill="#fef3c7"
                    stroke="#f97316"
                    strokeWidth="2"
                  />
                  <line x1="100" y1="100" x2="100" y2="112" stroke="#f97316" strokeWidth="2.5" />
                  <circle cx="100" cy="116" r="2.5" fill="#f97316" />
                </svg>
              </div>
              <h4 className="emp-card-title">Managing Complex Needs and Risks</h4>
              <ul className="emp-bullets">
                <li>
                  We support you to identify and respond to challenges that may impact your
                  wellbeing.
                </li>
                <li>
                  Our focus is on reducing risks, improving stability, and building sustainable
                  supports.
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
              <h4 className="emp-card-title">Strengthening Your Support Network</h4>
              <ul className="emp-bullets">
                <li>We work closely with your providers, clinicians, and key stakeholders.</li>
                <li>
                  This ensures all supports are aligned, coordinated, and working towards your
                  goals.
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
              <h4 className="emp-card-title">Navigating the NDIS with Confidence</h4>
              <ul className="emp-bullets">
                <li>We guide you through complex systems, processes, and plan requirements.</li>
                <li>Our team helps you understand your funding and make informed decisions.</li>
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
                    x="20"
                    y="40"
                    width="120"
                    height="110"
                    rx="8"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect x="20" y="40" width="120" height="30" rx="8" fill="#7dc242" />
                  <line
                    x1="65"
                    y1="28"
                    x2="65"
                    y2="54"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="95"
                    y1="28"
                    x2="95"
                    y2="54"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="45" cy="90" r="5" fill="#7dc242" />
                  <circle cx="80" cy="90" r="5" fill="#7dc242" />
                  <circle cx="115" cy="90" r="5" fill="#94a3b8" />
                  <circle cx="45" cy="115" r="5" fill="#94a3b8" />
                  <circle cx="80" cy="115" r="5" fill="#f97316" />
                  <circle cx="115" cy="115" r="5" fill="#94a3b8" />
                  <circle cx="45" cy="140" r="5" fill="#94a3b8" />
                  <circle cx="80" cy="140" r="5" fill="#94a3b8" />
                  <circle cx="160" cy="65" r="28" fill="#7dc242" stroke="none" />
                  <polyline
                    points="149,65 157,74 173,56"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Crisis Planning and Ongoing Support</h4>
              <ul className="emp-bullets">
                <li>
                  We assist in developing strategies to manage crisis situations if they arise.
                </li>
                <li>This ensures you have the right supports in place when you need them most.</li>
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
              <h4 className="emp-card-title">Building Capacity and Independence</h4>
              <ul className="emp-bullets">
                <li>
                  Our goal is to strengthen your ability to manage your own supports over time.
                </li>
                <li>
                  We empower you to develop skills, confidence, and greater control of your plan.
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
              <h4 className="emp-card-title">Monitoring and Adapting Supports</h4>
              <ul className="emp-bullets">
                <li>
                  We regularly review how your supports are working and make adjustments as needed.
                </li>
                <li>
                  This ensures your plan continues to meet your evolving needs and circumstances.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Support Coordination Flow Diagram Section */}
      <div className="svc-flow-section">
        <div className="svc-flow-inner">
          <div className="svc-flow-img-wrap">
            <img
              className="svc-flow-img"
              src="/images/flow-diagram.webp"
              alt="Working for you – Support Coordination flow diagram"
            />
          </div>
          <div className="svc-flow-access">
            <h3 className="svc-flow-access-heading">Who can access these services?</h3>
            <p>
              Support Coordination is funded by the{" "}
              <a
                href="https://www.ndis.gov.au/"
                target="_blank"
                rel="noopener"
                className="svc-link svc-link--ndia"
              >
                National Disability Insurance Agency (NDIA)
              </a>{" "}
              and is allocated to assist you with implementing your plan. When you&rsquo;re
              developing your NDIS Plan, talk to your planner about the assistance you may need.
            </p>
            <p>
              Do you have other sources of funding, such as{" "}
              <a
                href="https://www.tac.vic.gov.au/"
                target="_blank"
                rel="noopener"
                className="svc-link svc-link--tac"
              >
                Transport Accident Commission (TAC)
              </a>
              ,{" "}
              <a
                href="https://www.worksafe.vic.gov.au/insurance"
                target="_blank"
                rel="noopener"
                className="svc-link svc-link--wc"
              >
                WorkCover
              </a>{" "}
              or{" "}
              <a
                href="https://www.dva.gov.au/"
                target="_blank"
                rel="noopener"
                className="svc-link svc-link--dva"
              >
                Department of Veterans Affairs funding
              </a>
              ? We can assist you to coordinate your services as needed.
            </p>
          </div>
        </div>
      </div>

      <section className="why-section">
        <div className="why-inner">
          <h2 className="why-title">
            Why Choose <span>Country Health and Care</span> for your Specialist Support Coordination
            needs
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
