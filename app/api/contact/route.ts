import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with detailed error handling logic
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, source } = body;

    // Basic Validation
    if (!name || !mobile) {
      return NextResponse.json(
        { error: 'Name and Mobile Number are required.' },
        { status: 400 }
      );
    }

    // Send Email
    const { data, error } = await resend.emails.send({
      from: 'Credsy Leads <onboarding@resend.dev>', // Default Resend testing domain
      to: [process.env.ADMIN_EMAIL || 'delivered@resend.dev'], // Fallback for safety
      subject: `New Lead from Credsy Finance: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0F172A;">New Lead Received</h1>
          <p style="color: #64748B;">You have a new inquiry from the <strong>${source || 'Website'}</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Name</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Mobile</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${mobile}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${email || 'Not provided'}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8;">
            Sent via Credsy Finance Website Integration.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
