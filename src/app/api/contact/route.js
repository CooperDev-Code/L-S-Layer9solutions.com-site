import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response("All fields are required", { status: 400 });
    }

    // Check if env vars are loaded
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials not found in environment");
      return new Response("Server configuration error", { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "jmr01.jtsnet.uk",
      port: 25,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: '"Layer 9 Solutions Website" <noreply@layer9solutions.com>',
      to: "sales@layer9solutions.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return new Response("Message sent successfully", { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(`Failed to send message: ${err.message}`, { status: 500 });
  }
}
