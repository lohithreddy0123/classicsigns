import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { Resend } from "resend";

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");

export const sendContactEmail = onRequest(
  { secrets: [RESEND_API_KEY] },
  async (req, res) => {
    console.log("📥 Request received");

    if (req.method !== "POST") {
      console.log("❌ Invalid method:", req.method);
      return res.status(405).send("Method Not Allowed");
    }

    console.log("📦 Body:", req.body);

    const { name, email, phone, website, message } = req.body;

    try {
      const resend = new Resend(RESEND_API_KEY.value());

      console.log("📤 Sending email via Resend...");

      const result = await resend.emails.send({
        from: "Contact Form <info@classicporcelainsigns.com>",
        to: ["lohithreddy0123@gmail.com"], // ✅ SEND TO YOU
        replyTo: email,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "-"}</p>
          <p><b>Website:</b> ${website || "-"}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      console.log("✅ Resend success:", result);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("❌ Email send failed:", error);
      res.status(500).json({ error: "Email failed" });
    }
  }
);