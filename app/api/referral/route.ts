import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM = "Country Health and Care <admin@countryhealthandcare.com.au>";
const ADMIN = "admin@countryhealthandcare.com.au";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const {
      service,
      firstName,
      lastName,
      email,
      phone,
      dob,
      ndisNumber,
      location,
      additionalInfo,
    } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "We've Received Your Referral – Country Health and Care",
        html: `
          <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
            <div style="background:#0f1837;padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:700;">Country Health and Care</h1>
              <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">NDIS Support Services Across Australia</p>
            </div>
            <div style="padding:40px;border:1px solid #e5e7eb;border-top:none;">
              <h2 style="color:#0f1837;font-size:20px;margin:0 0 16px;">Hi ${firstName},</h2>
              <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
                Thank you for submitting your referral to Country Health and Care. We have received your request and a member of our team will be in touch with you shortly.
              </p>
              <div style="background:#f9fafb;border-radius:10px;padding:24px;margin:24px 0;">
                <h3 style="color:#0f1837;font-size:14px;font-weight:700;margin:0 0 14px;text-transform:uppercase;letter-spacing:0.5px;">Your Referral Summary</h3>
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="color:#6b7280;font-size:13px;padding:5px 0;width:160px;">Service Requested</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${service || "Not specified"}</td></tr>
                  <tr><td style="color:#6b7280;font-size:13px;padding:5px 0;">Full Name</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${firstName} ${lastName}</td></tr>
                  <tr><td style="color:#6b7280;font-size:13px;padding:5px 0;">Email</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${email}</td></tr>
                  ${phone ? `<tr><td style="color:#6b7280;font-size:13px;padding:5px 0;">Phone</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${phone}</td></tr>` : ""}
                  ${location ? `<tr><td style="color:#6b7280;font-size:13px;padding:5px 0;">Location</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${location}</td></tr>` : ""}
                </table>
              </div>
              <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 32px;">
                If you have any questions, please don't hesitate to reach out to us directly.
              </p>
              <div style="text-align:center;margin:32px 0;">
                <a href="https://www.countryhealthandcare.com.au" style="background:#f97316;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:14px;">Visit Our Website</a>
              </div>
              <p style="color:#374151;font-size:15px;margin:0;">Warm regards,<br/><strong>Country Health and Care Team</strong></p>
            </div>
            <div style="background:#f9fafb;padding:24px 40px;text-align:center;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
              <p style="color:#9ca3af;font-size:12px;margin:0;">ABN: 91 696 613 162 &nbsp;|&nbsp; admin@countryhealthandcare.com.au</p>
              <p style="color:#9ca3af;font-size:12px;margin:6px 0 0;">Serving participants across Australia</p>
            </div>
          </div>
        `,
      }),
      resend.emails.send({
        from: FROM,
        to: ADMIN,
        subject: `New Referral: ${firstName} ${lastName} – ${service}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#0f1837;">New Referral Submission</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px;background:#f3f4f6;font-weight:600;width:180px;">Service</td><td style="padding:8px;">${service || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:600;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px;background:#f3f4f6;font-weight:600;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px;font-weight:600;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
              <tr><td style="padding:8px;background:#f3f4f6;font-weight:600;">Date of Birth</td><td style="padding:8px;">${dob || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:600;">NDIS Number</td><td style="padding:8px;">${ndisNumber || "—"}</td></tr>
              <tr><td style="padding:8px;background:#f3f4f6;font-weight:600;">Location</td><td style="padding:8px;">${location || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:600;vertical-align:top;">Additional Info</td><td style="padding:8px;">${additionalInfo || "—"}</td></tr>
            </table>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
