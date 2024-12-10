import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose us for your projects?",
      answer: "We provide exceptional quality and dedicated services to ensure the success of your projects.",
    },
    {
      question: "How we provide services for you?",
      answer: "Our team of experts works closely with you to meet your unique requirements and deliver outstanding results.",
    },
    {
      question: "About content creation, can I participate in the idea?",
      answer: "Yes, we encourage client involvement to ensure that the content aligns with their vision and goals.",
    },
    {
      question: "How are we more affordable than others?",
      answer: "We offer competitive pricing without compromising on quality, making our services accessible to a wide range of clients.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100 lg:px-24">
      <div className="px-4 grid md:grid-cols-2 gap-10">
        {/* Left section with title and description */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="h-[0.6px] w-full bg-red-600 mt-4"></div>
        </div>

        {/* Right section with FAQ items */}
        <div className="bg-white shadow-lg p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 font-semibold text-gray-800  hover:text-blue-600 focus:outline-none flex justify-between"
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 text-sm pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
