import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Social, Recreation & Community Participation | NDIS | Country Health and Care",
  description:
    "NDIS Social, Recreation and Community Participation support to connect you with your community and build independence.",
  openGraph: {
    title: "Social, Recreation & Community Participation | NDIS | Country Health and Care",
    description:
      "NDIS Social, Recreation and Community Participation support to connect you with your community and build independence.",
    url: "https://www.countryhealthandcare.com.au/services/social-recreation-community",
  },
  alternates: {
    canonical: "https://www.countryhealthandcare.com.au/services/social-recreation-community",
  },
};

export default function SocialPage() {
  return (
    <>
      <div className="svc-hero">
        <div className="svc-hero-inner">
          <div className="svc-breadcrumb">
            <a href="/">Home</a> &rsaquo;{" "}
            <span>Social, Recreation and Community Participation</span>
          </div>
          <h1 className="svc-title">Social, Recreation and Community Participation</h1>
          <p className="svc-tagline">
            <strong>
              Empowers you to connect with your community, build relationships, and engage in
              activities that matter to you.
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
            At Country Health and Care, we believe that meaningful participation in social and
            community life is essential to building independence, confidence, and overall wellbeing.
            Our Social and Community Participation supports are designed to empower you to engage in
            activities you enjoy, develop new skills, and build strong connections within your
            community.
          </p>
          <p>
            We provide personalised and flexible supports that are tailored to your interests,
            goals, and abilities — ensuring you can participate in ways that are meaningful and
            empowering to you.
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
                  <circle cx="130" cy="72" r="36" fill="#edf8d4" stroke="#7dc242" strokeWidth="2" />
                  <circle cx="130" cy="72" r="18" fill="white" stroke="#7dc242" strokeWidth="2" />
                  <rect x="124" y="28" width="12" height="16" rx="3" fill="#7dc242" />
                  <rect x="124" y="100" width="12" height="16" rx="3" fill="#7dc242" />
                  <rect x="86" y="66" width="16" height="12" rx="3" fill="#7dc242" />
                  <rect x="158" y="66" width="16" height="12" rx="3" fill="#7dc242" />
                  <rect
                    x="97"
                    y="36"
                    width="12"
                    height="16"
                    rx="3"
                    fill="#7dc242"
                    transform="rotate(45 103 44)"
                  />
                  <rect
                    x="150"
                    y="36"
                    width="12"
                    height="16"
                    rx="3"
                    fill="#7dc242"
                    transform="rotate(-45 156 44)"
                  />
                  <circle cx="56" cy="115" r="18" stroke="#1e293b" strokeWidth="2" />
                  <path d="M38 133 Q56 125 74 133 L76 150 H36 Z" stroke="#1e293b" strokeWidth="2" />
                  <path
                    d="M74 123 Q97 107 112 90"
                    stroke="#7dc242"
                    strokeWidth="2"
                    strokeDasharray="4,2"
                  />
                  <polygon points="115,86 107,94 118,97" fill="#7dc242" />
                </svg>
              </div>
              <h4 className="emp-card-title">Building Everyday Life Skills</h4>
              <ul className="emp-bullets">
                <li>
                  We support you to develop practical skills for daily living and independence.
                </li>
                <li>This may include shopping, cooking, budgeting, and using public transport.</li>
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
              <h4 className="emp-card-title">Encouraging Social Connections</h4>
              <ul className="emp-bullets">
                <li>We support you to build friendships and meaningful relationships.</li>
                <li>
                  This includes engaging in group activities and connecting with people who share
                  your interests.
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
              <h4 className="emp-card-title">Supporting Your Goals and Interests</h4>
              <ul className="emp-bullets">
                <li>
                  We help you explore activities that align with your personal goals and passions.
                </li>
                <li>
                  Whether it's learning something new or pursuing a hobby, your goals guide our
                  support.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="why-section">
        <div className="why-inner">
          <h2 className="why-title">
            Why Choose <span>Country Health and Care</span> for your Social and Community
            Participation needs
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
