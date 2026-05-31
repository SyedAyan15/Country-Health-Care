"use client";
import { useState } from "react";

const WHO_CAN = [
  {
    label: "Clients",
    color: "#7dc242",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    label: "Family & friends",
    color: "#f97316",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" /><circle cx="17" cy="8" r="2.5" />
        <path d="M2 21v-1a7 7 0 0 1 11.9-5" /><path d="M14 21v-1a5 5 0 0 1 10 0v1" />
      </svg>
    ),
  },
  {
    label: "Carers & guardians",
    color: "#e11d48",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Staff",
    color: "#22d3ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: "Community members",
    color: "#a855f7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" /><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="12" r="2.5" />
        <circle cx="8" cy="20" r="2.5" /><circle cx="16" cy="20" r="2.5" />
        <line x1="12" y1="8" x2="12" y2="14" /><line x1="6.5" y1="13.5" x2="10" y2="16" />
        <line x1="17.5" y1="13.5" x2="14" y2="16" />
      </svg>
    ),
  },
];

const HELPS_US = [
  {
    label: "Get the help and support you need",
    color: "#f97316",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "Improve things that matter",
    color: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6" /><path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
        <line x1="12" y1="18" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      </svg>
    ),
  },
  {
    label: "Help other people who need support",
    color: "#a855f7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Recognise our staff for great work",
    color: "#22d3ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "Help us make our services better",
    color: "#7dc242",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function FeedbackPageClient() {
  const [submissionType, setSubmissionType] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [handleOpen, setHandleOpen] = useState(false);
  const [avenuesOpen, setAvenuesOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!submissionType) return;
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const get = (id: string) =>
      (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement)?.value || "";
    const data = {
      firstName: get("fb-fname"),
      lastName: get("fb-lname"),
      email: get("fb-email"),
      submissionType,
      message: get("fb-message"),
    };
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      form.reset();
      setSubmissionType("");
      setAgreed(false);
      setTimeout(() => setSuccess(false), 8000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="fb-hero">
        <div className="fb-hero-inner">
          <h1 className="fb-hero-title">Feedback Centre</h1>
          <p className="fb-hero-sub">
            We value your voice. Share your experience, suggestions, or concerns — every piece of
            feedback helps us improve.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="fb-page-bg">
        <div className="fb-layout">
          {/* Left: Form */}
          <div className="fb-form-col">
            <h2 className="fb-form-heading">Compliments, Complaints &amp; Feedback Form</h2>
            <form onSubmit={handleSubmit} className="fb-form-card">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fb-fname">Your First Name</label>
                  <input id="fb-fname" type="text" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="fb-lname">Your Last Name</label>
                  <input id="fb-lname" type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form-row single">
                <div className="form-group">
                  <label htmlFor="fb-email">Your Email Address</label>
                  <input id="fb-email" type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-row single">
                <div className="form-group">
                  <label>
                    What is the nature of this submission?{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div className="fb-type-btns">
                    {["Complaint", "Feedback", "Compliment"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`fb-type-btn${submissionType === type ? " active" : ""}`}
                        onClick={() => setSubmissionType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-row single">
                <div className="form-group">
                  <label htmlFor="fb-message">Additional Details (Optional)</label>
                  <textarea
                    id="fb-message"
                    placeholder="Please share any relevant details about your feedback..."
                  />
                </div>
              </div>
              <div className="fb-agree-row">
                <input
                  id="fb-agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <label htmlFor="fb-agree">
                  I have read and agree to the{" "}
                  <a href="/contact" style={{ color: "var(--teal)" }}>
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/contact" style={{ color: "var(--teal)" }}>
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                className="fb-submit-btn"
                type="submit"
                disabled={submitting || !submissionType || !agreed}
              >
                {submitting ? "Submitting…" : "Submit Feedback/Complaint"}
              </button>
              {success && (
                <div className="success-msg">
                  ✓ Thank you! Your {submissionType.toLowerCase()} has been submitted. A
                  confirmation has been sent to your email.
                </div>
              )}
              {error && (
                <div
                  className="success-msg"
                  style={{ background: "#fef2f2", color: "#dc2626", borderColor: "#fecaca" }}
                >
                  Something went wrong. Please try again or email us directly at{" "}
                  complaints@countryhealthandcare.com.au
                </div>
              )}
            </form>
          </div>

          {/* Right: Sidebar */}
          <div className="fb-sidebar">
            {/* Accordion: How we Handle */}
            <div className="fb-accordion">
              <button
                className="fb-accordion-btn"
                onClick={() => setHandleOpen(!handleOpen)}
                aria-expanded={handleOpen}
              >
                <span className="fb-acc-arrow">{handleOpen ? "▼" : "▶"}</span>
                How we Handle your Complaint
              </button>
              {handleOpen && (
                <div className="fb-accordion-body">
                  <p>
                    At Country Health &amp; Care, we are committed to providing high-quality services
                    and continuously improving the support we deliver. We welcome all feedback,
                    compliments, concerns, and complaints.
                  </p>
                  <p style={{ marginTop: "12px" }}>
                    When a complaint is received, our management team will review the information and
                    may contact you if further details are required. We will assess:
                  </p>
                  <ul>
                    <li>The nature and seriousness of the concern</li>
                    <li>The appropriate person to manage the complaint</li>
                    <li>The actions required to resolve the issue</li>
                    <li>The expected timeframe for resolution</li>
                  </ul>
                  <p style={{ marginTop: "12px" }}>
                    Most complaints are resolved within <strong>4 to 12 weeks</strong>, depending on
                    their complexity. We will keep you informed throughout the process and provide a
                    written outcome once the review is completed.
                  </p>
                  <h4 style={{ marginTop: "16px", marginBottom: "8px", color: "var(--navy)" }}>
                    If You Are Not Satisfied
                  </h4>
                  <p>
                    If you are unhappy with the outcome, you have the right to seek an independent
                    review through an external agency. Country Health &amp; Care will support you to
                    access the appropriate complaints pathway.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion: Additional Avenues */}
            <div className="fb-accordion">
              <button
                className="fb-accordion-btn"
                onClick={() => setAvenuesOpen(!avenuesOpen)}
                aria-expanded={avenuesOpen}
              >
                <span className="fb-acc-arrow">{avenuesOpen ? "▼" : "▶"}</span>
                Additional Avenues of Support
              </button>
              {avenuesOpen && (
                <div className="fb-accordion-body">
                  <p>
                    If you wish to escalate your concern externally, you may contact the{" "}
                    <strong>NDIS Quality and Safeguards Commission</strong>:
                  </p>
                  <ul style={{ marginTop: "8px" }}>
                    <li>
                      Website:{" "}
                      <a
                        href="https://www.ndiscommission.gov.au"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--teal)" }}
                      >
                        ndiscommission.gov.au
                      </a>
                    </li>
                    <li>Phone: 1800 035 544</li>
                    <li>TTY: 133 677</li>
                  </ul>
                </div>
              )}
            </div>

            {/* How to give Feedback card */}
            <div className="fb-info-card fb-info-purple">
              <h3>How to give Feedback:</h3>
              <ul>
                <li>
                  By the <strong>Online Form</strong> on this page.
                </li>
                <li>
                  <strong>In-Person</strong> at one of our office locations.
                </li>
                <li>
                  By <strong>Phone</strong>{" "}
                  <a href="tel:0416385336" style={{ color: "var(--teal)" }}>
                    0416 385 336
                  </a>
                </li>
                <li>
                  By <strong>Email</strong>{" "}
                  <a
                    href="mailto:complaints@countryhealthandcare.com.au"
                    style={{ color: "var(--teal)" }}
                  >
                    complaints@countryhealthandcare.com.au
                  </a>
                </li>
              </ul>
            </div>

            {/* We Value Your Feedback card */}
            <div className="fb-info-card fb-info-navy">
              <h3>We Value Your Feedback</h3>
              <p>
                Your feedback helps us deliver better services and support for all participants.
                Every submission is treated with care and confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Who can give feedback section */}
        <section className="fb-who-section">
          <div className="fb-who-inner">
            <div className="fb-who-content">
              <h2 className="fb-section-title">Who can give feedback?</h2>
              <ul className="fb-icon-list">
                {WHO_CAN.map((item) => (
                  <li key={item.label}>
                    <span className="fb-ico-wrap" style={{ background: item.color }}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fb-who-illus" aria-hidden="true">
              <svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" fill="none">
                {/* Carer */}
                <circle cx="130" cy="72" r="30" stroke="#a3e635" strokeWidth="2.5" fill="rgba(163,230,53,0.08)" />
                <path d="M98 160 Q130 138 162 160 L170 260 L90 260Z" stroke="#a3e635" strokeWidth="2.5" fill="rgba(163,230,53,0.08)" />
                <circle cx="130" cy="60" r="8" fill="#a3e635" opacity="0.6" />
                {/* Person in wheelchair */}
                <circle cx="230" cy="100" r="22" stroke="#22d3ee" strokeWidth="2.5" fill="rgba(34,211,238,0.08)" />
                <circle cx="230" cy="88" r="6" fill="#22d3ee" opacity="0.6" />
                <path d="M215 130 Q230 118 245 130 L252 175" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="208" cy="195" r="20" stroke="#22d3ee" strokeWidth="2.5" />
                <circle cx="248" cy="195" r="14" stroke="#22d3ee" strokeWidth="2.5" />
                <path d="M215 175 L245 175" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
                {/* Connection arm */}
                <path d="M160 190 Q190 172 210 180" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,3" />
                {/* Logo ring */}
                <circle cx="300" cy="50" r="36" stroke="#a3e635" strokeWidth="1.5" opacity="0.3" />
                <circle cx="300" cy="50" r="28" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                <text x="300" y="56" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" opacity="0.7">C</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Your feedback helps us section */}
        <section className="fb-helps-section">
          <div className="fb-helps-inner">
            <div className="fb-helps-content">
              <h2 className="fb-section-title fb-section-title-amber">Your feedback helps us</h2>
              <ul className="fb-icon-list">
                {HELPS_US.map((item) => (
                  <li key={item.label}>
                    <span className="fb-ico-wrap" style={{ background: item.color }}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fb-helps-illus" aria-hidden="true">
              <svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" fill="none">
                {/* Three people */}
                <circle cx="80" cy="80" r="24" stroke="#a3e635" strokeWidth="2" fill="rgba(163,230,53,0.08)" />
                <path d="M55 145 Q80 128 105 145 L112 240 L48 240Z" stroke="#a3e635" strokeWidth="2" fill="rgba(163,230,53,0.08)" />
                <circle cx="180" cy="68" r="24" stroke="#22d3ee" strokeWidth="2" fill="rgba(34,211,238,0.08)" />
                <path d="M155 133 Q180 116 205 133 L212 240 L148 240Z" stroke="#22d3ee" strokeWidth="2" fill="rgba(34,211,238,0.08)" />
                <circle cx="280" cy="80" r="24" stroke="#f97316" strokeWidth="2" fill="rgba(249,115,22,0.08)" />
                <path d="M255 145 Q280 128 305 145 L312 240 L248 240Z" stroke="#f97316" strokeWidth="2" fill="rgba(249,115,22,0.08)" />
                {/* Speech bubbles */}
                <ellipse cx="112" cy="42" rx="28" ry="17" fill="#22d3ee" opacity="0.85" rx2="6" />
                <text x="112" y="48" textAnchor="middle" fill="white" fontSize="14">♥</text>
                <ellipse cx="200" cy="28" rx="24" ry="15" fill="#f97316" opacity="0.85" />
                <text x="200" y="34" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">•••</text>
                <ellipse cx="272" cy="42" rx="22" ry="14" fill="#a3e635" opacity="0.85" />
                <text x="272" y="48" textAnchor="middle" fill="white" fontSize="14">★</text>
                {/* Logo ring */}
                <circle cx="320" cy="50" r="32" stroke="#a3e635" strokeWidth="1.5" opacity="0.3" />
                <circle cx="320" cy="50" r="24" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                <text x="320" y="56" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" opacity="0.7">C</text>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
