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
        <div className="contact-info">
          <h2>What Happens Next?</h2>

          <h3>Meeting Scheduled</h3>
          <p>We'll contact you within 24 hours to book a call.</p>

          <h3>Project Discussion</h3>
          <p>We’ll explore your SEO needs and objectives.</p>

          <h3>Plan Selection</h3>
          <p>Choose the best plan to meet your goals.</p>

          <h3>Let’s Get Started!</h3>
          <p>Once confirmed, we’ll begin optimizing right away.</p>
        </div>


      </div>
    </section>
  )
}

export default Contact
