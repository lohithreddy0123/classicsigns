import { useState } from "react";
import "./contact.css";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      console.log("📤 Saving to Firestore:", form);

      const docRef = await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        website: form.website,
        message: form.message,
        createdAt: serverTimestamp(),
        status: "pending"
      });

      console.log("✅ Saved to Firestore:", docRef.id);

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: ""
      });

    } catch (err) {
      console.error("❌ Firestore error:", err);
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h1>Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="website"
              placeholder="Website URL"
              value={form.website}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <p className="success-msg">
                ✅ Message received successfully. Email notification sent to our team.
              </p>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <p className="error-msg">
                ❌ {error}
              </p>
            )}
          </form>
        </div>

        {/* INFO */}
        <div className="contact-info">
          <h2>What Happens Next?</h2>

          <h3>Request Received</h3>
          <p>We review your enquiry and project requirements.</p>

          <h3>Factory Response</h3>
          <p>Our team replies with details on options and availability.</p>

          <h3>Design & Production</h3>
          <p>We confirm details and begin creating your sign.</p>

          <h3>Worldwide Delivery</h3>
          <p>Your finished sign is packed and shipped globally.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;