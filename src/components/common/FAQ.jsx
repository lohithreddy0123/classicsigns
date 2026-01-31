import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ items data
  const faqs = [
    {
      question: "What are classic porcelain signs?",
      answer: "Classic porcelain signs are durable, enamel-coated metal signs originally used for advertising in the early to mid-1900s. Known for their glossy finish and vibrant colors, they’ve become collector favorites and statement décor pieces today by porcelain enamel sign collectors and enthusiasts."
    },
    {
      question: "Are our porcelain signs original or reproductions?",
      answer: "We offer both authentic vintage porcelain signs and high-quality reproductions. Each listing clearly mentions whether the sign is original or a replica, along with condition details and age estimates."
    },
    {
      question: "What makes porcelain signs valuable?",
      answer: "Porcelain signs hold value due to their historical significance, brand rarity, and condition. Signs from popular brands like Coca-Cola, Texaco, or Shell are often sought after by collectors for their nostalgic and investment value."
    },
    {
      question: "How are porcelain signs made?",
      answer: "Traditional porcelain signs are crafted by fusing powdered glass onto steel sheets at high temperatures. This process creates a glossy, weather-resistant surface that maintains its color and design for decades."
    },
    {
      question: "Do you make custom enamel or porcelain signs?",
      answer: "Yes, we specialize in custom porcelain signs for homes, businesses, and collectors. From retro gas station logos to personalized garage plaques, we can create designs that reflect your style or brand identity."
    },
    {
      question: "How do I care for and maintain a porcelain sign?",
      answer: "Porcelain signs are low-maintenance. Simply wipe them with a soft damp cloth and avoid abrasive cleaners or harsh scrubbing. For vintage originals, gentle handling preserves the enamel and patina value."
    },
    {
      question: "How do I know if a porcelain sign is authentic?",
      answer: "Original porcelain signs often feature layered enamel, visible rusting on steel edges, and slight imperfections from hand production. We provide detailed images and authentication notes for each sign listed."
    },
    {
      question: "Do we ship internationally?",
      answer: "Yes, we offer worldwide shipping with protective packaging to ensure your sign arrives in perfect condition. Delivery times vary based on location and size of the sign."
    },
    {
      question: "Can I restore or repair my old porcelain sign?",
      answer: "We offer porcelain sign restoration services for damaged or faded signs. Our restoration experts match original colors and finishes to bring your vintage signage back to life while maintaining authenticity."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major cards, PayPal, and secure online bank transfers. All transactions are encrypted to protect your data."
    },
    {
      question: "What is our return policy?",
      answer: "Custom or restored items are non-returnable."
    },
    {
      question: "Can you bulk order porcelain signs for your business or project?",
      answer: "Absolutely. We handle bulk and wholesale orders. Contact us for custom quotes and bulk pricing."
    }
  ];

  // Function to toggle the FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Open/close FAQ based on current state
  };

  return (
    <div id="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            {faq.question}
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
