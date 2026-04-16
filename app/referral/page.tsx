import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Make a Referral | Country Health and Care",
  description:
    "Refer yourself or someone else for NDIS support services. Our team will be in touch to discuss your needs.",
  alternates: { canonical: "https://www.countryhealthandcare.com.au/referral" },
};

export default function ReferralPage() {
  return (
    <div className="form-page">
      <div className="form-page-inner">
        <h1 className="form-page-title">Make a Referral</h1>
        <div className="form-underline"></div>
        <p className="form-subtitle">
          Fill in the form below to refer yourself or someone else for our services. A member of our
          team will be in touch to discuss your needs.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
