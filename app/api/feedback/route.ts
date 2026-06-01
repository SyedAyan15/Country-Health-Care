import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM = "Country Health and Care <intake@countryhealthandcare.com.au>";
const COMPLAINTS_EMAIL = "complaints@countryhealthandcare.com.au";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, submissionType, message } = await req.json();

    if (!email || !firstName || !submissionType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: email,
        subject: `Your ${submissionType} Has Been Received – Country Health and Care`,
        html: `
          <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
            <div style="background:#0f1837;padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:700;">Country Health and Care</h1>
              <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">Feedback Centre</p>
            </div>
            <div style="padding:40px;border:1px solid #e5e7eb;border-top:none;">
              <h2 style="color:#0f1837;font-size:20px;margin:0 0 16px;">Hi ${firstName},</h2>
              <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
                Thank you for submitting your ${submissionType.toLowerCase()} to Country Health and Care. We have received your submission and will review it carefully.
              </p>
              <div style="background:#f9fafb;border-radius:10px;padding:24px;margin:24px 0;">
                <h3 style="color:#0f1837;font-size:14px;font-weight:700;margin:0 0 14px;text-transform:uppercase;letter-spacing:0.5px;">Submission Summary</h3>
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="color:#6b7280;font-size:13px;padding:5px 0;width:160px;">Type</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${submissionType}</td></tr>
                  <tr><td style="color:#6b7280;font-size:13px;padding:5px 0;">Name</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${firstName} ${lastName}</td></tr>
                  <tr><td style="color:#6b7280;font-size:13px;padding:5px 0;">Email</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${email}</td></tr>
                  ${message ? `<tr><td style="color:#6b7280;font-size:13px;padding:5px 0;vertical-align:top;">Message</td><td style="color:#0f1837;font-size:13px;font-weight:600;padding:5px 0;">${message}</td></tr>` : ""}
                </table>
              </div>
              <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
                Most complaints are resolved within <strong>4 to 12 weeks</strong>. We will keep you informed throughout the process and provide a written outcome once the review is completed.
              </p>
              <p style="color:#374151;font-size:15px;margin:0;">Warm regards,<br/><strong>Country Health and Care Team</strong></p>
            </div>
            <div style="background:#f9fafb;padding:24px 40px;text-align:center;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
              <p style="color:#9ca3af;font-size:12px;margin:0;">ABN: 91 696 613 162 &nbsp;|&nbsp; complaints@countryhealthandcare.com.au</p>
            </div>
          </div>
        `,
      }),
      resend.emails.send({
        from: FROM,
        to: COMPLAINTS_EMAIL,
        subject: `New ${submissionType}: ${firstName} ${lastName}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#0f1837;">New ${submissionType} Submission</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px;background:#f3f4f6;font-weight:600;width:140px;">Type</td><td style="padding:8px;">${submissionType}</td></tr>
              <tr><td style="padding:8px;font-weight:600;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px;background:#f3f4f6;font-weight:600;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              ${message ? `<tr><td style="padding:8px;font-weight:600;vertical-align:top;">Message</td><td style="padding:8px;">${message}</td></tr>` : ""}
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
