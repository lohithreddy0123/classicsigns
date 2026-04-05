import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are classic porcelain signs?",
      answer: "Classic porcelain signs are durable, enamel-coated metal signs originally used for advertising in the early to mid-1900s. Known for their glossy finish and vibrant colors, they are now popular with collectors and used as statement décor pieces."
    },
    {
      question: "What makes porcelain signs valuable?",
      answer: "Porcelain signs hold value due to their historical significance, brand rarity, and condition. Signs from well-known brands are often sought after by collectors for their nostalgic and long-term value."
    },
    {
      question: "How are porcelain signs made?",
      answer: "Porcelain signs are created by fusing powdered glass onto steel at high temperatures. This process produces a glossy, weather-resistant surface that keeps its color and finish for decades."
    },
    {
      question: "Do you make custom porcelain signs?",
      answer: "Yes, we specialize in custom porcelain signs for businesses, collectors, and personal projects. We create designs tailored to your style, branding, and requirements."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer worldwide delivery with protective packaging to ensure your sign arrives safely. Delivery times depend on location and order size."
    },
    {
      question: "Can I restore or repair my old porcelain sign?",
      answer: "We provide restoration services for damaged or aged porcelain signs. Our process focuses on matching original colors and finishes while preserving authenticity."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major cards, PayPal, and secure bank transfers. All transactions are encrypted to ensure safe payments."
    },
    {
      question: "Do you offer bulk orders for businesses?",
      answer: "Yes, we handle bulk and wholesale orders for businesses and projects. Contact us to receive custom pricing and details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {faq.question}
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>

          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;