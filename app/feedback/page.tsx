import type { Metadata } from "next";
import FeedbackPageClient from "./FeedbackPageClient";

export const metadata: Metadata = {
  title: "Feedback Centre",
  description:
    "Share your compliments, feedback, or complaints about Country Health and Care services. We value your input and are committed to continuous improvement.",
  alternates: { canonical: "https://www.countryhealthandcare.com.au/feedback" },
};

export default function FeedbackPage() {
  return <FeedbackPageClient />;
}
