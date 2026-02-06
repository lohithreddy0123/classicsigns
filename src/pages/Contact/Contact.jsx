import { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // simulate frontend-only submit
    console.log('Form Data:', form)

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setForm({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      })
    }, 3000)
  }

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
            />

            <button type="submit">
              Send Message
            </button>

            {submitted && (
              <p className="success-msg">
                ✅ Message submitted (frontend only)
              </p>
            )}
          </form>
        </div>

        {/* INFO */}
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
  )
}

export default Contact
