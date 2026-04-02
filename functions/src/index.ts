import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lohithreddy0123@gmail.com",
    pass: "YOUR_APP_PASSWORD"
  }
});

export const sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate(async (snap: any, context) => {
    const data = snap.data();
    const docId = context.params.docId;

    console.log("📥 New Firestore contact received:", docId);
    console.log("📄 Data:", data);

    const mailOptions = {
      from: "Classic Signs <lohithreddy0123@gmail.com>",
      to: "info@classicporcelainsigns.com",
      subject: `New Lead: ${data.name}`,
      html: `
        <h2>🚀 New Contact Lead</h2>

        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone || "-"}</p>
        <p><b>Website:</b> ${data.website || "-"}</p>

        <hr/>

        <p><b>Message:</b></p>
        <p>${data.message}</p>
      `
    };

    try {
      const result = await transporter.sendMail(mailOptions);

      console.log("✅ EMAIL SENT SUCCESSFULLY");
      console.log("📧 Message ID:", result.messageId);
      console.log("📤 Sent To:", mailOptions.to);
      console.log("👤 Lead Email:", data.email);

      // OPTIONAL: store status in Firestore
      await admin.firestore()
        .collection("contacts")
        .doc(docId)
        .update({
          emailStatus: "sent",
          sentAt: admin.firestore.FieldValue.serverTimestamp()
        });

      return null;

    } catch (err) {
      console.error("❌ EMAIL FAILED");
      console.error(err);

      await admin.firestore()
        .collection("contacts")
        .doc(docId)
        .update({
          emailStatus: "failed",
          error: String(err)
        });

      return null;
    }
  });