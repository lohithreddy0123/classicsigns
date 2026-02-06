import { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
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
        phone: '',
        location: '',
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
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="City & Country"
              value={form.location}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={handleChange}
              required
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
          <p>We’ll explore your signage needs and objectives.</p>

          <h3>Plan Selection</h3>
          <p>Choose the best approach for your project.</p>

          <h3>Let’s Get Started!</h3>
          <p>Once confirmed, we’ll begin production.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact