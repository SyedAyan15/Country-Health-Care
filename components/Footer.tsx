import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section className="ack-section">
        <svg
          className="ack-scroll-svg"
          viewBox="0 0 1440 220"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.15} />
              <stop offset="25%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a3e635" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <path
            className="ack-scroll-path"
            d="M -80 180 C 200 140, 500 40, 860 100 S 1250 180, 1520 60"
          />
          <path
            className="ack-scroll-path-2"
            d="M -80 200 C 220 158, 520 58, 880 118 S 1270 198, 1520 80"
          />
        </svg>
        <div className="ack-inner">
          <div className="ack-flags">
            <Image
              className="ack-flags-img"
              src="/images/flags.webp"
              alt="Aboriginal Flag and Torres Strait Islander Flag"
              width={800}
              height={267}
            />
          </div>
          <p className="ack-text">
            At Country Health and Care, we acknowledge the Traditional Custodians of Country
            throughout Australia and their connections to land, sea, and community. We pay our
            respects to their Elders past, present and future and we extend our respects to all
            Aboriginal and Torres Strait Island peoples.
          </p>
        </div>
      </section>
      <footer>
        <div className="foot-grid">
          <div className="foot-logo">
            <Image
              src="/images/logo.webp"
              alt="Country Health and Care"
              width={140}
              height={110}
              style={{ borderRadius: "4px" }}
            />
            <p className="foot-desc">
              Country Health and Care delivers compassionate, person-centred support services across
              Australia.
            </p>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services/support-coordination">Support Coordination</Link>
              </li>
              <li>
                <Link href="/services/specialist-support-coordination">
                  Specialist Support Coord.
                </Link>
              </li>
              <li>
                <Link href="/services/psychosocial-recovery-coach">
                  Psychosocial Recovery Coach
                </Link>
              </li>
              <li>
                <Link href="/services/nursing-support">Nursing Support</Link>
              </li>
              <li>
                <Link href="/services/in-home-support">In Home Support</Link>
              </li>
              <li>
                <Link href="/services/social-recreation-community">Social &amp; Community</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/referral">Enquire Now</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a
                  href="mailto:admin@countryhealthandcare.com.au"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  admin@countryhealthandcare.com.au
                </a>
              </li>
              <li>Mon &ndash; Fri: 9:00am &ndash; 5:00pm</li>
              <li>ABN: 91 696 613 162</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 Country Health Care. All rights reserved.</span>
          <span>ABN: 91 696 613 162</span>
        </div>
      </footer>
    </>
  );
}
