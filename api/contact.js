import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    await resend.emails.send({
      from: "Valencia Financial Group <noreply@valenciafinancialgroup.com>",
      to: ["madeforurl@gmail.com"], // TODO: swap to client's email before launch
      replyTo: email,
      subject: `New contact form message from ${firstName} ${lastName}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}