import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Support Coordination Services",
  description:
    "Professional NDIS Support Coordination services across Australia. We help you navigate your NDIS plan and connect with the right supports.",
  openGraph: {
    title: "NDIS Support Coordination Services | Country Health and Care",
    description:
      "Professional NDIS Support Coordination services across Australia. We help you navigate your NDIS plan and connect with the right supports.",
    url: "https://www.countryhealthandcare.com.au/services/support-coordination",
  },
  alternates: {
    canonical: "https://www.countryhealthandcare.com.au/services/support-coordination",
  },
};

export default function SupportCoordPage() {
  return (
    <>
      <div className="svc-hero">
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
          <path
            className="hero-curve-path"
            d="M -120 560 C 180 520, 560 80, 1050 200 S 1380 360, 1560 140"
          />
          <path
            className="hero-curve-path-2"
            d="M -120 620 C 200 575, 590 140, 1080 255 S 1390 410, 1560 200"
          />
        </svg>
        <div className="svc-hero-inner">
          <div className="svc-breadcrumb">
            <a href="/">Home</a> &rsaquo; <span>Support Coordination</span>
          </div>
          <h1 className="svc-title">Support Coordination</h1>
          <p className="svc-tagline">
            <strong>
              Empowers you through connection to services and supports that bring your NDIS plan to
              life.
            </strong>
          </p>
          <a href="/referral" className="enquire-btn">
            Enquire now
          </a>
        </div>
      </div>
      <div className="svc-intro-section">
        <div className="svc-intro-inner">
          <p>
            At Country Health and Care, we believe the right support coordination can make all the
            difference in your NDIS journey. We provide personalised and reliable support
            coordination that empowers you to access the services you need with confidence.
          </p>
          <p>
            Our dedicated team takes a compassionate and person-centred approach, ensuring your
            supports are meaningful, practical, and aligned with your goals. We work alongside you
            to understand your needs, navigate the NDIS, and overcome any challenges you may face.
          </p>
          <p>
            With strong local connections and a commitment to quality care, we ensure you are linked
            with the right providers and supports. At Country Health and Care, we are here to
            empower you to live more independently, achieve your goals, and get the most out of your
            NDIS plan.
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
                <li>We help you make sense of your NDIS plan, funding, and supports.</li>
                <li>
                  Our goal is to empower you to confidently use your plan to its full potential.
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
              <h4 className="emp-card-title">Connecting You to the Right Supports</h4>
              <ul className="emp-bullets">
                <li>We link you with trusted providers that suit your needs and goals.</li>
                <li>Every service is chosen to support your independence and wellbeing.</li>
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
              <h4 className="emp-card-title">Tracking Progress and Outcomes</h4>
              <ul className="emp-bullets">
                <li>We work with you to review your goals and monitor your progress.</li>
                <li>This ensures your supports continue to meet your changing needs.</li>
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
                  <path d="M86 48 Q100 40 114 48 L117 82 H83 Z" stroke="#1e293b" strokeWidth="2" />
                  <rect
                    x="104"
                    y="52"
                    width="24"
                    height="30"
                    rx="3"
                    fill="#f4fce8"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                  />
                  <line x1="108" y1="62" x2="124" y2="62" stroke="#7dc242" strokeWidth="1.5" />
                  <line x1="108" y1="70" x2="120" y2="70" stroke="#7dc242" strokeWidth="1.5" />
                  <line x1="83" y1="62" x2="54" y2="72" stroke="#1e293b" strokeWidth="2" />
                  <line x1="117" y1="62" x2="146" y2="72" stroke="#1e293b" strokeWidth="2" />
                  <rect
                    x="24"
                    y="92"
                    width="52"
                    height="34"
                    rx="6"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect
                    x="74"
                    y="92"
                    width="52"
                    height="34"
                    rx="6"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <rect
                    x="124"
                    y="92"
                    width="52"
                    height="34"
                    rx="6"
                    fill="#edf8d4"
                    stroke="#7dc242"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="82"
                    x2="50"
                    y2="92"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                  <line
                    x1="100"
                    y1="82"
                    x2="100"
                    y2="92"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                  <line
                    x1="150"
                    y1="82"
                    x2="150"
                    y2="92"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                </svg>
              </div>
              <h4 className="emp-card-title">Support Implementation</h4>
              <ul className="emp-bullets">
                <li>We organise and manage your supports so everything works together smoothly.</li>
                <li>Our team ensures your services are consistent, reliable, and effective.</li>
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
              <h4 className="emp-card-title">Working with Your Team</h4>
              <ul className="emp-bullets">
                <li>We collaborate with your providers, plan manager, and key supports.</li>
                <li>This helps create a strong, coordinated approach to your care.</li>
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
              <h4 className="emp-card-title">Building Independence and Confidence</h4>
              <ul className="emp-bullets">
                <li>We support you to develop skills and increase your independence.</li>
                <li>Our focus is on empowering you to live life on your own terms.</li>
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
            Why Choose <span>Country Health and Care</span> for Your Support Coordination
          </h2>
          <div className="marquee-wrap">
            <div className="marquee-track">
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Person-Centred Approach
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
                <span className="wc-check">&#10003;</span>Holistic & Individualised Support
              </div>
              <div className="wc-card">
                <span className="wc-check">&#10003;</span>Person-Centred Approach
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
                <span className="wc-check">&#10003;</span>Holistic & Individualised Support
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
