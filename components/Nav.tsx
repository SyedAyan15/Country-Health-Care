"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [dropOpen, setDropOpen] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);

  const close = () => {
    setDropOpen(false);
    setMobOpen(false);
  };

  return (
    <>
      <nav>
        <Link href="/" className="nav-brand" onClick={close}>
          <img
            src="/images/logo.jpg"
            alt="Country Health and Care"
            style={{ height: "56px", width: "auto", display: "block", borderRadius: "4px" }}
          />
          <div className="brand-text">
            <span className="brand-sub">
              <span style={{ color: "var(--orange)" }}>Nursing,</span>{" "}
              <span style={{ color: "var(--teal)" }}>Support Coordination</span>{" "}
              <span style={{ color: "var(--lime)" }}>&amp; Disability Services</span>
            </span>
          </div>
        </Link>
        <div className="nav-right">
          <Link href="/" className="nav-link" onClick={close}>
            Home
          </Link>
          <div className="dropdown" ref={dropRef}>
            <button className="dropdown-btn" onClick={() => setDropOpen(!dropOpen)}>
              Services <span className="dropdown-arrow">&#9660;</span>
            </button>
            {dropOpen && (
              <div className="dropdown-menu">
                <Link href="/support-coordination" className="dd-item" onClick={close}>
                  Support Coordination
                </Link>
                <Link href="/specialist-support-coordination" className="dd-item" onClick={close}>
                  Specialist Support Coordination
                </Link>
                <Link href="/psychosocial-recovery-coach" className="dd-item" onClick={close}>
                  Psychosocial Recovery Coach
                </Link>
                <Link href="/nursing-support" className="dd-item" onClick={close}>
                  Nursing Support
                </Link>
                <Link href="/in-home-support" className="dd-item" onClick={close}>
                  In Home Support
                </Link>
                <Link
                  href="/social-recreation-community-participation"
                  className="dd-item"
                  onClick={close}
                >
                  Social, Recreation &amp; Community Participation
                </Link>
              </div>
            )}
          </div>
          <Link href="/careers" className="nav-link" onClick={close}>
            Careers
          </Link>
          <Link href="/contact" className="nav-contact-btn" onClick={close}>
            Contact Us
          </Link>
        </div>
        <button className="ham" onClick={() => setMobOpen(!mobOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={mobOpen ? "mobile-menu open" : "mobile-menu"}>
        <Link
          href="/"
          className="mob-item"
          onClick={close}
          style={{
            color: "white",
            fontWeight: 800,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: "12px",
            marginBottom: "4px",
          }}
        >
          Home
        </Link>
        <span className="mob-section">Services</span>
        <Link href="/support-coordination" className="mob-item" onClick={close}>
          Support Coordination
        </Link>
        <Link href="/specialist-support-coordination" className="mob-item" onClick={close}>
          Specialist Support Coordination
        </Link>
        <Link href="/psychosocial-recovery-coach" className="mob-item" onClick={close}>
          Psychosocial Recovery Coach
        </Link>
        <Link href="/nursing-support" className="mob-item" onClick={close}>
          Nursing Support
        </Link>
        <Link href="/in-home-support" className="mob-item" onClick={close}>
          In Home Support
        </Link>
        <Link
          href="/social-recreation-community-participation"
          className="mob-item"
          onClick={close}
        >
          Social, Recreation &amp; Community Participation
        </Link>
        <span className="mob-section" style={{ marginTop: "8px" }}>
          Company
        </span>
        <Link href="/careers" className="mob-item" onClick={close}>
          Careers
        </Link>
        <Link href="/contact" className="mob-item" onClick={close}>
          Contact Us
        </Link>
      </div>
    </>
  );
}
