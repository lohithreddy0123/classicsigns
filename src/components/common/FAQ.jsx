import React, { useState } from 'react';
import './faq.css';
const FAQ = () => {
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ items data
  const faqs = [
    {
      question: "What is included in the free Lite plan?",
      answer: "The free Lite plan includes a thorough website review, identification of key SEO issues, and customized recommendations for improvement."
    },
    {
      question: "How do I upgrade from the free plan to a paid plan?",
      answer: "You can upgrade by contacting us through our website or by selecting one of our paid plans on the pricing page. Our team will assist you with the process."
    },
    {
      question: "What are the benefits of the paid SEO plans?",
      answer: "Our paid SEO plans offer comprehensive keyword research, on-page optimization, link building, technical SEO, local SEO, and content marketing. These services are designed to improve your website's visibility and ranking significantly."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy, and while some improvements can be seen in a few weeks, significant results usually take 3 to 6 months depending on the competition, your website’s current status, and the SEO strategy implemented."
    },
    {
      question: "Do you offer local SEO services?",
      answer: "Yes, we provide local SEO services to help your business rank higher in local search results. This includes optimizing Google My Business profiles, managing local listings, and creating geo-targeted content."
    },
    {
      question: "Can you guarantee first-page rankings on Google?",
      answer: "No SEO provider can guarantee first-page rankings on Google. However, we follow best practices and use proven strategies to significantly improve your website’s visibility and search engine rankings."
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer: "On-page SEO involves optimizing elements on your website such as content, meta tags, and internal linking. Off-page SEO focuses on external factors like backlinks, social signals, and online mentions that improve your site’s authority and ranking."
    },
    {
      question: "Do I need to make changes to my website for SEO to work?",
      answer: "Yes, SEO often requires changes to your website’s content, structure, and technical elements. Our team will provide detailed recommendations or make changes directly with your approval to ensure your site is fully optimized."
    },
    {
      question: "How do you track the success of an SEO campaign?",
      answer: "We use a combination of tools such as Google Analytics, Search Console, and third-party SEO tools to track key metrics like organic traffic, keyword rankings, backlinks, and conversion rates. You’ll receive regular reports detailing these metrics."
    },
    {
      question: "What is technical SEO, and do you offer it?",
      answer: "Technical SEO focuses on improving the backend aspects of your website, such as site speed, mobile-friendliness, structured data, and crawlability. Yes, we offer technical SEO services to ensure your website performs optimally for search engines."
    },
    {
      question: "Will I need to continue paying for SEO after achieving good rankings?",
      answer: "Yes, SEO is an ongoing process. Even after achieving good rankings, it’s important to continue optimizing and maintaining your website to retain and improve your rankings over time."
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

