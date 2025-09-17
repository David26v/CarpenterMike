import resend from "@/lib/resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message } = body;

    if (!name || !email || !phone || !project || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await resend.emails.send({
      from: "Carpenter Mike <contact@carpentermike.com>",
      to: ["expertmike@yahoo.com"],
      subject: `🔨 New Project Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Project Inquiry</title>
          <style>
            body {
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f8fafc;
              color: #1e293b;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border: 1px solid #e2e8f0;
            }
            .header {
              background: linear-gradient(135deg, #f97316, #ea580c);
              color: white;
              padding: 32px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            .header p {
              margin: 8px 0 0 0;
              font-size: 16px;
              opacity: 0.9;
            }
            .content {
              padding: 30px;
            }
            .section {
              margin-bottom: 20px;
              padding: 20px;
              background-color: #f8fafc;
              border-radius: 8px;
              border-left: 4px solid #f97316;
            }
            .label {
              font-weight: 600;
              color: #374151;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 6px;
              display: block;
            }
            .value {
              font-size: 16px;
              line-height: 1.5;
              color: #111827;
              font-weight: 500;
            }
            .message-section {
              background-color: #fef3c7;
              border-left: 4px solid #f59e0b;
              padding: 20px;
              border-radius: 8px;
              margin-top: 24px;
            }
            .message-section .label {
              color: #92400e;
            }
            .message-section .value {
              color: #78350f;
              white-space: pre-line;
              background-color: #ffffff;
              padding: 16px;
              border-radius: 6px;
              border: 1px solid #fde68a;
            }
            .urgent-banner {
              background: linear-gradient(135deg, #ef4444, #dc2626);
              color: white;
              padding: 16px;
              text-align: center;
              margin: 20px 0;
              border-radius: 8px;
              font-weight: 600;
            }
            .footer {
              text-align: center;
              padding: 24px;
              background-color: #1f2937;
              color: #d1d5db;
              font-size: 14px;
            }
            .footer-brand {
              font-size: 18px;
              font-weight: 700;
              color: #ffffff;
              margin-bottom: 4px;
            }
            .footer-tagline {
              margin-bottom: 12px;
              color: #9ca3af;
            }
            .contact-grid {
              display: table;
              width: 100%;
              margin-bottom: 20px;
            }
            .contact-row {
              display: table-row;
            }
            .contact-cell {
              display: table-cell;
              padding: 12px;
              vertical-align: top;
              width: 50%;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔨 New Project Inquiry</h1>
              <p>A potential client is ready to transform their space</p>
            </div>

            <div class="content">
              <div class="urgent-banner">
                ⚡ Quick Response Recommended - Contact within 24 hours
              </div>

              <div class="contact-grid">
                <div class="contact-row">
                  <div class="contact-cell">
                    <div class="section">
                      <span class="label">👤 Client Name</span>
                      <p class="value">${name}</p>
                    </div>
                  </div>
                  <div class="contact-cell">
                    <div class="section">
                      <span class="label">📧 Email Address</span>
                      <p class="value">${email}</p>
                    </div>
                  </div>
                </div>
                <div class="contact-row">
                  <div class="contact-cell">
                    <div class="section">
                      <span class="label">📱 Phone Number</span>
                      <p class="value">${phone}</p>
                    </div>
                  </div>
                  <div class="contact-cell">
                    <div class="section">
                      <span class="label">🏗️ Project Type</span>
                      <p class="value">${project}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="message-section">
                <span class="label">💬 Project Details & Requirements</span>
                <p class="value">${message}</p>
              </div>
            </div>

            <div class="footer">
              <div class="footer-brand">🔨 Carpenter Mike</div>
              <div class="footer-tagline">Premium Remodeling & Renovations</div>
              <p>© 2025 Carpenter Mike. Crafting dreams into reality.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}