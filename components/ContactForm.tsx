"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const get = (id: string) =>
      (form.querySelector(`#${id}`) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
        ?.value || "";

    const data = {
      service: get("ref-service"),
      firstName: get("ref-fname"),
      lastName: get("ref-lname"),
      email: get("ref-email"),
      phone: get("ref-phone"),
      dob: get("ref-dob"),
      ndisNumber: get("ref-ndis"),
      location: get("ref-location"),
      additionalInfo: get("ref-info"),
    };

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 8000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row single">
        <div className="form-group">
          <label>
            Service Required <span>*</span>
          </label>
          <select id="ref-service" required>
            <option value="">— Select a Service —</option>
            <option>Support Coordination</option>
            <option>Specialist Support Coordination</option>
            <option>Psychosocial Recovery Coach</option>
            <option>In Home Support</option>
            <option>Social, Recreation and Community Participation</option>
            <option>Nursing Support</option>
            <option>Multiple Services</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>
            First Name <span>*</span>
          </label>
          <input id="ref-fname" type="text" placeholder="First name" required />
        </div>
        <div className="form-group">
          <label>
            Last Name <span>*</span>
          </label>
          <input id="ref-lname" type="text" placeholder="Last name" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>
            Email Address <span>*</span>
          </label>
          <input id="ref-email" type="email" placeholder="email@example.com" required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input id="ref-phone" type="tel" placeholder="04XX XXX XXX" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Date of Birth</label>
          <input id="ref-dob" type="date" />
        </div>
        <div className="form-group">
          <label>NDIS Number</label>
          <input id="ref-ndis" type="text" placeholder="43XXXXXXXX" />
        </div>
      </div>
      <div className="form-row single">
        <div className="form-group">
          <label>Preferred Location / Region</label>
          <input id="ref-location" type="text" placeholder="e.g. Melbourne, Victoria" />
        </div>
      </div>
      <div className="form-row single">
        <div className="form-group">
          <label>Additional Information</label>
          <textarea
            id="ref-info"
            placeholder="Tell us about your goals, current situation, or any other relevant details..."
          ></textarea>
        </div>
      </div>
      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Referral"}
      </button>
      {success && (
        <div className="success-msg">
          &#10003; Thank you! Your referral has been submitted. A confirmation email has been sent
          to your inbox.
        </div>
      )}
      {error && (
        <div
          className="success-msg"
          style={{ background: "#fef2f2", color: "#dc2626", borderColor: "#fecaca" }}
        >
          Something went wrong. Please try again or email us directly at
          admin@countryhealthandcare.com.au
        </div>
      )}
    </form>
  );
}
