"use client";
import { useState } from "react";


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

        {/* Who can give feedback + Your feedback helps us — branded image */}
        <section className="fb-infographic-section">
          <img
            src="/feedback-infographic.jpeg"
            alt="Who can give feedback and how your feedback helps us"
            className="fb-infographic-img"
          />
        </section>
      </div>
    </>
  );
}
