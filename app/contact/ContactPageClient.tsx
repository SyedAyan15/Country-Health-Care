"use client";
import { useState } from "react";

export default function ContactPageClient() {
  const [success, setSuccess] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  }
  return (
    <div className="contact-page">
      <div className="contact-inner">
        <h1
          style={{
            fontFamily: "Nunito,sans-serif",
            fontWeight: 900,
            fontSize: "clamp(28px,4vw,44px)",
            color: "var(--navy)",
            marginBottom: "8px",
          }}
        >
          Contact Us
        </h1>
        <div className="form-underline" style={{ margin: "0 0 44px" }}></div>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We would love to hear from you. Whether you have a question about our services, want
              to make a referral, or simply want to learn more — our team is here to help.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-ico">📧</div>
              <div className="contact-detail-text">
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:admin@countryhealthandcare.com.au"
                    style={{ color: "var(--teal)", textDecoration: "none" }}
                  >
                    admin@countryhealthandcare.com.au
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-ico">📞</div>
              <div className="contact-detail-text">
                <h4>Phone</h4>
                <p>Phone number coming soon</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-ico">🕐</div>
              <div className="contact-detail-text">
                <h4>Office Hours</h4>
                <p>Monday &ndash; Friday: 9:00am &ndash; 5:00pm</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-ico">📍</div>
              <div className="contact-detail-text">
                <h4>Service Area</h4>
                <p>Serving participants across Australia</p>
              </div>
            </div>
            <div style={{ marginTop: "28px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "10px",
                }}
              >
                ABN: 91 696 613 162
              </p>
            </div>
          </div>
          <div className="contact-form-card">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: "16px" }}>
                <label>Your Name</label>
                <input type="text" placeholder="Full name" />
              </div>
              <div className="form-group" style={{ marginBottom: "16px" }}>
                <label>Email Address</label>
                <input type="email" placeholder="email@example.com" />
              </div>
              <div className="form-group" style={{ marginBottom: "16px" }}>
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>
              <div className="form-group" style={{ marginBottom: "24px" }}>
                <label>Message</label>
                <textarea placeholder="Your message..."></textarea>
              </div>
              <button className="form-submit" type="submit">
                Send Message
              </button>
              {success && (
                <div className="success-msg">
                  &#10003; Message sent! We will get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
