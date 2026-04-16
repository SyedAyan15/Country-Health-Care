import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Country Health and Care team. We are looking for compassionate and dedicated professionals to deliver NDIS support services across Australia.",
  alternates: { canonical: "https://www.countryhealthandcare.com.au/careers" },
};

export default function CareersPage() {
  return (
    <>
      <div className="careers-hero">
        <div className="careers-hero-inner">
          <div
            style={{
              fontFamily: "'Nunito',sans-serif",
              fontWeight: "800",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: "14px",
            }}
          >
            Join Our Team
          </div>
          <h1>Careers at Country Health and Care</h1>
          <p>
            Build a career that empowers lives — including your own. At Country Health and Care, we
            are more than a service provider — we are a team driven by purpose, compassion, and a
            commitment to empowering others.
          </p>
        </div>
      </div>
      <div className="careers-body">
        <div className="careers-inner">
          <span className="section-tag">Why Work With Us</span>
          <h2 className="section-h2" style={{ marginBottom: "12px" }}>
            Why Work With Country Health and Care?
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: "1.8",
              maxWidth: "640px",
              marginBottom: "44px",
            }}
          >
            We are always looking for passionate and dedicated individuals who want to make a
            meaningful difference in the lives of people living with disability.
          </p>
          <div className="why-work-grid">
            <div className="ww-card reveal">
              <span className="ww-ico">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#fff7ed" />
                  <path
                    d="M28 44 Q11 31 11 20 A13 13 0 0 1 28 11 A13 13 0 0 1 45 20 Q45 31 28 44Z"
                    fill="#f97316"
                    opacity="0.18"
                    stroke="#f97316"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 40 Q14 28 14 20 A11 11 0 0 1 28 13 A11 11 0 0 1 42 20 Q42 28 28 40Z"
                    fill="#f97316"
                  />
                  <circle cx="28" cy="23" r="4" fill="white" opacity="0.9" />
                  <path
                    d="M22 34 Q28 30 34 34"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <h4>Meaningful Impact</h4>
              <p>Make a real difference in people's lives every day.</p>
              <p>Your work directly supports independence, dignity, and wellbeing.</p>
            </div>
            <div className="ww-card reveal">
              <span className="ww-ico">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#f4fce8" />
                  <rect x="9" y="36" width="10" height="14" rx="2" fill="#7dc242" opacity="0.35" />
                  <rect x="23" y="26" width="10" height="24" rx="2" fill="#7dc242" opacity="0.65" />
                  <rect x="37" y="14" width="10" height="36" rx="2" fill="#7dc242" />
                  <polyline
                    points="14,37 28,27 42,15"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4,2"
                  />
                  <circle cx="42" cy="15" r="3.5" fill="#f97316" />
                </svg>
              </span>
              <h4>Professional Growth</h4>
              <p>
                We invest in your development through ongoing training and learning opportunities.
              </p>
              <p>Grow your skills and build a rewarding, long-term career in the NDIS sector.</p>
            </div>
            <div className="ww-card reveal">
              <span className="ww-ico">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#f4fce8" />
                  <circle cx="16" cy="17" r="7" stroke="#1e293b" strokeWidth="1.5" />
                  <path
                    d="M8 31 Q16 26 24 31 L25 44 H7 Z"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="40" cy="17" r="7" stroke="#1e293b" strokeWidth="1.5" />
                  <path
                    d="M32 31 Q40 26 48 31 L49 44 H31 Z"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M24 38 Q28 35 32 38"
                    stroke="#7dc242"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="28" cy="34" r="3.5" fill="#7dc242" />
                </svg>
              </span>
              <h4>Supportive Team Culture</h4>
              <p>Be part of a collaborative and respectful team environment.</p>
              <p>We value open communication, teamwork, and supporting each other.</p>
            </div>
            <div className="ww-card reveal">
              <span className="ww-ico">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#f4fce8" />
                  <circle cx="26" cy="31" r="17" fill="white" stroke="#7dc242" strokeWidth="2" />
                  <circle cx="26" cy="31" r="2.5" fill="#7dc242" />
                  <line
                    x1="26"
                    y1="31"
                    x2="26"
                    y2="18"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="26"
                    y1="31"
                    x2="35"
                    y2="37"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line x1="26" y1="15" x2="26" y2="17" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="26" y1="45" x2="26" y2="47" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="10" y1="31" x2="12" y2="31" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="40" y1="31" x2="42" y2="31" stroke="#94a3b8" strokeWidth="1.5" />
                  <rect x="36" y="8" width="16" height="15" rx="4" fill="#7dc242" />
                  <line
                    x1="40"
                    y1="12"
                    x2="48"
                    y2="12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="40"
                    y1="16"
                    x2="46"
                    y2="16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <line
                    x1="40"
                    y1="8"
                    x2="40"
                    y2="11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="48"
                    y1="8"
                    x2="48"
                    y2="11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h4>Flexible Work Options</h4>
              <p>We understand the importance of work-life balance.</p>
              <p>Flexible shifts and arrangements to suit your lifestyle and commitments.</p>
            </div>
            <div className="ww-card reveal">
              <span className="ww-ico">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#f4fce8" />
                  <rect x="6" y="42" width="13" height="8" rx="2" fill="#7dc242" opacity="0.3" />
                  <rect x="21" y="33" width="13" height="17" rx="2" fill="#7dc242" opacity="0.6" />
                  <rect x="36" y="22" width="14" height="28" rx="2" fill="#7dc242" />
                  <polygon
                    points="43,10 44.5,15 50,15 45.5,18 47,23 43,20 39,23 40.5,18 36,15 41.5,15"
                    fill="#fbbf24"
                    stroke="#f97316"
                    strokeWidth="0.8"
                  />
                  <circle cx="12" cy="35" r="5" stroke="#1e293b" strokeWidth="1.5" />
                  <path
                    d="M7 42 Q12 39 17 42"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 39 Q25 34 35 27"
                    stroke="#f97316"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                    strokeLinecap="round"
                  />
                  <polygon points="37,25 31,26 34,31" fill="#f97316" />
                </svg>
              </span>
              <h4>Rewarding Career Pathways</h4>
              <p>Opportunities to grow across different roles and services.</p>
              <p>
                We support career progression within support work, coordination, and leadership.
              </p>
            </div>
            <div className="ww-card reveal">
              <span className="ww-ico">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#f4fce8" />
                  <circle
                    cx="30"
                    cy="32"
                    r="18"
                    fill="none"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <circle
                    cx="30"
                    cy="32"
                    r="12"
                    fill="none"
                    stroke="#7dc242"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <circle cx="30" cy="32" r="6" fill="#7dc242" />
                  <line
                    x1="10"
                    y1="12"
                    x2="27"
                    y2="29"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <polygon points="29,27 22,25 27,30" fill="#f97316" />
                  <line
                    x1="7"
                    y1="9"
                    x2="10"
                    y2="12"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="5"
                    y1="14"
                    x2="10"
                    y2="12"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h4>Purpose-Driven Work Environment</h4>
              <p>Work in a role where your contribution truly matters.</p>
              <p>Every day brings the opportunity to empower someone's life.</p>
            </div>
          </div>

          <div className="apply-form-wrap">
            <h2>Apply Now</h2>
            <div className="form-underline" style={{ margin: "8px auto 12px" }}></div>
            <p
              style={{
                textAlign: "center",
                fontSize: "15px",
                color: "var(--muted)",
                marginBottom: "36px",
              }}
            >
              Be Part of Care That Empowers — start your journey with Country Health and Care today.
            </p>
            <div className="form-card">
              <div className="form-row single">
                <div className="form-group">
                  <label>
                    Position Applying For <span>*</span>
                  </label>
                  <select required>
                    <option value="">Select A Position</option>
                    <option>Support Coordinator</option>
                    <option>Specialist Support Coordinator</option>
                    <option>Psychosocial Recovery Coach</option>
                    <option>Support Worker – In Home</option>
                    <option>Community Participation Worker</option>
                    <option>Registered Nurse</option>
                    <option>Enrolled Nurse</option>
                    <option>Team Leader / Supervisor</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    First Name <span>*</span>
                  </label>
                  <input type="text" placeholder="First name" required />
                </div>
                <div className="form-group">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input type="text" placeholder="Last name" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Email Address <span>*</span>
                  </label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
                <div className="form-group">
                  <label>
                    Phone <span>*</span>
                  </label>
                  <input type="tel" placeholder="04XX XXX XXX" required />
                </div>
              </div>
              <div className="form-row triple">
                <div className="form-group">
                  <label>
                    Preferred Work Location <span>*</span>
                  </label>
                  <select required>
                    <option value="">Select A Location</option>
                    <option>Melbourne – Metro</option>
                    <option>Melbourne – Eastern</option>
                    <option>Melbourne – Western</option>
                    <option>Melbourne – Northern</option>
                    <option>Melbourne – Southern</option>
                    <option>Regional Victoria</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Employment Type <span>*</span>
                  </label>
                  <select required>
                    <option value="">Select</option>
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Casual</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Years of Experience in Disability Support <span>*</span>
                  </label>
                  <select required>
                    <option value="">Select Experience</option>
                    <option>Less than 1 year</option>
                    <option>1 – 2 years</option>
                    <option>3 – 5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>
              <div className="file-row">
                <div className="file-group">
                  <label>
                    Upload Resume <span>*</span>
                  </label>
                  <input type="file" accept=".pdf,.doc,.docx" />
                </div>
                <div className="file-group">
                  <label>
                    Upload Cover Letter <span>*</span>
                  </label>
                  <input type="file" accept=".pdf,.doc,.docx" />
                </div>
              </div>
              <div className="consent-group" style={{ marginBottom: "28px" }}>
                <p>
                  I consent to Country Health and Care collecting and storing my personal
                  information for recruitment purposes. <span>*</span>
                </p>
                <label className="consent-option">
                  <input type="radio" name="consent" value="yes" />
                  <span>Yes</span>
                </label>
                <label className="consent-option">
                  <input type="radio" name="consent" value="no" />
                  <span>No</span>
                </label>
              </div>
              <button className="form-submit">Submit Application</button>
              <div className="success-msg" id="careers-success" style={{ display: "none" }}>
                &#10003; Thank you for applying! We will review your application and be in touch
                soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
