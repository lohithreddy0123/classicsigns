import { useState } from "react";
import "./contact.css";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        createdAt: serverTimestamp(),
        status: "pending"
      });

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (err) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h1>Contact Porcelain Sign Experts</h1>

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

            <textarea
              name="message"
              placeholder="Tell us about your custom porcelain sign project"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="success-msg">
                ✅ Message received successfully. Our team will get back to you soon.
              </p>
            )}

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
          <p>Our team responds with available options and details.</p>

          <h3>Design & Production</h3>
          <p>We confirm specifications and begin crafting your sign.</p>

          <h3>Worldwide Delivery</h3>
          <p>Your finished sign is securely packed and shipped worldwide.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;