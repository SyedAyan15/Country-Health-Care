import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Country Health and Care. We are here to answer your questions about NDIS services.",
  alternates: { canonical: "https://www.countryhealthandcare.com.au/contact" },
};
export default function ContactPage() {
  return <ContactPageClient />;
}
