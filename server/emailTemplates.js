const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatField = (value) => (value ? escapeHtml(value) : "Not provided");

const formatSubmittedAt = (dateValue) => {
  try {
    return new Intl.DateTimeFormat("en-ZA", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Johannesburg",
    }).format(dateValue);
  } catch (error) {
    return String(dateValue);
  }
};

const buildOwnerEmail = ({
  name,
  email,
  company,
  service,
  message,
  submittedAt,
  siteName,
}) => {
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const formattedDate = formatSubmittedAt(submittedAt);

  return {
    subject: `New project enquiry from ${name}`,
    text: [
      `New enquiry received via ${siteName}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Service interest: ${service || "Not provided"}`,
      `Submitted: ${formattedDate}`,
      "",
      "Project details:",
      message,
    ].join("\n"),
    html: `
      <div style="margin:0;padding:24px;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <div style="padding:24px 28px;background:linear-gradient(135deg,#0f172a,#1d4ed8);color:#ffffff;">
            <div style="font-size:12px;opacity:0.85;letter-spacing:0.08em;text-transform:uppercase;">New enquiry</div>
            <h1 style="margin:8px 0 0 0;font-size:24px;line-height:1.3;">${escapeHtml(siteName)} contact form submission</h1>
          </div>

          <div style="padding:24px 28px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#475569;font-size:13px;width:180px;">Name</td><td style="padding:8px 0;font-size:15px;font-weight:600;">${formatField(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#475569;font-size:13px;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#475569;font-size:13px;">Company</td><td style="padding:8px 0;font-size:15px;">${formatField(company)}</td></tr>
              <tr><td style="padding:8px 0;color:#475569;font-size:13px;">Service interest</td><td style="padding:8px 0;font-size:15px;">${formatField(service)}</td></tr>
              <tr><td style="padding:8px 0;color:#475569;font-size:13px;">Submitted</td><td style="padding:8px 0;font-size:15px;">${escapeHtml(formattedDate)}</td></tr>
            </table>

            <div style="margin-top:20px;padding:18px;border:1px solid #dbeafe;border-radius:12px;background:#eff6ff;">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#1d4ed8;margin-bottom:8px;">Project details</div>
              <div style="font-size:15px;line-height:1.6;color:#0f172a;">${safeMessage}</div>
            </div>
          </div>
        </div>
      </div>
    `,
  };
};

const buildClientEmail = ({
  name,
  company,
  service,
  message,
  submittedAt,
  siteName,
  supportEmail,
}) => {
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const formattedDate = formatSubmittedAt(submittedAt);

  return {
    subject: `We received your project request - ${siteName}`,
    text: [
      `Hi ${name},`,
      "",
      `Thanks for contacting ${siteName}. We received your enquiry and will get back to you soon.`,
      "",
      "Submission summary:",
      `Company: ${company || "Not provided"}`,
      `Service interest: ${service || "Not provided"}`,
      `Submitted: ${formattedDate}`,
      "",
      "Project details:",
      message,
      "",
      `If you need to add anything, reply to ${supportEmail}.`,
      "",
      `- ${siteName}`,
    ].join("\n"),
    html: `
      <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <div style="padding:28px;background:linear-gradient(135deg,#0f172a,#0ea5e9);color:#ffffff;">
            <div style="font-size:12px;opacity:0.85;letter-spacing:0.08em;text-transform:uppercase;">Thank you</div>
            <h1 style="margin:8px 0 0 0;font-size:24px;line-height:1.3;">Hi ${escapeHtml(name)}, we got your message.</h1>
          </div>

          <div style="padding:24px 28px;">
            <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:#1e293b;">
              Thank you for reaching out to <strong>${escapeHtml(siteName)}</strong>. Our team will review your request and reply shortly.
            </p>

            <div style="margin:18px 0;padding:18px;border:1px solid #bfdbfe;border-radius:12px;background:#eff6ff;">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#1d4ed8;margin-bottom:10px;">Your submission</div>
              <div style="font-size:14px;line-height:1.7;">
                <div><strong>Company:</strong> ${formatField(company)}</div>
                <div><strong>Service interest:</strong> ${formatField(service)}</div>
                <div><strong>Submitted:</strong> ${escapeHtml(formattedDate)}</div>
              </div>
            </div>

            <div style="padding:18px;border:1px solid #e2e8f0;border-radius:12px;background:#ffffff;">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;margin-bottom:8px;">Project details</div>
              <div style="font-size:15px;line-height:1.6;color:#0f172a;">${safeMessage}</div>
            </div>

            <p style="margin:20px 0 0 0;font-size:14px;color:#334155;line-height:1.6;">
              Need to update anything? Reply directly to this email or contact us at
              <a href="mailto:${escapeHtml(supportEmail)}" style="color:#1d4ed8;text-decoration:none;"> ${escapeHtml(supportEmail)}</a>.
            </p>
          </div>
        </div>
      </div>
    `,
  };
};

module.exports = {
  buildOwnerEmail,
  buildClientEmail,
};

