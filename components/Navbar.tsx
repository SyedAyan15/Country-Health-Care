"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const services = [
  { label: "Support Coordination", href: "/services/support-coordination" },
  { label: "Specialist Support Coordination", href: "/services/specialist-support-coordination" },
  { label: "Psychosocial Recovery Coach", href: "/services/psychosocial-recovery-coach" },
  { label: "Nursing Support", href: "/services/nursing-support" },
  { label: "In Home Support", href: "/services/in-home-support" },
  { label: "Social, Recreation & Community", href: "/services/social-recreation-community" },
];

export default function Navbar() {
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
          <Image
            src="/images/logo.webp"
            alt="Country Health and Care logo"
            width={56}
            height={44}
            style={{ borderRadius: "4px" }}
          />
          <div className="brand-text">
            <span className="brand-sub">
              <span style={{ color: "var(--orange)" }}>Nursing,</span>{" "}
              <span style={{ color: "var(--teal)" }}>Support Coordination</span>{" "}
              <span style={{ color: "var(--lime)" }}>& Disability Services</span>
            </span>
          </div>
        </Link>
        <div className="nav-right">
          <Link href="/" className="nav-link" onClick={close}>
            Home
          </Link>
          <div className={dropOpen ? "dropdown open" : "dropdown"} ref={dropRef}>
            <button className="dropdown-btn" onClick={() => setDropOpen(!dropOpen)}>
              Services <span className="dropdown-arrow">&#9660;</span>
            </button>
            {dropOpen && (
              <div className="dropdown-menu">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="dd-item" onClick={close}>
                    {s.label}
                  </Link>
                ))}
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
        <button className="ham" onClick={() => setMobOpen(!mobOpen)} aria-label="Open menu">
          <span />
          <span />
          <span />
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
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="mob-item" onClick={close}>
            {s.label}
          </Link>
        ))}
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
